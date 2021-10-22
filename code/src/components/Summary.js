import React from "react"

const Summary =(props) => {
return (
    <div className ="container">
    <h2>Thank you!</h2>
    <h3>Hey {props.name}</h3>
    <p>How wonderful to know that you like {props.quote}!</p>
    <p>Your favorite quote from Succession is {props.doYouLikeLoganRoy}</p>
    </div>
)

}
export default Summary