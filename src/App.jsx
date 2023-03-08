import { useState } from 'react';
import reactLogo from './assets/react.svg';
import styles from './styles/App.module.css';
import DropZone from './components/DropZone';

function App() {
    const [message, setMessage] = useState(null);
    const currentYear = new Date().getFullYear();

    return (
        <>
            <header>
                <h1>Avatar Generator</h1>
            </header>
            <main>
                <div
                    className={`${styles.heroDropZone} ${
                        message
                            ? styles.heroDropZoneMinimised
                            : styles.heroDropZoneNormal
                    }`}>
                    <div className={styles.heroDescription}>
                        <h2>
                            Create your avatar for free and use it in your
                            social media platforms
                        </h2>
                        <h3>Start creating you avatar by uploading an image</h3>
                    </div>
                    <div>
                        <DropZone setMessage={setMessage} />
                    </div>
                </div>
                <p>{message}</p>
            </main>
            <footer>
                <p>Copyright &copy; {currentYear} </p>
            </footer>
        </>
    );
}

export default App;
