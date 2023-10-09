import ReactDOM from 'react-dom/client';
import { RegisterProvider } from './context/RegisterContext';
import { RoutesList } from './routes/RoutesList';
import { GlobalStyle } from './styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RegisterProvider>
    <GlobalStyle />
    <RoutesList />
  </RegisterProvider>,
);
