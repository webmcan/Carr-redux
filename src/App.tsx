import React, { useState } from "react";
import { Link,  Route, Routes, useNavigate } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import AuthRoute from "./components/AuthRoute";
import Models from "./components/Models";
import Vehicles from "./components/Vehicles";
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.min.css' ;


import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CarOutlined,
  UserOutlined,

} from '@ant-design/icons';
import MenuItem from "antd/lib/menu/MenuItem";

const { Header, Sider, Content } = Layout;


function App() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();


  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" style={{ height: 32 , margin: 16 , backgroundColor: "white" }} />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['/login']}
          style={{marginTop:50}}
          //onClick={() => navigate(key)}
          // items={[
          //   {
          //     key: '/login',
          //     icon: <UserOutlined />,
          //     label: 'User',
          //   },
          //   {
          //     key: '/vehicles',
          //     icon: <CarOutlined />,
          //     label: 'Vehicles',
          //   },
            
          // ]}
        >
          <MenuItem key={"/login"} icon= {<UserOutlined/>} >
            <Link to="/login" >User</Link>
          
          </MenuItem>
          <MenuItem key={"/vehicle"} icon= {<CarOutlined/>}>
            <Link to="/vehicles" >Cars</Link>
          
          </MenuItem>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{  padding: 10 , color: "white"}}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}


        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
           <React.Fragment>
              <Routes>
                <Route path="/login" element = {<AuthPage/>}/>
                <Route path='/' element={<AuthRoute/>}>
                  <Route path='/vehicles' element={<Vehicles/>}/>
                </Route>
                <Route path="/models" element = {<Models/>}/>
                {/* //<AuthRoute path="/vehicles" element = {<Vehicles/>}/> */}
              </Routes>
            </React.Fragment>
        </Content>
      </Layout>
    </Layout>
   
  );
}

export default App;
