import React from "react";
const Welcome = ({handelSubmit}) => {
    return(
        <div className="welcome-container">
        <h1 className=" main-heading">Succession</h1>
        <p className="survey-intro">this survey is only for yea- sayers</p>
<button onSubmit= {handelSubmit}
className="button"
tabIndex="0"
aria-pressed="false"
aria-label="start survey"
type="submit
Lets Start!">

</button>
        </div>
    );
};
export default Welcome; 