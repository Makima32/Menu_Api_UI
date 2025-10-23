import React, { useState, useEffect } from "react";
import "../TitleWeb/Title.css";


function Title({ Titulo }) {


  return (

    <div className="div_Title">
    <h2>{Titulo}</h2>
  </div>
  );
}

export default Title;
