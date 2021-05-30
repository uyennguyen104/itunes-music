import React from "react";
import IcoMoon from "react-icomoon";
import './icon.scss';
const iconSet = require("./selection.json");

const Icon = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;
