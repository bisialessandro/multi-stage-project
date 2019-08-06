import React from "react";
import {Row} from "simple-flexbox";
import PropTypes from "prop-types";

export const RowFluid = (props) => {

    return <Row horizontal='space-between' flexBasis='auto' flexGrow={1} xs={12} sm={3} md={2} lg={1}> {props.contentRow}</Row>
}

RowFluid.PropTypes = {
    contentRow : PropTypes.element
}