import { CloseOutlined, DeleteOutlined, EditOutlined, FolderAddOutlined, FolderViewOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, Input, Row, Select, Space, Table, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react'
import UploadService from '../../../redux/service/UploadService';
import NewsServises from '../../../redux/service/NewsServices';
import { useDispatch, useSelector } from 'react-redux';
import { setAllNews } from '../../../redux/slices/NewsSlices';

function OurActivities() {
  const [loading, setLoading] = useState(false);
  const [titleform, settitleform] = useState("Create Item ");

  const [imageUrl, setImageUrl] = useState();
  const dispatch = useDispatch();
  const resNews = useSelector((state) => state.news.allNews)
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const pageSize = 10;
  
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    coverImg: '',
  });
  const setFormValues = (record) => {
    setFormData({
      id: record.id,
      title: record.title,
      description: record.description,
      coverImg: record.cover.props.src,
    });
    console.log(formData, 'setFormValues');
  };
  const onFinish = (values) => {
    try {
      const data = {
        title: values.title,
        description: values.description,
        coverImg: imageUrl,
      };

      console.log("formData.id", formData.id)
      if (formData.id) {
        // Update existing entry
        const id = formData.id;
        NewsServises.updateNews(id, data);
        console.log("edit")
      } else {
        // Add new entry
        console.log("add")
        NewsServises.addNews(data);
      }
    } catch (error) {
      // Handle errors
      console.error("Error in onFinish:", error);
    }

  };
  useEffect(() => {
    console.log(formData, 'setFormValues');
  }, [formData]); // Add formData as a dependency

  const handleEdit = (record) => {
    setFormValues(record);
    settitleform("Edit Item")

  };
  const handleDelete = (record) => {
    try {
      // Implement logic to delete the entry with the given id
      NewsServises.deleteNews(record.id);
      handleGetAllNews();
    } catch (error) {
      console.error("Error deleting entry:", error);
      // Handle error as needed (e.g., show a message to the user)
    }
  };
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      cover: ''
    });
    settitleform("Create Item")
  };
  const handleGetAllNews = () => {
    try {
      NewsServises.getAllNews(1,currentPageSize)
        .then((res) => {
          // console.log("res.dataa", res);
          setCurrentPageSize(res.totalElements)
          dispatch(setAllNews(res.data));
        })
        .catch((error) => {
          console.error("Error fetching best-selling books:", error);
          // Handle the error as needed, e.g., show a user-friendly message or dispatch an error action
        });
    } catch (error) {
      // Handle errors
      console.error("Error in onFinish:", error);
    }
  }
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

  let dataSource = resNews.map((item, index) => ({
    id: item.id,
    key: index + 1,
    cover: <img src={item.coverImg} alt={`Cover ${index}`} style={{ maxWidth: '100%', maxHeight: '50px' }} />,
    title: item.title,
    description: item.description && item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description,
    date: item.date
  }));
  const columns = [
    {
      title: "No",
      dataIndex: "key",
      width: "5%",
      align: "center",
      fixed: "left",
    },
    {
      title: "Cover",
      dataIndex: "cover",
      width: "10%",
      align: "center",
    },
    {
      title: "Title",
      dataIndex: "title",
      width: "25%",
      align: "center",
    },
    {
      title: "Description",
      dataIndex: "description",
      align: "center",
      width: "25%",
    },
    {
      title: "Date",
      dataIndex: "date",
      align: "center",
      width: "20%",
    },
    {
      title: 'Action',
      key: 'action',
      width: "10%",
      render: (_, record) => (
        <Space size="middle">
          {/* <a onClick={() => setFormValues(record)}><FolderViewOutlined /> {record.name}</a> */}
          <a onClick={() => handleEdit(record)}><EditOutlined /> {record.name}</a>
          <a onClick={() => handleDelete(record)}><DeleteOutlined /></a>

        </Space>
      ),
    }
  ];
  useEffect(() => {
    handleGetAllNews();
    handleDelete();
    onFinish();
  }, [])
  useEffect(() => {
    handleGetAllNews();
  }, [currentPageSize])
  return (
    <>
      <Form
        layout="vertical"
        onFinish={onFinish}
        className="shadow-lg rounded-lg p-5 pt-2 pb-10"
      >
        <Divider orientation="left">{titleform} </Divider>
        <Row gutter={20}>
          <Col className="w-3/12 ">
            <Upload
              customRequest={async ({ file, onSuccess, onError }) => {
                try {
                  const imageUrl = await UploadService.upload(file);
                  onSuccess();
                  setImageUrl(imageUrl.body.data)
                } catch (error) {
                  onError(error);
                }
              }}
              onChange={handleChange}
            >
              {imageUrl ? (
                // Display the uploaded image
                <img
                  src={imageUrl}
                  alt="bookCover"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%',
                  }}
                />
              ) : (
                formData.coverImg ? (
                  // Display the image from formData if available
                  <img
                    src={formData.coverImg}
                    alt="Cover"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '100%',
                    }}
                  />
                ) : (
                  // Display the uploadButton if no image is available
                  uploadButton
                )
              )}
            </Upload>
            <Form.Item
              className="text-[#292D77]"
              label="Title"
              name="title"
              rules={[{ required: true }]}
            >
              <Input
                size="large"
                value={formData.title}
              />
              <p onChange={(e) => setFormData({ ...formData, title: e.target.value })}></p>
            </Form.Item>
          </Col>
          <Col className="w-9/12">

            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true }]}
            >
              <TextArea
                showCount
                maxLength={5000}
                placeholder="disable resize"
                rows={8}
                value={formData.description}
              />
              <p onChange={(e) => setFormData({ ...formData, description: e.target.value })}></p>
            </Form.Item>
            <Space className="mt-5">
              <Button size="large" icon={<CloseOutlined />} block danger onClick={resetForm}>Cancel</Button>
              <Button size="large" icon={<FolderAddOutlined />} block style={{ border: 0, backgroundColor: "#3A53A4", color: "#fff" }} htmlType="submit">Save</Button>
            </Space>
          </Col>
        </Row>
      </Form>
      {/* table */}
      <div className="py-2 shadow-lg rounded-lg">
        <Table
          bordered
          columns={columns}
          dataSource={dataSource}
          scroll={{ x: 1500, y: 300 }}
          rowKey="id"
        />
      </div>
    </>
  )
}

export default OurActivities