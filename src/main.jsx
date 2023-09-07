import 'modern-normalize/modern-normalize.css';
import { StrictMode } from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Global } from '@emotion/react';
import { GlobalStyles } from './styles/GlobalStyles';
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/project-Dream4IT">
          <Global styles={GlobalStyles} />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <ToastContainer
      autoClose={2000}
      position="top-center"
      progressStyle={{ height: '1px' }}
      hideProgressBar={true}
      theme="dark"
      toastStyle={{
        backgroundColor: `rgb(22, 31, 55)`,
      }}
    />
  </>
  // </StrictMode>
);
