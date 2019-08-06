import React from "react";
import "./TextTooltip.css";
import PropTypes from "prop-types";
import ReactTooltip from 'react-tooltip';



export const TextTooltip = (props) => {
   return <div>
       <text className="text-class" onClick={props.onClick}  data-tip={props.customTextTooltip} >{props.customText}</text>
       <ReactTooltip />

   </div>
}

TextTooltip.PropTypes = {
    customText : PropTypes.string,
    onMouseOver :  PropTypes.func,
    onClick : PropTypes.func,
    customTextTooltip : PropTypes.string
};