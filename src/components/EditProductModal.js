// src/components/EditProductModal.js
import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

const EditProductModal = ({ product, onSave, onCancel }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    onSave({ ...product, ...values });
  };

  return (
    <Modal
      title="Edit Product"
      visible={true}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>Cancel</Button>,
        <Button key="submit" type="primary" onClick={() => form.submit()}>Save</Button>
      ]}
    >
      <Form
        form={form}
        initialValues={product}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input the product name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please input the product description!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: 'Please input the product category!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: 'Please input the product price!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditProductModal;
