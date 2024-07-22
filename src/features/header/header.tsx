import React from "react";
import {motion} from "framer-motion";
import styles from "./header.module.scss";
import {links} from "../../lib/data/data";
import clsx from "clsx";
import {Link} from "react-router-dom";

const Header = () => {
    const [activeSection, setActiveSection] = React.useState("Home");
    const [lastScrollY, setLastScrollY] = React.useState(0);
    const [hideHeader, setHideHeader] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setHideHeader(true);
            } else {
                // Scrolling up
                setHideHeader(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);


    return (
        <div className={`${styles.container} ${hideHeader ? styles.hide : styles.show}`}>
              <motion.div
                className={clsx(styles.background, {
                    [styles.sm]: activeSection,
                })}
                initial={{y: -100, x: "-50%", opacity: 0}}
                animate={{y: 0, x: "-50%", opacity: 1}}
            >
                <nav className={clsx(styles.navs, {
                    [styles.sm]: activeSection,
                })}>
                    <ul
                        className={clsx(
                            styles.uls,
                            {
                                [styles.sm]: activeSection,
                            }
                        )}
                    >
                        {links.map((link) => (
                            <motion.li
                                className={clsx(styles.lis)
                                }
                                key={link.name}
                                initial={{y: -80, opacity: 0.4}}
                                animate={{y: 0, opacity: 1}}
                                transition={{delay: 0.1}}
                            >
                                <Link
                                    className={clsx(
                                        styles.uls,
                                        {
                                            [styles.active]: activeSection === link.name,
                                        }
                                    )}
                                    to={link.to}
                                    onClick={() => {
                                        setActiveSection(link.name);
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </motion.div>
        </div>
    );
}

export default Header;
