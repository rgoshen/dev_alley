import React, { Fragment } from "react";
import spinner from "../../img/spinner.gif";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      className='center'
      style={{ width: "200px", display: "block" }}
      alt='Loading...'
    />
  </Fragment>
);

export default Spinner;
