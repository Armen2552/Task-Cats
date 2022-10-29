import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import { store } from "./redux/store";

import App from './App/App';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

