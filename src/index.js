import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigator from './components/Navigator';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Header />
        <Navigator />
        <App/>
        <Footer />
    </Router>
);

// If you want to start measuring performance in your app, pass a function
reportWebVitals();