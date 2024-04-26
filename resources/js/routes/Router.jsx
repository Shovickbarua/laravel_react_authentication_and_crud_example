import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "../Root";
import InventoryForm from "../pages/inventories/InventoryForm";
import Inventory from "../pages/inventories/Inventory";
import ItemForm from "../pages/items/ItemForm";
import Items from "../pages/items/Items";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import GuestRoot from "../GuestRoot";
import UserProvider from "../context/UserContext";

const router = createBrowserRouter([
    {
      path: "/",
      element: <GuestRoot />,
      children: [
        { path: "/", element: <Login />, },
        { path: "/register", element: <Register />, },
      ],
    },
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/inventory", element: <Inventory />, },
        { path: "/add-inventory", element: <InventoryForm />, },
        { path: "/edit-inventory/:id", element: <InventoryForm />, },
        { path: "/item", element: <Items />, },
        { path: "/add-item", element: <ItemForm />, },
        { path: "/edit-item/:id", element: <ItemForm />, },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("app")).render(
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );