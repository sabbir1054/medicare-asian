"use client";

import { Button, Form, Input } from "antd";
import { RuleObject } from "antd/es/form";
import { StoreValue } from "antd/es/form/interface";
import Link from "next/link";
import "tailwindcss/tailwind.css";

type IRegisterInput = {
  name: string;
  email: string;
  password: string;
  rePassword: string;
};

const RegisterForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: IRegisterInput) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const validatePassword = (_: RuleObject, value: StoreValue) => {
    if (value && form.getFieldValue("password") !== value) {
      return Promise.reject(
        new Error("The two passwords that you entered do not match!")
      );
    }
    return Promise.resolve();
  };

  return (
    <Form
      form={form}
      name="register"
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
        Register
      </h1>

      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
        className="mb-6"
      >
        <Input
          placeholder="Name"
          className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg py-2 px-4 w-full"
        />
      </Form.Item>

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
        name="rePassword"
        dependencies={["password"]}
        hasFeedback
        rules={[
          { required: true, message: "Please confirm your password!" },
          { validator: validatePassword },
        ]}
        className="mb-6"
      >
        <Input.Password
          placeholder="Retype Password"
          className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg py-2 px-4 w-full"
        />
      </Form.Item>

      <Form.Item className="mb-6">
        <Button
          htmlType="submit"
          className="!bg-primary !text-white py-2 px-4 w-full rounded-lg"
        >
          Register
        </Button>
      </Form.Item>

      <Form.Item>
        <div className="text-center text-gray-900">
          Already have an account?
          <Link href="/login" className="text-primary">
            Login
          </Link>
        </div>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
