import React from 'react';
import PropTypes from 'prop-types';

// a constant
const ZERO = 0;

// some arrow functions
const isPositive = (n) => n > ZERO;
const double = (n) => n * 2;
const add = (a, b) => a + b;

// a regular function
function transformArray(array) {
	return array
		.filter(isPositive)
		.map(double)
		.reduce(add);
}

// a simple object
const user = {
	firstName: 'George',
	lastName: 'Abitbol',
	email: 'george.abitbol@ameri.ca',
	number: 12,
	boolean: false
};

// a React component
const Article = ({title, body}) => (
	<article className="Article">
		<header className="Article-header">
			<h1 className="Article-title">
				{title}
			</h1>
		</header>

		<div className="Article-body">
			{body}
		</div>
	</article>
);

Article.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired
};








