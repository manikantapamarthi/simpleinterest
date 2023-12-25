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
    interest: "",
    interestType: "percent_per_annum",
    months: "",
    remainingDays: ""
  });


  function handleInputchange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    const days = getDays()
    setData({
      ...data,
      ["days"]: days  
    })
    
  },[data["start_date"], data["end_date"]])

  useEffect(() => {
    if (data["days"]) {
      calulateInterest(data["days"])
    }
  },[data["days"]])
  
  useEffect(() => {
    calulateInterest(data["days"])

  }, [data["interestType"], data["interest_rate"]])


  function getDays(){
    const start_date = new Date(data["start_date"])
    const end_date = new Date(data["end_date"])
    const Difference_In_Time = end_date.getTime() - start_date.getTime()
    const days = (Difference_In_Time / (1000 * 3600 * 24))
    
    return days
  }


 function calulateInterest(days) {
  var months = Math.floor(days / 30)
  var remainingDays = days % 30
  if(data["interestType"] === "percent_per_annum"){
    let time = days/360
    var interest = ((data["principal_amount"] * data["interest_rate"] * time) / 100)
  } else {
    const amount = data["principal_amount"] / 100
    const monthlyInterest = amount * data["interest_rate"]
    const perDay = monthlyInterest/30
    var interest  = perDay * days
  }

  setData({
    ...data,
    ['interest']: interest,
    ['months']: months,
    ['remainingDays']: remainingDays
  })
 }

 function handleInterestType(e){
  setData({
    ...data,
    ['interestType']: e.target.id
  })
 }

  return(
    <>
      <Form.Group className="mb-3" as={Col} lg={4}>
        <Form.Label column sm={5} htmlFor="principal_amount"><b>Principal Amount(₹) :</b></Form.Label>
        
          <Form.Control
            type="number"
            name="principal_amount"
            id="principal_amount"
            onChange={(e) => handleInputchange(e)}
          />
        
      </Form.Group>
      <Form.Group className="mb-3" as={Col} lg={4}>
        <Form.Label column sm={5} htmlFor="interest_rate"><b>Interest Rate :</b></Form.Label>
          <Row>
            <Col>
              <Form.Check 
                type="radio" 
                label="Rupee per month(₹2)" 
                id="rupee_per_month" 
                name="interest_type"
                checked={data["interestType"] == "rupee_per_month"}
                onChange={(e) => handleInterestType(e)}
              />
            </Col>
            <Col>
              <Form.Check 
                type="radio" 
                label="Percent per annum(1%)" 
                id="percent_per_annum" 
                name="interest_type"
                checked={data["interestType"] == "percent_per_annum"}
                onChange={(e) => handleInterestType(e)}
              />
            </Col>
          </Row>

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
      <hr></hr>
      <Details data={data}/>
    </>
  )
}

export default Interest;