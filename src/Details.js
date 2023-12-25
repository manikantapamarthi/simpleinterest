

function Details({data}) {

  return(
    <>
      <p><b>Principal Amount:</b> {data["principal_amount"]}</p>

      <p><b>Interest Rate:</b> {data["interest_rate"]}</p>
      <p><b>Duration:</b> {data["months"]} months, {data["remainingDays"]} days</p>
      <p><b>Interest Earned:</b> {data["interest"]}</p>
      <p><b>Total:</b> {Number(data["interest"]) + Number(data["principal_amount"])}</p>
    </>
  )
}

export default Details;