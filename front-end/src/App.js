import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { AuthContext } from "./context/AuthContext";
import axios from "axios";
import AlertSuccess from "./components/aleartSuccess/AlertSuccess";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Reset from "./pages/resetPassword/Reset";
import ResetSuccess from "./components/alertResetSuccess/ResetSuccess";

import "./App.css";
import "./assets/css/NavBar.css";
import "./assets/css/Carousel.css";
import "./assets/css/Bonus.css";
import "./assets/css/Title.css";
import "./assets/css/Cart.css";
import "./assets/css/SeeMore.css";
import "./assets/css/Banner.css";
import "./assets/css/Information.css";
import "./assets/css/Responsive.css";
import "./assets/css/PageProductSingle/Product.css";
import SingleProductPage from "./components/SingleProduct/SingleProductPage";
import HomeHome from "./pages/home/Home";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={user ? <HomeHome /> : <Login />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route exact path="/chocanh/:id" element={<SingleProductPage />} />
      <Route path="/reset-password" element={<ForgotPassword />} />
      <Route path="/reset/:id" element={<Reset />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path="/api/auth/active-account" element={<AlertSuccess />} />
      <Route path="/api/auth/reset-password" element={<ResetSuccess />} />
    </Routes>
  );
}

// function App() {
//   // const { user } = useContext(AuthContext);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const getUser = () => {
//       fetch("http://localhost:8800/api/auth/login/success", {
//         method: "GET",
//         credentials: "include",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Credentials": true,
//         },
//       })
//         .then((response) => {
//           if (response.status === 200) return response.json();
//           throw new Error("authentication has been failed!");
//         })
//         .then((resObject) => {
//           setUser(resObject.user);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     getUser();
//   }, []);

//   console.log(user);
//   if (user !== null) {
//     axios.post("http://localhost:8800/api/auth/register", user);
//     console.log(user);
//   }

//   return (
//     <Routes>
//       <Route path="/" element={user ? <Home user={user} /> : <Login />} />
//       <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
//       <Route
//         path="/register"
//         element={user ? <Navigate to="/" /> : <Register />}
//       />
//     </Routes>
//   );
// }

export default App;
