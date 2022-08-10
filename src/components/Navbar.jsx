import React from 'react';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-logo'>काम गर</div>
			<ul className='navbar-links'>
				{['tasks', 'notes'].map((item) => (
					<li className='app__flex liText' key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
