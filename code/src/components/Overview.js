import React from 'react';

const Overview = ({ nameInput, surnameInput, happiness, flavour }) => {
    return (
        <section className="overview">
            <h2>My values from form :</h2>
            <p className="summary-p"> Name : {nameInput}</p>
            <p className="summary-p">Surname : {surnameInput}</p>
            <p className="summary-p">Soo when it comes to Logan Roy, your answer is ALWAYS {happiness === 'happy' ? 'YES!' : 'YES!'}....Interesting </p>
            <p className="summary-p" >
            Your fav quote is {'greg'}
            </p>
            <button className="button" tabindex="0" type="button" onClick= {() =>window.location.reload()}>Again</button>
        </section>
    );
};
export default Overview;

