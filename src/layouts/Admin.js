import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// views

import User from "views/admin/User.jsx";
import Class from "views/admin/Class.jsx";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import Subject from "views/admin/Subject.jsx";
import Product from "views/admin/Product";
import ProductSeries from "views/admin/ProductSeries.jsx";
import ProductMaterial from "views/admin/ProductMaterial.jsx";
import ProductMaterialType from "views/admin/ProductMaterialType.jsx";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        
        <div className="px-4 md:px-10 mx-auto w-full md:pt-32 pt-6">
          <Switch>
            <Route path="/admin/user" exact component={User} />
            <Route path="/admin/class" exact component={Class} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Route path="/admin/subject" exact component={Subject} />
            {/* product dropdown part */}
            <Route path="/admin/product" exact component={Product} />
            <Route path="/admin/productseries" exact component={ProductSeries} />
            <Route path="/admin/productmaterial" exact component={ProductMaterial} />
            <Route path="/admin/productmaterialtype" exact component={ProductMaterialType} />
            <Redirect from="/admin" to="/admin/User" />
          </Switch>

        </div>
      </div>
    </>
  );
}
