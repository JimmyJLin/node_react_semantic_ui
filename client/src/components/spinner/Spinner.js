import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import { CircleLoader } from 'react-spinners';
import { setSpinner } from '../../actions';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Spinner extends Component {
  state ={
    isLoading: true
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isLoading: nextProps.spinner.isLoading
    })
  }

  render() {
    return (
      <div className='sweet-loading'
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateY(-50%)",
          zIndex: "99"
        }}
      >
        <CircleLoader
          css={override}
          sizeUnit={"px"}
          size={50}
          color={'#7417c9'}
          loading={this.state.isLoading}
        />
      </div>
    )
  }
}

function mapStateToProps({ spinner }) {
  return { spinner };
}

export default connect(mapStateToProps, { setSpinner })(Spinner);
