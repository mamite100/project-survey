import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
	

	return (
		<form className ="inner-container">
			<h1 className="header">Succession </h1>
			<h2>This servey is only for Yes sayers.</h2>
			<label 
			class="label-text" htmlFor= "nameInput">Please type your first name</label>
			<input
				className="input-text"
				id="nameInput"
				type="text"
				value={nameInput}
				onChange={onNameInputChange}
			/>
			<button className="button" type="submit" onClick={onStepChange}>Next question</button>
		</form>
	);
};

export default FirstQuestion;
