import React from "react";
import PropTypes from 'prop-types'
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;


export const Spinner = (props) => {

    return  <div className='sweet-loading'>
        <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={props.loading}
        />
    </div>
};


Spinner.propTypes = {
    loading : PropTypes.bool

};