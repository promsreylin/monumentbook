import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import { Menu, theme } from "antd";
import { RiFileListLine, RiMenuAddLine, RiUserSettingsLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const SiderBarComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ background: colorBgContainer }}
      className="hidden shadow-lg lg:block"
    >
      <Menu
        // onClick={onClick}
        style={{ borderRight: 'none', }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={[
          {
            key: '1',
            icon: <RiUserSettingsLine />,
            label: <Link to="">Admin Dashboard</Link>,
          },
          {
            key: '2',
            icon: <RiFileListLine />,
            label: <Link to="list">List Production</Link>,
          },
          {
            key: '3',
            icon: <RiMenuAddLine />,
            label: <Link to="createNew">Create New</Link>,
          },
          {
            key: '4',
            icon: <RiMenuAddLine />,
            label: <Link to="import">Import Book</Link>,
          },
          {
            label: "HomePage",
            children: [
              {
                key: "5",
                label: <Link to="booksOfTheWeek">Books of The Week</Link>,
              },
              {
                key: "6",
                label: <Link to="bestSellingBooks">Best Selling Books</Link>,
              },
              {
                key: "7",
                label: <Link to="newArrivals">New Arrivals</Link>,
              },
              {
                key: "8",
                label: <Link to="featureAuthor">Feature Author</Link>,
              },
              {
                key: "9",
                label: <Link to="ourActivities">Our Activities</Link>,
              }
            ],
          },
        ]}
      />
    </Sider>
  );
};

export default SiderBarComponent;
