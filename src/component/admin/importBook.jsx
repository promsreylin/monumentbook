import React, { useEffect, useState } from "react";
import { Button, Col, Divider, Form, Input, Row, Space, Upload, message, Select } from "antd";
import { LoadingOutlined, PlusOutlined, CloseOutlined, FolderAddOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import UploadService from "../../redux/service/UploadService";
import BookService from "../../redux/service/BookService";
import { useSelector } from "react-redux";
import { setAllBook } from "../../redux/slices/BookSlice";
import { useDispatch } from "react-redux";

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const ImportBook = (props) => {
    const { isbn, price, qty, vendor, setData } = props;
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getAllBookService = () => {
        BookService.getAllBook(1, 500)
            .then((res) => {
                console.log("res", res);
                dispatch(setAllBook(res.data));
            })
            .catch((error) => {
                console.error("Error fetching all books:", error);
                // Handle the error as needed (e.g., show an error message to the user)
            });
    };
    const [id, setid] = useState();

    const onFinish = (values) => {
        // setData(values);
        // navigate("/list", { state: { previousPath: pathname } })
        const data = {
            qty: values.qty,
            cost: values.price,
            vendor: values.vendor,
        };
        BookService.importbook(data, id);
    };

    const handleChangese = (value) => {
        console.log(`Selected: ${value}`);
        setid(value)
    };
    const resAllBook = useSelector((state) => state.book.allBook);
    console.log(resAllBook, "resAllBook")
    const options = resAllBook.map((resitem) => ({
        label: resitem.title,
        value: resitem.id,
        emoji: '📚',
        desc: resitem.isbn,
    }))

    useEffect(() => {
        getAllBookService();
    }, [])

    return (
        <Form
            layout="vertical"
            onFinish={onFinish}
            className="shadow-lg rounded-lg p-5 pt-2 pb-10"
        >
            <Divider orientation="left">Import Book </Divider>
            <Row gutter={24}>
                <Col span={8} className="lg:pr-20">
                    <Form.Item
                        label="ISBN"
                        name="isbn"
                        rules={[{ required: true }]}
                    >
                        <Select
                            size="large"
                            mode="single" // Change mode to "single"
                            placeholder="Please select ISBN"
                            style={{ flex: 1 }}
                            showSearch={true}
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {resAllBook.map((book) => (
                                <Select.Option key={book.id} value={book.isbn}>
                                    {book.isbn}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Quantity"
                        name="qty"
                        rules={[{ required: true }]}
                    >
                        <Input size="large" value={qty} />
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true }]}
                    >
                        <Input size="large" value={price} />
                    </Form.Item>
                    <Form.Item
                        label="Preferred Vendor"
                        name="vendor"
                        rules={[{ required: true }]}
                    >
                        <Input size="large" value={vendor} />
                    </Form.Item>
                    <Space className="mt-4" >
                        <Button icon={<CloseOutlined />} size="large" block danger onClick={() => navigate("dashboard", { state: { previousPath: pathname } })}>Cancel</Button>
                        <Button icon={<FolderAddOutlined />} size="large" block style={{ border: 0, backgroundColor: "#3A53A4", color: "#fff" }} htmlType="submit">Save</Button>
                    </Space>
                </Col>
            </Row>
        </Form>
    )
}

export default ImportBook