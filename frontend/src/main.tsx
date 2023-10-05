import ReactDOM from 'react-dom/client';
import { RegisterProvider } from './context/RegisterContext';
import { Home } from './templates/Home';
import { GlobalStyle } from './styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RegisterProvider>
    <GlobalStyle />
    <Home />
  </RegisterProvider>,
);
