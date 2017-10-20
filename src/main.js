import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './effects/store';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { amber, blue } from 'material-ui/colors';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: amber,
  },
  status: {
    danger: 'orange',
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
