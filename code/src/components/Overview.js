import React from 'react';

const Overview = ({ nameInput, surnameInput, happiness }) => {
    return (
        <section>
            <h2>My values from form :</h2>
            <p>Name : {nameInput}</p>
            <p>Surname : {surnameInput}</p>
            <p>Soo when it comes to Logan Roy, your answer is ALWAYS {happiness === 'happy' ? 'YES!' : 'YES!'}. Interesting </p>
            <p >
            Your fav quote is {''}
            </p>
            <button className="button" tabindex="0" type="button" onClick= {() =>window.location.reload()}>Again</button>
        </section>
    );
};
export default Overview;

