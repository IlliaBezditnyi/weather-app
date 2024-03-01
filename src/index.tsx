import ReactDOM from 'react-dom/client';
import { App } from './App';
import ThemeConfig from './theme/ThemeConfig';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeConfig>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeConfig>
  </BrowserRouter>,
  // </React.StrictMode>,
);
