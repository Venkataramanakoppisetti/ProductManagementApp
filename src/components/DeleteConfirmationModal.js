// src/components/DeleteConfirmationModal.js
import React from 'react';
import { Modal } from 'antd';

const DeleteConfirmationModal = ({ product, onConfirm, onCancel }) => {
  return (
    <Modal
      title="Delete Product"
      visible={true}
      onOk={onConfirm}
      onCancel={onCancel}
      okText="Yes"
      cancelText="No"
    >
      <p>Are you sure you want to delete "{product.name}"?</p>
    </Modal>
  );
};

export default DeleteConfirmationModal;
