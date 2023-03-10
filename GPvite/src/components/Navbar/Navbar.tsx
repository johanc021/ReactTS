import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {
	return (
		<AppBar position="fixed">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Curso de React con Typescript - React TEST
				</Typography>
			</Toolbar>
		</AppBar>
	) 
	
};

export default Navbar;
