import React from 'react';
import styles from './footer.module.scss';

function Footer(){
    return(
        <> 
            <footer className={styles.footer}>
                <div className={styles.top}>
                    <div className={styles.footerTopData}>
                        <h4>The Brew Map</h4>
                        <p>Discovering the world's best coffee shops, one cup at a time. Your guide to exceptional brews and cozy spaces.</p>
                    </div>
                    <div className={styles.footerTopData}>
                        <h4>Explore</h4>
                        <ul>
                            <li>Coffee Shops</li>
                            <li>Blogs</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div className={styles.footerTopData}>
                        <h4>Categories</h4>
                        <ul>
                            <li>Reviews</li>
                            <li>Guides</li>
                            <li>Culture</li>
                            <li>Recipes</li>
                            <li>Tips</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bot}>© 2026 The Brew Map. All rights reserved.</div>
            </footer>
        </>
    )
};

export default Footer;