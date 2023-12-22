import { useEffect, useState } from "react";
import {Form, Row, Col} from "react-bootstrap";


function Interest () {


  const[data, setData] = useState({
    principal_amount: "",
    interest_rate: "",
    start_date: "",
    end_date: "",
    days: ""
  });

  const[interest, setInterest] = useState("");

  function handleInputchange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    let days = getDays()

    setData({
      ...data,
      ["days"]: days  
    })

    if (days) {
      calulateInterest(days)
    }
  },[data["start_date"], data["end_date"]])

  function getDays(){
    const start_date = new Date(data["start_date"])
    const end_date = new Date(data["end_date"])
    const Difference_In_Time = end_date.getTime() - start_date.getTime()
    const days = (Difference_In_Time / (1000 * 3600 * 24))
    return days
  
  }

 function calulateInterest(days) {
  let time = days/360
  let interest = ((data["principal_amount"] * data["interest_rate"] * time) / 100)

  setInterest(Math.round(interest))
 }

  return(
    <>
      <Form.Group  as={Row} className="mb-3">
        <Form.Label column sm={2} htmlFor="principal_amount">Principal Amount</Form.Label>
        <Col sm={3}>
          <Form.Control
            type="number"
            name="principal_amount"
            id="principal_amount"
            onChange={(e) => handleInputchange(e)}
          />
        </Col>
      </Form.Group>
      <Form.Group  as={Row} className="mb-3">
        <Form.Label column sm={2} htmlFor="interest_rate">Interest Rate</Form.Label>
        <Col sm={3}>
          <Form.Control
            type="number"
            id="interest_rate"
            name="interest_rate"
            onChange={(e) => handleInputchange(e)}
          />
        </Col>
      </Form.Group>
      <Form.Group  as={Row} className="mb-3">
        <Form.Label column sm={2} htmlFor="start_date">Start Date</Form.Label>
        <Col sm={3}>
          <Form.Control
            type="date"
            name="start_date"
            id="start_date"
            onChange={(e) => handleInputchange(e)}
          />
        </Col>
      </Form.Group>
      <Form.Group  as={Row} className="mb-3">
        <Form.Label column sm={2} htmlFor="end_date">End Date</Form.Label>
        <Col sm={3}>
          <Form.Control
            type="date"
            id="end_date"
            name="end_date"
            onChange={(e) => handleInputchange(e)}
          />
        </Col>
      </Form.Group>
      <p>{interest}</p>
    </>
  )
}

export default Interest;