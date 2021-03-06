import  "./Flags.scss";
import {IconButton, Menu, MenuItem, Tooltip} from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import cookies from "js-cookie"
import { useTranslation } from "react-i18next";
import i18next from 'i18next'
import {useState} from "react";

const Flags = () => {
    const languages = [
        {
            code: 'en',
            country_code: 'gb',
            name: 'English'
        },
        {
            code: 'ru',
            country_code: 'ru',
            name: 'Русский'
        },
        /*{
            code: 'de',
            country_code: 'de',
            name: 'Deutsch'
        },*/
        {
            code: 'ua',
            country_code: 'ua',
            name: 'Українська'
        },
    ]

    const { t } = useTranslation();

    const currentLanguageCode = cookies.get('i18next') || 'en'

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={"flags"}>
            <Tooltip title={t ("language")} arrow>
                <IconButton onClick={handleClick} size="small" sx={{ml: 2}}>
                    <LanguageIcon style={{width: '32px', height: '32px'}}/>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                disableScrollLock={true}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        bgcolor: '#F8F8F8',
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: '#F8F8F8',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,

                        },
                    },
                }}
            >
                {languages.map(({code, name, country_code}) => (
                    <Tooltip title={name} arrow placement='left'>
                        <MenuItem key={code} style={{
                            backgroundColor: currentLanguageCode === code ? '#D8D8D8' : '#F8F8F8',
                            border: currentLanguageCode === code ? '1px solid #989898' : '#F8F8F8'
                        }}>
                            <IconButton
                                className={"dropdown-item"}
                                onClick={() => {
                                    i18next.changeLanguage(code)
                                }}
                            >

                                <div  className={`flag-icon flag-icon-${country_code}`}
                                     style={{
                                         opacity: currentLanguageCode === code ? 1 : 0.3,
                                         width: '3rem',
                                         height: '2rem',

                                     }}
                                >
                                </div>

                            </IconButton>
                        </MenuItem>
                    </Tooltip>
                ))}

            </Menu>
        </div>
    )
}

export default Flags;