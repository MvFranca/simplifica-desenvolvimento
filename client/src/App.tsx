import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes/Routes.tsx';
import './styles/App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Rotas />
      <ToastContainer position="bottom-right" />
    </BrowserRouter>
  );
}

export default App;
