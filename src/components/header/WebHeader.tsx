import {useEffect, useState, useRef} from 'react';
import styles from './Header.module.scss'
import Logo from "../../assets/logotype.svg"
import SearchInput from "../inputs/SearcInput";
import Navigation from "./Navigation";
import {HeaderProps} from "../../types/PropsType";

function WebHeader({ searchText, setSearchText }: HeaderProps) {
    const [hidden, setHidden] = useState(false);
    const prevScroll = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > 200 && currentScroll > prevScroll.current) {
                setHidden(true);
            } else if (currentScroll < prevScroll.current) {
                setHidden(false);
            }

            prevScroll.current = currentScroll;
        };

        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.webHeaderWrapper}>
            <div className={`${styles.web_header} ${hidden ? styles.hidden : ''}`}>
                <div className={styles.web_header__top_row}>
                    <img src={Logo} alt="logo" width={180} height={29}/>
                    <div className={styles.web_header__top_row___search}>
                        <SearchInput
                            value={searchText}
                            onChange={setSearchText}
                        />
                    </div>
                </div>
                <Navigation />
            </div>
        </div>
    );
}

export default WebHeader;
