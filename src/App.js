import { Container, Row ,Col } from "react-bootstrap";
import { person } from './data' 
import DateCount from "./components/DateCount";
import DateList from "./components/DateList";
import DatesAction from "./components/DatesAction";
import React, { useEffect, useState } from "react";
function App() {
  const [personData,setPersonData] = useState(person)
  const onDelete=()=>{
    setPersonData([]);
  }
  const onview=()=>{
    setPersonData(person)
  }

  useEffect(()=>{

        setPersonData([]);
  },[])

  return (
    <div className="color-body">
      <Container className="py-5">
        <DateCount person={person}/> 
        <DateList person={personData }></DateList>
         <DatesAction deleteData={onDelete} onview={onview} />
      
      </Container>
    </div> 
  );
}

export default App;
