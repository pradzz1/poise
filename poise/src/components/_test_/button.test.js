import React from "react";
import ReactDom from "react-dom";
import ButtonT from "../button/button";

it("renders without crashing" , ()=>{
    const div = document.createElement("div");
    ReactDom.render(<ButtonT></ButtonT>,div)
})