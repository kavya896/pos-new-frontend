import React, { useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router';

const Spiner = () => {

  return (
    <>
 
      <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: "50vh",backgroundColor:" rgba(234, 230, 230, 0.915)",zIndex:"1" }}>
        <Spinner animation="border" variant="danger"  />&nbsp; Loading...
      </div>
      

    </>
  )
}

export default Spiner