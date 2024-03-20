import React, { useEffect, useState } from "react";
import { Button, Col, Divider, Form, Input, Row, Space, Upload, message, Select } from "antd";
import { LoadingOutlined, PlusOutlined, CloseOutlined, FolderAddOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import CategoryService from "../../redux/service/CategoryService";
import { useDispatch, useSelector } from "react-redux";
import { setAllCategory } from "../../redux/slices/CategorySlice";
import { setAllAuthor } from "../../redux/slices/AuthorSlice";
import AuthorServises from "../../redux/service/AuthorService";
import BookService from "../../redux/service/BookService";
import UploadService from "../../redux/service/UploadService";


const CreateNewComponent = (props) => {
    const { isbn, bookname, category, publisher, authorname, setNewData } = props;
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // res data
    const categories = useSelector((state) => state.category.allCategory)
    const resauthor = useSelector((state) => state.author.allAuthors)
    // console.log("author",author)
    // handle get category to select
    const handleGetCategory = () => {
        CategoryService.getAllCategory().then((res) => {
            console.log("res", res)
            dispatch(setAllCategory(res.data))
        })
    }
    // handle get category to select
    const handleGetAuthor = () => {
        AuthorServises.getAllAuthor().then((res) => {
            console.log("res", res)
            dispatch(setAllAuthor(res.body.data))
        })
    }
    const onFinish = (values) => {
        try {
            const data = {
                isbn: values.isbn,
                title: values.title,
                price: parseFloat(values.price),
                publisher: values.publisher,
                description: values.description,
                categoryId: values.categoryId,
                authorId: values.authorId,
                publishDate: values.publishDate,
                coverImg: imageUrl,
            };
            BookService.addbook(data);
        } catch (error) {
            // Handle errors
            console.error("Error in onFinish:", error);
        }
    };
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const handleChange = async (info) => {
        if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    };


    const uploadButton = (
        <button
            type="button"
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );
    useEffect(() => {
        handleGetCategory();
        handleGetAuthor();
    }, [])

    return (
        <>
            <Form
                layout="vertical"
                onFinish={onFinish}
                className="shadow-lg rounded-lg p-5 pt-2 pb-10"
            >
                <Divider orientation="left">Create New </Divider>
                <Row gutter={20}>
                <Col className="w-4/12">   <Upload
                        customRequest={async ({ file, onSuccess, onError }) => {
                            try {
                                const imageUrl = await UploadService.upload(file);
                                onSuccess();
                                console.log("Image URL:", imageUrl);
                                setImageUrl(imageUrl.body.data)
                            } catch (error) {
                                onError(error);
                            }
                        }}
                        onChange={handleChange}
                    >         {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="bookCover"
                            style={{
                                width: '100%', // Set the width to 100% of the parent container (Col)
                                height: 'auto', // Maintain aspect ratio
                                maxWidth: '100%', // Set the maximum width to 100% of the form
                            }}
                        />
                    ) : (
                        uploadButton
                    )}
                    </Upload></Col>
                 

                    <Col className="w-4/12">
                        <Form.Item
                            className="text-[#292D77]"
                            label="ISBN"
                            name="isbn"
                            rules={[{ required: true }]}
                        >
                            <Input size="large" />
                        </Form.Item>
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[{ required: true }]}
                        >
                            <Input size="large" />
                        </Form.Item>
                        <Form.Item
                            label="Price"
                            name="price"
                            rules={[{ required: true }]}
                        >
                            <Input size="large" />
                        </Form.Item>
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[{ required: true }]}
                        >
                            <TextArea
                                showCount
                                maxLength={2000}
                                placeholder="disable resize"
                                rows={8}
                            />
                        </Form.Item>
                    </Col>
                    <Col className="w-4/12">

                        <Form.Item
                            label="Publisher"
                            name="publisher"
                            rules={[{ required: true }]}
                        >
                            <Input size="large" />

                        </Form.Item>
                        <Form.Item
                            label="Publish Date"
                            name="publishDate"
                            rules={[{ required: true }]}
                        >
                            <Input size="large" type="date" />

                        </Form.Item>
                        <Form.Item
                            label="Category"
                            name="categoryId"
                            rules={[{ required: true }]}
                        >
                            <Select
                                size="large"
                                mode="multiple"
                                placeholder="Please select category"
                                style={{ flex: 1 }}
                            >
                                {categories.map((category) => (
                                    <Select.Option key={category.id} value={category.id}>
                                        {category.name}
                                    </Select.Option>
                                ))}
                            </Select>

                        </Form.Item>
                        <Form.Item
                            label="Author"
                            name="authorId"
                            rules={[{ required: true }]}
                        >
                            <Select
                                size="large"
                                mode="multiple"
                                placeholder="Please select category"
                                style={{ flex: 1 }}
                            >
                                {resauthor.map((author) => (
                                    <Select.Option key={author.id} value={author.id}>
                                        {author.name}
                                    </Select.Option>
                                ))}
                            </Select>

                        </Form.Item>
                        <Space className="mt-5">
                            <Button size="large" icon={<CloseOutlined />} block danger onClick={() => navigate("/dashboard", { state: { previousPath: pathname } })}>Cancel</Button>
                            <Button size="large" icon={<FolderAddOutlined />} block style={{ border: 0, backgroundColor: "#3A53A4", color: "#fff" }} htmlType="submit">Save</Button>
                        </Space>
                    </Col>
                </Row>
            </Form>

        </>
    );
};

export default CreateNewComponent;
