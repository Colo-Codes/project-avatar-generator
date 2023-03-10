import { useState } from 'react';
import avatarLogo from './assets/avatar-logo.png';
import styles from './styles/App.module.css';
import DropZone from './components/DropZone';

function App() {
    const [message, setMessage] = useState(null);
    const currentYear = new Date().getFullYear();

    return (
        <>
            <header className={styles.header}>
                <img
                    src={avatarLogo}
                    className={styles.logo}
                    alt='Avatar logo: a gray cat over a yellow round background.'
                />
                <h1>
                    <span className={styles.titlePrimary}>Avatar</span>
                    <span className={styles.titleSecondary}>Generator</span>
                </h1>
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
                <div className={styles.filesList}>{message}</div>
            </main>
            <footer>
                <p>
                    Made with ❤️ by{' '}
                    <a href='https://www.damiandemasi.com' target='_blank'>
                        Damian Demasi (Colo.Codes)
                    </a>{' '}
                    &copy;
                    {currentYear}
                </p>
                <p>
                    <a
                        href='https://www.flaticon.com/free-icons/user'
                        title='Beautiful cat icon logo'
                        target='_blank'>
                        Avatar icon logo created by Freepik - Flaticon
                    </a>
                </p>
            </footer>
        </>
    );
}

export default App;
