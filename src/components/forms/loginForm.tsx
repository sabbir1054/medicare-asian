"use client";

import { Button, Form, Input } from "antd";
type ILoginInput = {
  emai: string;
  password: string;
};
const LoginForm = () => {
  const onFinish = (values: ILoginInput) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{
        width: "100%",
        maxWidth: "400px",
        padding: "40px",
        borderRadius: "10px",
      }}
      className="bg-white  rounded-lg shadow-lg "
    >
      <h1 className="text-2xl text-left font-secondary font-semibold mb-3">
        Login
      </h1>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
        className="mb-6"
      >
        <Input
          placeholder="name@company.com"
          className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg py-2 px-4 w-full"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        className="mb-6"
      >
        <Input.Password
          placeholder="Password"
          className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg py-2 px-4 w-full"
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        className="flex items-center justify-between mb-4"
      >
        <a href="" className="text-primary">
          Forgot password?
        </a>
      </Form.Item>

      <Form.Item className="mb-6">
        <Button
          // style={{ backgroundColor: "var(--primaryColor) !important" }}
          htmlType="submit"
          className="!bg-primary !text-white py-2 px-4 w-full rounded-lg"
        >
          Sign in
        </Button>
      </Form.Item>

      <Form.Item>
        <div className="text-center text-gray-900">
          Do not have an account yet?
          <a href="" className="text-primary">
            Sign up
          </a>
        </div>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
