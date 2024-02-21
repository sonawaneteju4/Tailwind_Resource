import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";
import Swal from "sweetalert2";

const AppContextProvider = ({ children }) => {
  const [navItem, setNavItems] = useState([]);
  const [contactUs, setContactUs] = useState({
    email: "",
    name: "",
    message: "",
    subject: "",
  });

  const postConactus = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/v1/contacus/addContactus", contactUs, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        showPopAlert({ title: "Message Recived ", icon: "success" });
        setContactUs({ email: "", name: "", message: "", subject: "" });
      })
      .catch((error) => {
        console.log(error);
        showPopAlert({ title: error.message, icon: "error" });
      });
  };

  function showPopAlert({ title, icon }) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: icon,
      title: title,
    });
  }

  return (
    <AppContext.Provider
      value={{ navItem, setContactUs, postConactus, contactUs }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
