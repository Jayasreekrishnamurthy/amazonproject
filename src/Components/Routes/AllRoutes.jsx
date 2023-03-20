import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../HomepageBeforeLogin";
import { HomepageAfter } from "../HomepageAfterLogin"
import { Movies } from "../movies"
import { Popular } from "../popular"
import { Shots } from "../shots"
import { CreateAccount } from "../CreateAccount";
import { Login } from "../Login";
import {Profilepage} from "../profilepage";
import Banner from "./../../Banner";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route Path />
      <Route path="/Banner" element={<Banner />} />
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/signin" element={<CreateAccount />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/homepage" element={<HomepageAfter />} />
      <Route exact path="/movies" element={<Movies/>} />
      <Route exact path="/shots" element={<Shots/>} />
      <Route exact path="/popular" element={<Popular/>} />
      <Route exact path="/profilepage" element={<Profilepage/>} />
    </Routes>
  );
};
