import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';
//Mount function
const mount = (el, { onNavigate, defaultHistory ,initialPath}) => {
	const history =
		defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });
	if (onNavigate) {
		history.listen(onNavigate);
	}

	ReactDOM.render(<App history={history} />, el);
	return {
		onParentNavigate({ pathname: nextPathname }) {
			const { pathname } = history.location;
			if (pathname !== nextPathname) {
				history.push(nextPathname);
			}
		},
	};
};
//if development && isolation{run mount}
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#_marketing-dev-root');
	if (devRoot) {
		mount(devRoot, { defaultHistory: createBrowserHistory() });
	}
}
//if in container {export mount fn}
export { mount };
