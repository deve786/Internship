import {
  CaretRightOutlined,
  CaretLeftOutlined,
  BookOutlined,
} from "@ant-design/icons";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { FaBloggerB } from "react-icons/fa";
// import { MdWorkOutline } from "react-icons/md";
// import { GrServices } from "react-icons/gr";
// import { GrCircleInformation } from "react-icons/gr";
import { Button, Layout, Menu, theme } from "antd";
import { React, useEffect, useState } from "react";

import client from "../createClient";

import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const Courses = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await client.fetch(`
          *[_type == "courses"] {
            key,
            icon,
            title,
            slug
          }
        `);
        setMenuItems(response);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={menuItems.map((menuItem) => ({
            key: menuItem.slug.current,
            icon: menuItem.icon,
            label: menuItem.title,
            
          }))}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-1 px-3"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <CaretRightOutlined /> : <CaretLeftOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Courses;
