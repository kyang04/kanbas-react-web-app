import Signin from "./users/signin";
import Account from "./users/account";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserTable from "./users/table"
import Signup from "./users/signup"

function Project() {
    return (
    <div className= "container">
        <nav className="nav nav-tabs mt-2">
            <Link className="nav-link" to="/project/home">
                Home</Link>
            <Link className="nav-link" to="/project/signin">
                Sign In</Link>
            <Link className="nav-link" to="/project/signup">
                Sign Up</Link>
            <Link className="nav-link" to="/project/account">
                Account</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Navigate to="/project/home" />} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
    </div>
    );
}
export default Project;