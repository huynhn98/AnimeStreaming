import React from 'react'
import { Spinner } from 'react-bootstrap'
const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center" >
        <Spinner animation="border" role="status" variant='primary'>
        
        </Spinner>
        <p> Loading...</p>
    </div>
  )
}

export default LoadingSpinner