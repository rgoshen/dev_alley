import React from "react";
import spinner from "../../img/spinner.gif";

const Spinner = () => (
  <>
    <img
      src={spinner}
      className='center'
      style={{ width: "200px", display: "block" }}
      alt='Loading...'
    />
  </>
);

export default Spinner;
