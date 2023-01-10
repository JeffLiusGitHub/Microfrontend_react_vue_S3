import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Progress from './components/Progress';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
	productionPrefix: 'contain',
}); //prefix generate different css name in case css influence other page

const App = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);
	return (
		<BrowserRouter>
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
						<Route path="/" component={MarketingLazy} />
					</Switch>
				</Suspense>
			</StylesProvider>
		</BrowserRouter>
	);
};
export default App;
