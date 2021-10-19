import React from 'react';

import Form from './components/Form';
import Welcome from 'components/Welcome';


export const App = () => {
	return(
    <>
    <Form/>
    <Welcome/>
    </>
  )
};







//import React, from 'react';

//export const App = () => {
  //const [nameInput, setNameInput ] = useState('');
  //const [surnameInput, setSurnameInput] = useState(''); 
  //const [step, setStep]= useState(1);


  //const onNameInputChange =(event) =>{
    //setNameInput (event.target.value)
  //} ;
//const onSurnameInputChange =(event) =>{
   // setSurnameInput (event.target.value)
  //} ;

//if(step === 1) {
  //return(
    //<div>
    //<form>
   //<label htmlFor="nameInput" >Please type your firstname:</label>
     //<input 
     //id="nameInput"
    //type="text"
    //value={nameInput} 
    //onChange= {onNameInputChange} />
    //</form>
  //<button onClick={()=> setStep(step +1)}> Next question</button>
    //</div>

  //);
//} else if(step===2) {
  //return (
    //<div>
  //<form>
   //   <label htmlFor="surnameInput" >Please type your  surname:</label>
   // <input 
     //   id="surnameInput"
       // type="text"
        //value={surnameInput} 
        //onChange= {onSurnameInputChange} />
  //</form>
    //<button onClick={() => setStep (step+1)}>Your overview </button>
    //</div>
  //);
//} else if (step ===3) { 
  //return (
    //<section>
   // <h2>My vaues from form:</h2>
   // <p>Name: {nameInput}</p>
   //<p>Surname: {surnameInput}</p>
//</section>  
 // );
//}
