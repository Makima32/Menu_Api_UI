import React, { useState, useEffect } from "react";
import "../MenuType/MenuType.css";


function MenuTypeText({ TipoMenu }) {


  return (

    <div className="MenuType">
    <h2>{TipoMenu}</h2>
  </div>
  );
}

export default MenuTypeText;
