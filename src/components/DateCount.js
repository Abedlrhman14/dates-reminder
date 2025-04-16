import React from 'react'
import { Row , Col } from 'react-bootstrap' 
const DateCount = ({person}) => {
  return (
    <Row className="justify-content-center">
        <Col sm="8" className="">
            you have {person.length} apoitmant
        </Col>
    </Row>
  )
}

export default DateCount
