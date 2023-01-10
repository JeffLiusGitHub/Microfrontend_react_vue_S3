import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Progress from './components/Progress';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import { createBrowserHistory } from 'history';
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));
const generateClassName = createGenerateClassName({
	productionPrefix: 'contain',
}); //prefix generate different css name in case css influence other page
const history = createBrowserHistory();
const App = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(() => {
		if (isSignedIn) {
			history.push('/dashboard');
		} else {
			history.push('/');
		}
	}, [isSignedIn]);

	return (
		<Router history={history}>
			<StylesProvider generateClassName={generateClassName}>
				<Header
					onSignOut={() => setIsSignedIn(false)}
					isSignedIn={isSignedIn}
				/>

				<Suspense fallback={<Progress />}>
					<Switch>
						<Route path="/auth">
							<AuthLazy onSignIn={() => setIsSignedIn(true)} />
						</Route>
						<Route path="/dashboard">
							{!isSignedIn && <Redirect to="/" />}
							<DashboardLazy />
						</Route>
						<Route path="/" component={MarketingLazy} />
					</Switch>
				</Suspense>
			</StylesProvider>
		</Router>
	);
};
export default App;
