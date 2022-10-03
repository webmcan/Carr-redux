import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import sendError from '../utils/sendError';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { LoginForm, useAuthDispatch } from '../types/auth';
import { login } from '../store/actions/authActions';
import sendSuccess from '../utils/sendSuccess';



function AuthPage() {
    
    

    const navigate = useNavigate();


          
    const dispatch = useAuthDispatch();

    const {data, loading, error} = useSelector((state: AppState) => state.auth);

    const onFinish = (values: LoginForm) => {
      dispatch(login(values));
    }

    useEffect (() => {error && sendError(error) }, [error]);

    useEffect (() => {
      const token = localStorage.getItem("token");

      if(token) {
        navigate('/vehicles');
        sendSuccess("Succeeded!");
      }
    
    }, [navigate] );

    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        sendError(errorInfo);
      };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  

    );
}

export default AuthPage;
