import React, { useState } from "react";
import LayoutComponet from "../layout";
import { Route, Routes } from "react-router-dom";
import AboutUsComponent from "../component/about-us/aboutUsComponent";
import BookComponent from "../component/book/BookComponent";
import HomeComponent from "../component/home/HomeComponent";
import ContactComponent from "../component/ContactComponent";
import CartComponent from "../component/CartComponent";
import NotFound from "../component/NotFoundComponent";
import SignIn from "../component/auth/SigninComponent";
import SignUp from "../component/auth/SignupComponent";
import AdminComponent from "../component/admin/adminComponent";
import ListAdminComponent from "../component/admin/dashboard";
import DetailComponent from "../component/admin/detailComponent";
import BooksOfTheWeek from "../component/admin/homepage/booksOfTheWeek";
import BestSellingBooks from "../component/admin/homepage/bestSellingBooks";
import Newarrivals from "../component/admin/homepage/newarrivals";
import FeatureAuthor from "../component/admin/homepage/featureAuthor";
import OurActivities from "../component/admin/homepage/ourActivities";
import ProtectedRoute from "./ProtectedRoute";
import ViewComponent from "../component/ViewComponent";
import CheckOutComponent from "../component/CheckOutComponent";
import CreateNewComponent from "../component/admin/createNewComponent";
import ListProduct from "../component/admin/listProduct";
import ImportBook from "../component/admin/importBook";

const RouterComponentPublic = () => {
  const [listData, setListData] = useState();
  const [newData, setNewData] = useState();
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFound URL="/" />} />
      <Route element={<LayoutComponet />}>
        <Route path="/book" element={<BookComponent />} />
        <Route path="/view" element={<ViewComponent />} />
        <Route path="checkout" element={<CheckOutComponent />} />
        <Route path="/about-us" element={<AboutUsComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/cart" element={<CartComponent />} />
        <Route index path="/" element={<HomeComponent />} />
      </Route>
      <Route element={<LayoutComponet />}>
        <Route element={<ProtectedRoute isLogged={localStorage.getItem("token") ? true : false} />}>
          <Route path="/dashboard" element={<AdminComponent />}>
            <Route index element={<ListAdminComponent listData={listData} setListData={setListData} />} />
            <Route path="detail" element={<DetailComponent />} />
            <Route path="booksOfTheWeek" element={<BooksOfTheWeek />} />
            <Route path="bestSellingBooks" element={<BestSellingBooks />} />
            <Route path="newArrivals" element={<Newarrivals />} />
            <Route path="featureAuthor" element={<FeatureAuthor />} />
            <Route path="ourActivities" element={<OurActivities />} />
            <Route path="list" element={<ListProduct setNewData={setNewData} />} />
            <Route path="createNew" element={<CreateNewComponent setNewData={setNewData} />} />
            <Route path="import" element={<ImportBook setNewData={setNewData} />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
export default RouterComponentPublic;
