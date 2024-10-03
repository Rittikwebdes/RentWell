import { BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContext from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
<AuthContext>
<BrowserRouter>
<App />

</BrowserRouter>
</AuthContext>

)