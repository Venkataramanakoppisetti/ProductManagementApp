React Product Management App
Project Setup Instructions
Prerequisites
Node.js installed on your machine
npm (Node Package Manager)
Initial Setup
Create a new React project using Create React App:

```bash
npx create-react-app product-management-app
cd product-management-app
Install Ant Design for UI components:
```

```bash
npm install antd
Install React Router DOM for routing:
```

```bash
npm install react-router-dom@6
Project Structure:
```

Create folders for components, pages, context, and styles.
Define a clear folder structure to keep the project organized:
plaintext

product-management-app/
├── src/
│   ├── components/
│   │   ├── DeleteConfirmationModal.js
│   │   ├── EditProductModal.js
│   ├── context/
│   │   ├── ProductContext.js
│   ├── pages/
│   │   ├── AddProductPage.js
│   │   ├── ProductListPage.js
│   ├── styles/
│   │   ├── AddProductPage.css
│   │   ├── ProductListPage.css
│   ├── App.js
│   ├── index.js
├── README.md
├── package.json
└── .gitignore

Component Explanations
Context
ProductContext.js
Purpose: Manages the global state for the product data.
Functionality:
Fetches initial product data from an API.
Provides products and setProducts through context to be used by any component in the app.
Pages
ProductListPage.js
Purpose: Displays a list of all products with functionalities to add, edit, and delete products.
Functionality:
Displays total products and unique categories.
Implements filters for product name, description, and category.
Uses Ant Design's Table component to display products.
Assigns different row colors for each category.
Includes buttons for adding, editing, and deleting products.
Handles search functionality to filter products.
AddProductPage.js
Purpose: Allows users to add new products.
Functionality:
Provides a form to input product details such as category, name, description, and price.
Validates form inputs to prevent incomplete submissions.
Redirects to the product list page after successful submission.
Components
EditProductModal.js
Purpose: Provides a modal interface for editing product details.
Functionality:
Prefills the form with the selected product's current details.
Validates form inputs before saving changes.
Updates the product in the global state upon submission.
DeleteConfirmationModal.js
Purpose: Confirms deletion of a product.
Functionality:
Displays the product name to confirm the deletion.
Removes the product from the global state upon confirmation.
Styles
Each component has its corresponding CSS file located in the styles folder.
Styles are applied to ensure the application is visually appealing and responsive.
Additional Features
Responsive Design:

Code Quality:

Follows best practices for React development.
Maintains well-structured components and organized code.
Uses meaningful variable and function names.
Bonus Features (Optional)
Pagination:

Implemented pagination for the product table to handle large data sets.
Sorting:
Adds sorting functionality to allow users to sort products by columns.
Robust Form Validation

Used customizes Ant Design components to align with a specific theme or branding.

Testing:
    Tested the application thoroughly on different devices and screen sizes.

