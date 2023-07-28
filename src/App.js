import {React} from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Product } from "./pages/product/Product";
import { Contact } from "./pages/contact/Contact";
import { Navigation } from "./layouts/Navigation";



export const App = () => {
    

// ******************************taps********************************
let li_section5 = document.querySelectorAll(".li-section5");
let content_tabs = document.querySelectorAll(".content");

console.log(content_tabs);


for (let i = 0; i < li_section5.length; i++) {
    let element = li_section5[i];
    element.addEventListener("click",(event)=>{
        for (let i = 0; i < li_section5.length; i++) {
            let element = li_section5[i];
            element.classList.remove("ac")
        }
        event.target.classList.add("ac");
        if (event.target.classList.contains("one")) {
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.remove("d-none")
            }
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.add("d-none")
            }
            content_tabs[0].classList.remove("d-none")
        }else if (event.target.classList.contains("two")) {
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.remove("d-none")
            }
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.add("d-none")
            }
            content_tabs[1].classList.remove("d-none")
        }else if (event.target.classList.contains("three")) {
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.remove("d-none")
            }
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.add("d-none")
            }
            content_tabs[2].classList.remove("d-none")
        }else if (event.target.classList.contains("four")) {
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.remove("d-none")
            }
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.add("d-none")
            }
            content_tabs[3].classList.remove("d-none")
        }
    })
}
// **********************************************************
  
 


  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  );
};