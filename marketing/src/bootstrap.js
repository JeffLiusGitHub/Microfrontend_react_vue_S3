import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Mount function
const mount = (el) => {
	ReactDOM.render(<App />, el);
};
//if development && isolation{run mount}
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#_marketing-dev-root');
	if (devRoot) {
		mount(devRoot);
	}
}
//if in container {export mount fn}
export { mount };
