// src/pages/ProductListPage.js
import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Table, Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import EditProductModal from '../components/EditProductModal';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal';

const ProductListPage = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setDeleteModalOpen(true);
  };

  const handleSaveEdit = (editedProduct) => {
    setProducts(products.map(product => product.id === editedProduct.id ? editedProduct : product));
    setEditModalOpen(false);
  };

  const handleConfirmDelete = () => {
    setProducts(products.filter(product => product.id !== selectedProduct.id));
    setDeleteModalOpen(false);
  };

  const handleCancel = () => {
    setSelectedProduct(null);
    setEditModalOpen(false);
    setDeleteModalOpen(false);
  };

  const filteredProducts = products.filter(product => 
    (product.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (product.description?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (product.category?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <>
          <Button onClick={() => handleEditClick(record)}>Edit</Button>
          <Button onClick={() => handleDeleteClick(record)} danger>Delete</Button>
        </>
      ),
    },
  ];

  return (
    <div className="container">
      <h1>Products List</h1>
      <Link to="/add">
        <Button type="primary" style={{ marginBottom: '20px' }}>Add Product</Button>
      </Link>
      <Input.Search
        placeholder="Search products"
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Table 
        dataSource={filteredProducts} 
        columns={columns} 
        rowKey="id"
        rowClassName={(record) => record.category?.toLowerCase() || ''} 
      />

      {isEditModalOpen && (
        <EditProductModal
          product={selectedProduct}
          onSave={handleSaveEdit}
          onCancel={handleCancel}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          product={selectedProduct}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default ProductListPage;
