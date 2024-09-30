import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import "./App.css";
import { NavBar } from "./components/nav.jsx";
import { Footer } from "./components/footer.jsx";
import { Gallery } from "./Gallery.jsx";

import { ScrollButton } from "./components/scrollbutton.jsx";


export const App = () => {
  const preference = window.matchMedia("(prefers-colorscheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <NavBar
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />

      <Gallery/>

      <ScrollButton/>


      <Footer/>
    </div>
  );
};
