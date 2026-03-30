import styles from './home.module.scss';
import React from 'react';

function Home(){
    return(
        <>
            <section className={styles.home}>
                <section className={styles.hero}>
                    <div className={styles.intro}>
                        <div className={styles.introText}>
                            <h3>Discover | Explore | Savor</h3>
                            <h2>Find Your Perfect Space</h2>
                            <p>Curated reviews and guides to the most remarkable coffee shops. From hidden gems to beloved favorites.</p>
                            <div className={styles.buttons}>
                                <button className={styles.explore}>Explore Shops</button>
                                <button className={styles}>Read the Blog</button>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className={styles.heroInfo}>
                        <div className={styles.info}>
                            <h4>Curated Selection</h4>
                            <p>Hand picked coffe shops reviewed by myself.</p>
                        </div>
                        <div className={styles.info}>
                            <h4>Local Guides</h4>
                            <p>Neighborhood by neighbohood guides to finding the best brews.</p>
                        </div>
                        <div className={styles.info}>
                            <h4>Coffee Culture</h4>
                            <p>Stories, tips and recipes from the world of specialty coffee.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.discover}>
                    <div className={styles.heading}>

                        <div>
                            <h3>Discover</h3>
                            <h2>Featured Shops</h2>
                        </div>

                        <div>
                            <a>view more →</a>
                        </div>
                    </div>
                    <div className={styles.discoverListContainer}>
                        <ul className={styles.list}>
                            <li className={styles.item} style={{backgroundColor:"beige"}}>
                                <img alt="image" src=""/>
                                <div className={styles.itemInfo}>
                                    <p>name</p>
                                    <p>rating</p>
                                    <p>address</p>
                                    <p>notes</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className={styles.blog}>
                    <div className={styles.heading}>
                        <div>
                            <h3>Blog</h3>
                            <h2>Lastest Entries</h2>
                        </div>

                        <div>
                            <a>view more →</a>
                        </div>
                        </div>
                    <div className={styles.blogListContainer}>
                        <ul className={styles.list}>
                            <li className={styles.item} style={{backgroundColor:"whitesmoke"}}>
                                <img alt="image" src=""/>
                                <div className={styles.itemInfo}>
                                    <p>name</p>
                                    <p>rating</p>
                                    <p>address</p>
                                    <p>notes</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className={styles.ready}>
                    <div className={styles.readyContainer}>
                        <h2>Ready to Explore</h2>
                        <p>Dive into our curated collection of the finest coffee shops and start your next coffee adventure.</p>
                        <button>Browse Coffee Shops →</button>
                    </div>
                </section>
            </section>
        </>
    )
};

export default Home;