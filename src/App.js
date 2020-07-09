import React from 'react';
import { Router,BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import Routes from './routes'
import GlobalStyles from './styles/global'
import Header from './components/Header/header'
import history from './services/history'

import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000}>
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        </ToastContainer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
