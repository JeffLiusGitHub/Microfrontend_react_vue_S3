import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
const App = () => {
	const generateClassName = createGenerateClassName({
		productionPrefix: 'container',
	});
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<Header />
				<MarketingApp />
			</StylesProvider>
		</BrowserRouter>
	);
};
export default App;
