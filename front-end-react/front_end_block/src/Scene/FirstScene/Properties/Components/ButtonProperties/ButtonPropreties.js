import React from "react";
import PropTypes from "prop-types";
import "./ButtonProperties.css";

export const ButtonProperties = (props) => {

    return <button className="properties-class" onClick={props.onClick} >{props.textButton}</button>;
}

ButtonProperties.PropTypes= {
    onClick : PropTypes.func,
    textButton : PropTypes.string
}