import {Input} from 'antd';
import {useState, useRef} from 'react';
import styles from '../header/Header.module.scss';
import SearchIcon from "../../assets/icons/search.svg"
import {SearchProps} from "../../types/PropsType";

function SearchInput({ value, onChange }: SearchProps) {
    const [open, setOpen] = useState(false);
    const inputRef = useRef(null);

    const handleOpenSearch = () => {
        setOpen(!open);
    };

    return (
        <div
            className={`${styles.searchContainer} ${open ? styles.open : ''}`}
        >
            <img
                src={SearchIcon}
                onClick={handleOpenSearch}
                className={styles.searchIcon}
                width={16}
                height={16}
                alt="icon"
            />
            <Input
                ref={inputRef}
                placeholder="Search..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={styles.searchInput}
            />
        </div>

    );
}

export default SearchInput
