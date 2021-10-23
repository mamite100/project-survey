import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
		<form>
			<label htmlFor="nameInput">Type your name</label>
			<input
				id="nameInput"
				type="text"
				value={nameInput}
				onChange={onNameInputChange}
			/>
			<button onClick={onStepChange}>Next questions</button>
		</form>
	);
};

export default FirstQuestion;


//import React , {useState} from 'react'

//const Name = (props) => {

 //const { name, setName } = props

 //const onNameChange = (event) =>{
	// setName (event.taget.value)
 //}

	//return (
	//	<form>
	//		<label htmlFor='name'>Please type your name, first and surname:</label>
	//		<input
	//			type='text'
	//			id='name'
	//			onChange={onNameChange}
	//			value={name}
	//		/>
	//	</form>
//	)
//}
