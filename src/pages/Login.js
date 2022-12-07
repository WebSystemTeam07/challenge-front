import Header from '../components/Header.js';
import Navigator from '../components/Navigator.js'
import Footer from '../components/Footer.js'

import styles from '../pages/styles/login.module.scss'

function Login() {
    return (
        <div className={styles.bodyContainer}>
            <div className={styles.loginContainer}>
                <form>
                    <p>
                        <label>Email</label>
                        <input type="email" id="email" pattern=".+@gmail.com" placeholder="example@gmail.com" required></input>
                    </p>
                    <p>
                        <label>Password</label>
                        <input type="password" id="password" required></input>
                    </p>
                    
                </form>
            </div>
        </div>
    );
}

export default Login;