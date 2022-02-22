import React from 'react';
const ThirdQuestion = ({
    happiness,
    onHappinessChange, 
    onStepChange,
}) => {
    return (
        <form>
        <h2>Do you like Logan Roy, the founder of Waystar Royco?</h2>
              <label>
                    <input 
                            type="radio" 
                            value = "happy"
                            onChange = {() => onHappinessChange('happy')}
                            checked = {happiness === 'happy'}
               />
                 
<<<<<<< HEAD
                 <span>Oh YES!                 </span>
=======
                 <span>Oh YES!</span>
>>>>>>> 0ee640bc425bd1a7e995a977c115209fcb319f7f
        </label>

       <label>
                 <input 
                        className="radio-button"
                        type="radio" 
                        value = "sad"
                        onChange = {() => onHappinessChange('sad')}
                        checked = {happiness === 'sad'}
               />        
<<<<<<< HEAD
                <span> Well I guess Yes ..
                </span>
=======
                <span> Well I guess Yes ..</span>
>>>>>>> 0ee640bc425bd1a7e995a977c115209fcb319f7f
        </label>
        <button className="button" type= "submit" onClick ={onStepChange}>Next question</button>
    </form>
    );
};
export default ThirdQuestion;
