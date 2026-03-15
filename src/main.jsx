import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import './index.css'
import App from './App.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const persistor = persistStore(store)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>

          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
