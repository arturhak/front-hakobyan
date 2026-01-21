import {Drawer, Button} from 'antd';
import {useState} from 'react';
import styles from './Header.module.scss'
import {ReactComponent as BurgerIcon} from '../../assets/icons/burger.svg';
import Logo from "../../assets/logotype.svg";
import SearchInput from "../inputs/SearcInput";
import closeIcon from "../../assets/icons/close.svg";
import Navigation from "./Navigation";
import {HeaderProps} from "../../types/PropsType";


function MobileHeader({ searchText, setSearchText }: HeaderProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.mobHeaderWrapper}>
            <Button
                type="text"
                icon={<BurgerIcon width={25} height={17}/>}
                onClick={() => setOpen(true)}
                aria-label="Open menu"
            />

            <img src={Logo} alt="logo" width={163} height={24}/>
            <SearchInput
                value={searchText}
                onChange={setSearchText}
            />

            <Drawer
                placement="left"
                open={open}
                onClose={() => setOpen(false)}
                closeIcon={false}
                title={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img src={Logo} alt="Logo" width={160} height={24} />
                        <Button
                            type="text"
                            onClick={() => setOpen(false)}
                            aria-label="Close menu"
                            style={{ fontSize: '20px', lineHeight: 1 }}
                        >
                            <img src={closeIcon} alt="icon"/>
                        </Button>
                    </div>
                }
            >
                <Navigation />
            </Drawer>
        </div>
    );
}

export default MobileHeader
