import WebHeader from './WebHeader';
import MobileHeader from './MobileHeader';
import styles from './Header.module.scss'
import {HeaderProps} from "../../types/PropsType";

function Header({ searchText, setSearchText }: HeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.webHeaderContainer}>
                <WebHeader
                    searchText={searchText}
                    setSearchText={setSearchText}
                />
            </div>
            <div className={styles.mobileHeaderContainer}>
                <MobileHeader
                    searchText={searchText}
                    setSearchText={setSearchText}
                />
            </div>
        </header>
    );
}

export default Header
