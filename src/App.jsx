import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
// import { useState } from "react";

export default function App(){
       return(
         <>
         <div className="flex flex-col justify-center items-center">
          <Header/>
          <Hero/>
          <Footer/>
          </div>
         </>
       );
}