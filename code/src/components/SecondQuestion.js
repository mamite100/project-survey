import React from 'react';
const SecondQuestion = ({
    surnameInput,
    onSurnameInputChange,
    onStepChange,
}) => {
    return (
        <form>
            <label htmlFor="surnameInput">Type your surname</label>
            <input
                id="surnameInput"
                type="text"
                value={surnameInput}
                onChange={onSurnameInputChange}
            />
            <button onClick={onStepChange}>See overview</button>
        </form>
    );
};
export default SecondQuestion;


//import React, {useStae} from 'react'

//const RadioOptions = (props) => {
  //  const {doYouLikeLoganRoy, setDoYouLikeLoganRoy } = props
    //const onDoYouLikeLoganRoy = (event) => {
      //  setDoYouLikeLoganRoy (event.target.value)
    //} 
//return(
//<>
//<p>Do you like Logan Roy, the founder of Waystar Royco</p>
//<div>
  //  <label className='radioLabel' htmlFor='Yes'>Yes</label>
    //<input type='radio' id='Yes' value='Yes' name='doYouLikeLoganRoy' onChange={onDoYouLikeLoganRoy}></input>
//</div>
//</>
//)

//}
//export default RadioOptions