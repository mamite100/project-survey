import React , {useState} from 'react'

const Name = (props) => {

 const { name, setName } = props

 const onNameChange = (event) =>{
	 setName (event.taget.value)
 }

	return (
		<form>
			<label htmlFor='name'>Please type your name, first and surname:</label>
			<input
				type='text'
				id='name'
				onChange={onNameChange}
				value={name}
			/>
		</form>
	)
}

export default Name