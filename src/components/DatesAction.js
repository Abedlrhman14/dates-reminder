import React from 'react'
import {Row,Col} from 'react-bootstrap'
const DatesAction = ({deleteData,onview}) => {
  return (
    <Row className="justify-content-center my-2">
    <Col sm="8" className="d-flex justify-content-between">
      <button onClick={deleteData}  className="btn-style p-2">Dlelete All</button>
      <button onClick={onview} className="btn-style p-2">Show Data</button>
    </Col>
  </Row>
  ) 
}

export default DatesAction
