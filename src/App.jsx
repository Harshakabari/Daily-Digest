import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { CountryProvider } from "./context/countryContext";
import Health from "./pages/Health";
import Science from "./pages/Science";
import Technology from "./pages/Technology";
import Sports from "./pages/Sports";
import Entertainment from "./pages/Entertainment";
import Business from "./pages/Business";
import Search from "./pages/Search";
import Weather from "./pages/Weather";
import User from "./components/User";
import ChangePassword from "./components/ChangePassword";
import Login from "./components/Login";
import PasswordForm from "./components/PasswordForm";
import Register from "./components/Regester";



const App = () => {

  const [user, setLoginUser] = useState({});
  const [profile, setProfile] = useState(true);

  return (
    <div>
      <BrowserRouter>
        <CountryProvider>
          <Navbar />
        <Routes>
          {user && user._id ? (
            <Route
              exact
              path="/login"
              element={
                <Home></Home>
              }
            ></Route>
          ) : (
            <Route
              exact
              path="/"
              element={<Login setLoginUser={setLoginUser} />}
            ></Route>
          )}
          <Route
            exact
            path="/User"
            element={
              <User
                setLoginUser={setLoginUser}
                setProfile={setProfile}
                profile={profile}
                user={user}
              />
            }
          ></Route>
          <Route
            exact
            path="/changePassword"
            element={
              <ChangePassword
                setLoginUser={setLoginUser}
                setProfile={setProfile}
                profile={profile}
                user={user}
              />
            }
          ></Route>
          <Route
            exact
            path="/passwordForm"
            element={
              <PasswordForm
                setLoginUser={setLoginUser}
                setProfile={setProfile}
                profile={profile}
                user={user}
              />
            }
          ></Route>
            <Route path="/" element={<Home />} />
            <Route path="/health" element={<Health />} />
            <Route path="/science" element={<Science />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/business" element={<Business />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/search" element={<Search />} />
            <Route path="/User" element={<User />} />
            <Route exact path="/register" element={<Register />}></Route>
          <Route
            exact
            path="/"
            element={<Login setLoginUser={setLoginUser} />}
          ></Route>
            
          </Routes>
        </CountryProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
