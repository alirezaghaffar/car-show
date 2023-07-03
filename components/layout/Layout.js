import React from 'react';

import styles from "./Layout.module.css"
import Link from 'next/link';

const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                <h2>Otomal</h2>
                <p>Choose and buy your car</p>
                </Link>
            </header>
                <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                <a href='https://github.com/ali-reza-gh' target="_blank">AlirezaGhaffar</a>
                 Next.js project | Otomal Project &copy; 
                </footer>
        </>
    );
};

export default Layout;