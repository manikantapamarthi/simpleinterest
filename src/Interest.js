import { useEffect, useState } from "react";
import {Form, Row, Col} from "react-bootstrap";
import Details from "./Details";


function Interest () {


  const[data, setData] = useState({
    principal_amount: "",
    interest_rate: "",
    start_date: "",
    end_date: "",
    days: "",
    interest: ""
  });


  function handleInputchange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    const days = getDays()

    if (data["days"]) {
      calulateInterest(data["days"])
    }
  },[data["start_date"], data["end_date"], data["days"]])

  function getDays(){
    const start_date = new Date(data["start_date"])
    const end_date = new Date(data["end_date"])
    const Difference_In_Time = end_date.getTime() - start_date.getTime()
    const days = (Difference_In_Time / (1000 * 3600 * 24))
    
    setData({
      ...data,
      ["days"]: days  
    })
  }


 function calulateInterest(days) {
  let time = days/360
  let interest = ((data["principal_amount"] * data["interest_rate"] * time) / 100)

  setData({
    ...data,
    ['interest']: interest
  })
 }

  return(
    <>
      <Form.Group className="mb-3" as={Col} lg={4}>
        <Form.Label column sm={5} htmlFor="principal_amount"><b>Principal Amount :</b></Form.Label>
        
          <Form.Control
            type="number"
            name="principal_amount"
            id="principal_amount"
            onChange={(e) => handleInputchange(e)}
          />
        
      </Form.Group>
      <Form.Group className="mb-3" as={Col} lg={4}>
        <Form.Label column sm={5} htmlFor="interest_rate"><b>Interest Rate :</b></Form.Label>
        
          <Form.Control
            type="number"
            id="interest_rate"
            name="interest_rate"
            onChange={(e) => handleInputchange(e)}
          />
        
      </Form.Group>
      <Form.Group className="mb-3" as={Col} lg={4}>
        <Form.Label column sm={5} htmlFor="start_date"><b>Start Date :</b></Form.Label>
        
          <Form.Control
            type="date"
            name="start_date"
            id="start_date"
            onChange={(e) => handleInputchange(e)}
          />
        
      </Form.Group>
      <Form.Group className="mb-3" as={Col} lg={4}>
        <Form.Label column sm={5} htmlFor="end_date"><b>End Date :</b></Form.Label>
        
          <Form.Control
            type="date"
            id="end_date"
            name="end_date"
            onChange={(e) => handleInputchange(e)}
          />
        
      </Form.Group>
      <Details data={data}/>
    </>
  )
}

export default Interest;