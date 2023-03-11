import { useState } from 'react';
import avatarLogo from './assets/avatar-logo.png';
import styles from './styles/App.module.css';
import DropZone from './components/DropZone';
import ImageEditor from './components/ImageEditor';

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
                            Create your avatar <mark>for free</mark> and use it
                            in your <mark>social media</mark> platforms
                        </h2>
                        <h3>
                            Start creating you avatar by{' '}
                            <mark>uploading an image</mark>
                        </h3>
                    </div>
                    <div>
                        <DropZone setMessage={setMessage} />
                    </div>
                </div>
                <div className={styles.filesList}>{message}</div>
                <ImageEditor />
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
