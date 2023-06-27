import React from 'react';
import styles from "./home.module.scss"
import Header from "../../Header/header";
import Body from "../../Body/body";


function Home() {
    return (
        <div className={styles.App}>
            <Header />
            <Body />
        </div>
    );

}

export default Home;