import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { GlobalStyle } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'rdx/store';

/** Theme : color guide
  ---> main color : background;
  ---> second color { title, border, btnBackground, searchLabelUnderline, errorMsg, contactName, deleteContactBtnHoverAndFocus }
  ---> third color { label, searchBorder, errorMsgUnderline, contactNumber, deleteContactBtn }
  ---> hover & focus color : hoverAndFocus;
**/

const theme = {
  main: '#422040',
  second: '#bcd8c1',
  third: '#e57a44',
  hovAndFoc: '#e57a44',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ThemeProvider>
      <GlobalStyle />
    </Provider>
  </React.StrictMode>
);
