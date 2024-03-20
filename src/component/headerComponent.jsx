import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import logo from "../assets/images/MBLogo.png";
import Sidebar from "./SideBarComponent";
import { HiLogout, HiOutlineMenu, HiOutlineShoppingCart, HiSearch, HiUser } from "react-icons/hi";
import { Dropdown, Form, Input, Menu } from "antd";
import { items } from "./DataComponent";

const HeaderComponent = () => {
  // const [current, setCurrent] = useState("function");
  const onFinish = (values) => {
    // Handle the search logic here
    console.log("Search:", values);
  };
  // const onClick = (e) => {
  //   console.log("click ", e);
  //   setCurrent(e.key);
  // };

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Popover className="bg-white shadow-md sticky top-0 z-10 max-w-full px-[5px] sm:px-[20px] md:px-[50px] lg:px-[100px]">
      <div className="flex justify-between items-center lg:gap-10 h-20">
        <Link className="flex-none" to="/">
          <img
            className="py-2 pt-5 object-cover h-20"
            src={logo}
            alt="logo"
          />
        </Link>
        <Menu className="grow lg:flex hidden " onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        <div className="flex items-center justify-end text-[#292D77] py-5 ">
          <Form name="searchForm" onFinish={onFinish} layout="inline">
            <Input
              name="searchForm"
              className="hidden px-2 md:flex border border-[#292D77] rounded-lg focus:border-[#292D77] outline-none"
              placeholder="Enter search text"
            // value={data}
            // onPressEnter={handleSearch}
            // onChange={(e) => setSearchText(e.target.value)}
            // prefix={<HiSearch className="w-6 h-6 pr-2" />}
            />
          </Form>
          <Link to="/cart">
            <HiOutlineShoppingCart className="mx-2 md:mx-[10px] w-6 h-6" />
          </Link>
          <Dropdown
            menu={{
              items: [{
                label: (
                  <Link to="dashboard" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Admin
                  </Link>
                ),
                key: '0',
              },
              {
                type: 'divider',
              },
              {
                label: <p> Logout </p>,
                key: '1',
                icon: <HiLogout />
              }]


            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <HiUser className="mx-2 md:mx-[10px] w-6 h-6" />
            </a>
          </Dropdown>
          <Popover.Button className="lg:hidden inline-flex items-center rounded-md bg-white focus:outline-none hover:bg-white">
            <HiOutlineMenu className="h-6 w-6 text-[#292D77] outline-none border-none" />
          </Popover.Button>
        </div>
      </div>
      <Form
        name="search"
        onFinish={onFinish}
        layout="inline"
        className="flex md:hidden pb-3"
      >
        <Input
          name="search"
          className="px-2 border border-[#292D77] rounded focus:border-[#292D77] outline-none"
          placeholder="Enter search text"
          // value={data}
          // onPressEnter={handleSearch}
          // onChange={(e) => setSearchText(e.target.value)}
          prefix={<HiSearch className="w-6 h-6 pr-2" />}
        />
      </Form>
      <Sidebar />
    </Popover>
  );
};

export default HeaderComponent;
