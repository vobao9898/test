import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Typography, notification } from "antd";
const { Title } = Typography;

const App = (props) => {

  const openNotification = (title, description) => {
    const args = {
      message: title,
      description: description,
      duration: 2,
    };
    notification.open(args);
  };

  const onFinish = (values) => {
    openNotification('Thông báo', 'Đăng nhập thành công')
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ width: "500px" }}
      >
        <Title style={{ textAlign: "center", marginBottom: "30px" }} level={2}>
          Đăng nhập
        </Title>
        <Form.Item
          label="Email"
          placeholder="Nhập email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập Email!" },
            {
              required: false,
              pattern: new RegExp(
                "^[a-zA-Z0-9-]*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$"
              ),
              message: "Email không đúng định dạng!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          placeholder="Nhập password"
          rules={[{ required: true, message: "Vui lòng nhập password!" },{
            required: false,
            pattern: new RegExp(
              "^.{8,}$"
            ),
            message: "Password có tối thiếu 8 kí tự!",
          },]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
