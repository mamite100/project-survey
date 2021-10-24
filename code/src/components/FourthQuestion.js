import React from 'react';
const FourthQuestion = ({
    flavour,
    onFlavourChange, 
    onStepChange,
}) => {
    return (
        <form>
            <label htmlFor="flavour ">
                Pick your fav qoute
                <select value={flavour} onChange ={event => onFlavourChange(event.target.value)}>
                    <option value="greg">Wherever you hide, the party finds you.( Greg Hirsch)</option>
                    <option value="shiv">If he can’t ride two horses at once, he shouldn’t be working at the circus. (Siobhan 'Shiv' Roy)</option>
                    <option value="kendall">The dinosaur is having one last roar at the meteor before it wipes him out. (Kendall Roy)</option>
                    <option value="roman">He said that to be nice. What I think he meant to say was that he wished that Mom gave birth to a can opener because at least then it would be useful.( Roman Roy)</option>
                    <option value="logan">Not to be crude about it, but politics is what comes out the a**hole. (Logan Roy)</option>
                
                </select>
            </label>
        <button className="button" type="submit" onClick ={onStepChange}>Lets sum up! </button>
    </form>
    );
};
export default FourthQuestion;