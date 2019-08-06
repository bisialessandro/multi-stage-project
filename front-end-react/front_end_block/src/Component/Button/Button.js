import React from "react";
import "./Button.css";
import PropTypes from "prop-types"

export const Button = (props) => {
    return <button className="button-class" onClick={props.onClick} >{props.customText}</button>
}

Button.PropTypes = {
    customText : PropTypes.string,
    onClick :  PropTypes.func
};