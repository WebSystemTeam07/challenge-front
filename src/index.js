import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigator from './components/Navigator';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <CookiesProvider>
        <Router>
            <Header />
            <Navigator />
            <App/>
            <Footer />
        </Router>
    </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
reportWebVitals();