import styles from "./Header.module.scss";
import {navItems} from "../../constants/navItems";
import ArrowDown from "../../assets/icons/arrow.svg";

function Navigation() {
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    {navItems.map((nav) => {
                        return (
                            <li
                                key={nav.title}
                                className={`${styles.menuItem} ${styles.hasSubmenu}`}
                            >
                                <span>{nav.title}</span>
                                <img src={ArrowDown} className={styles.arrowDown} alt="icon"/>
                                <ul className={styles.submenu}>
                                    {nav.submenu.map((submenu) => {
                                        return (
                                            <li
                                                key={submenu.title}
                                                className={`${styles.submenuItem} ${styles.hasSubmenu}`}
                                            >
                                                <span className={styles.submenuItem_text}>{submenu.title}</span>
                                                <img src={ArrowDown}
                                                     className={styles.arrowRight}
                                                     alt="icon"/>
                                                <ul className={styles.submenuRight}>
                                                    <li className={styles.submenuRightItem}>test 1</li>
                                                    <li className={styles.submenuRightItem}>test 2</li>
                                                    <li className={styles.submenuRightItem}>test 3</li>
                                                    <li className={styles.submenuRightItem}>test 4</li>
                                                    <li className={styles.submenuRightItem}>test 5</li>
                                                </ul>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })}

                </ul>
            </nav>
        </>
    )
}

export default Navigation