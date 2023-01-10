import React from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import Signup from './components/Signup';
import Signin from './components/Signin';
const generateClassName = createGenerateClassName({
	productionPrefix: 'auth',
});
const App = ({ history, onSignIn }) => {
	return (
		<>
			<StylesProvider generateClassName={generateClassName}>
				<Router history={history}>
					<Switch>
						<Route path="/auth/signin">
							<Signin onSignIn={onSignIn} />
						</Route>
						<Route path="/auth/signup">
							<Signup onSignIn={onSignIn} />
						</Route>
					</Switch>
				</Router>
			</StylesProvider>
		</>
	);
};
export default App;
