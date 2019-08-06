import React from "react";
import PropTypes from 'prop-types'

export const EditText = (props) => {
    return <div>
        <input name={props.name} onChange={props.customOnChange} value={props.inputValue} placeholder={props.customPlaceHolder} className="edit-class"></input>
        <text>{props.info} </text>
    </div>
};

EditText.propTypes = {
    customOnChange : PropTypes.func,
    customPlaceHolder : PropTypes.string,
    info: PropTypes.string,
    inputValue : PropTypes.sting
};