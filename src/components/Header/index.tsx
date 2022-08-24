import React from "react";
import styles from "./styles.module.scss";
import ActiveLink from "../ActiveLink";


export default function Header() {


    return (

        <header className={styles.container}>
            <div className={styles.content}>
                <img src="/logo.svg" alt="DevNews!"/>
                <nav>
                    <ActiveLink
                        href="/"
                        activeClassName={styles.active} 
                    
                    >
                        <a>Home</a>
                    </ActiveLink>
                    
                    <ActiveLink
                        href="/posts"
                        activeClassName={styles.active}
                    
                    >

                        <a>Posts</a>

                    </ActiveLink>

                </nav>

            </div>
        </header>
    )
}