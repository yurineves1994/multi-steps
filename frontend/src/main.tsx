import ReactDOM from 'react-dom/client';
import { RegisterProvider } from './context/RegisterContext';
import { GlobalStyle } from './styles/global';
import { RoutesList } from './routes/RoutesList';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RegisterProvider>
    <GlobalStyle />
    <RoutesList />
  </RegisterProvider>,
);
