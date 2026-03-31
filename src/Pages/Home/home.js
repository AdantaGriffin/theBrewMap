import styles from './home.module.scss';
import React, {useState, useEffect} from 'react';

function Home(){
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData(){
            const response = await fetch('/data.json');
            const result = await response.json();
            //console.log(result.data)
            setData(result.data)
        }
        getData()
    }, [])
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
                            {data?.map(x => (
                                <li key={x.id} className={styles.item}>
                                    <img src={x.image} height="100%" width="100%"/>
                                    <div className={styles.itemInfo}>
                                        <h4>{x.name}</h4>
                                        <p>{x.address}</p>
                                        <p>{x.neighborhood}, {x.city}</p>
                                        <p>{x.rating}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {/*<ul className={styles.list}>
                            <li className={styles.item}>
                                <img alt="image"/>
                                <div className={styles.itemInfo}>
                                    <p>name</p>
                                    <p>rating</p>
                                    <p>address</p>
                                    <p>notes</p>
                                </div>
                            </li>
                        </ul>*/}
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
                            {data?.map(x => (
                                <li key={x.id} className={styles.item}>
                                    {<img src={x.blogImg} width="100%" height="100%"/>}
                                    <div className={styles.itemInfo}>
                                        <h4>{x.name}</h4>
                                        <p>{x.address}</p>
                                        <p>{x.neighborhood}, {x.city}</p>
                                        <p>{x.rating}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {/*<ul className={styles.list}>
                            <li className={styles.item}>
                                <img alt="image"/>
                                <div className={styles.itemInfo}>
                                    <p>name</p>
                                    <p>rating</p>
                                    <p>address</p>
                                    <p>notes</p>
                                </div>
                            </li>
                        </ul>*/}
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