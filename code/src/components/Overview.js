import React from 'react';

const Overview = ({ nameInput, surnameInput }) => {
	return (
		<section>
			<h2>My values from form :</h2>
			<p>Name : {nameInput}</p>
			<p>Surname : {surnameInput}</p>
            <button className="button"
            type="button"
            tabIndex="0"
            aria-pressed="false"
            aria-label="Back to Waystar Royco HQ">

            </button>
		</section>
	);
};

export default Overview;