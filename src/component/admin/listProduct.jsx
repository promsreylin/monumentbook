import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
    PlusSquareOutlined,
} from "@ant-design/icons";
import { Button, Form, Modal, Space, Table } from "antd";
import React, { useState } from "react";
import Search from "antd/es/input/Search";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ListProduct = (props) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [views, setViews] = useState();
    const [open, setOpen] = useState(false);

    const { data, setbookdit, setData } = props;
    const dataSource = [];

    const onCreate = () => {
        setOpen(false);
    };

    if (data) {
        dataSource.push(data);
    }

    const viewDetails = (code) => {
        let values = dataSource.filter((id) => id.code === code);
        if (values) {
            setViews(values);
        };
    };

    const onUpdate = () => {
        let values = dataSource;
        if (values) {
            setbookdit(values);
        };
    };

   // columns for table
 const columns = [
    {
      title: "No",
      dataIndex: "id",
      width: "15%",
      align: "center",
      fixed: "left",
    },
    {
      title: "ISBN",
      dataIndex: "isbn",
      width: "20%",
      align: "center",
    },
    {
      title: "Book Name",
      dataIndex: "title",
      align: "center",
      width: "50%",
    },
    {
      title: "Description",
      dataIndex: "description",
      width: "60%",
      align: "center",
    },
    {
      title: "Price",
      dataIndex: "price",
      align: "center",
      width: "40%",
    },
    {
      title: "Publisher",
      dataIndex: "publisher",
      align: "center",
      width: "20%",
    },
    {
      title: "Publish Date",
      dataIndex: "publisher",
      align: "center",
      width: "30%",
    },
    {
      title: "Author",
      dataIndex: "authorId",
      align: "center",
      width: "25%",
    },
    {
      title: "Vendor",
      dataIndex: "vender",
      align: "center",
      width: "20%",
  
    },
    {
      title: "Quantity",
      dataIndex: "pty",
      align: "center",
      width: "20%",
  
    },
    {
      title: "Cost",
      dataIndex: "cost",
      align: "center",
      width: "20%",
    },
    {
      title: "Image",
      dataIndex: "coverImg",
      width: "20%",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      width: "30%",
      fixed: "right",
      render: (_, record) => (
        <Space>
          <Link to="/dashboard/detail">
            <EyeOutlined style={{ color: "##292D77" }} onClick={() => onUpdate(record)} />
          </Link>
          <Link to="/dashboard/edit">
            <EditOutlined style={{ color: "##292D77" }} onClick={() => onUpdate(record)} />
          </Link>
          <DeleteOutlined
            onClick={() => {
              onDeleteProduct(record.code);
            }}
            style={{ color: "red" }}
          />
        </Space>
      ),
    },
  ];  

    const onDeleteProduct = (code) => {
        Modal.confirm({
            title: " Are you sure you want to delete this book record?",
            onOk: () => {
                const values = dataSource.filter((item) => item.code !== code);
                if (values) {
                    dataSource.push(values);
                }
                setData(values);
            },
        });
    };

    return (
        <div className="shadow-lg rounded-lg">
            <Form
                style={{
                    padding: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginBottom: 10,
                    borderRadius: "5px",
                    background: "#ffffff",
                }}
            >
                <Space style={{ justifyContent: "space-between", display: "flex" }}>
                    <Search
                        placeholder="Search..."
                        style={{ width: 400, borderColor: "#fff" }}
                    />
                    <Button
                        block
                        onClick={() =>  navigate("/dashboard/createNew", { state: { previousPath: pathname } })}
                        icon={<PlusSquareOutlined fill="#000" />}
                        style={{ border: 0, backgroundColor: "#3A53A4", color: "#fff" }}
                    >
                        Create New
                    </Button>
                </Space>
            </Form>
            <div
                style={{
                    padding: 10,
                    paddingBottom: 20,
                    borderRadius: "5px",
                    background: "#fff",
                }}
            >
                {/* table */}
                <div className="py-2 shadow-lg rounded-lg">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={dataSource}
                        scroll={{ x: 1500, y: 300 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ListProduct;
