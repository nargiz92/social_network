import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.scss';
import navSvg from '../../assets/images/forNav/user-heart-rounded-svgrepo-com.svg'

export const Navbar = () => {
    const [menuIsOpen, setBergerMenu] = useState(false)
    const onBurgerBtnClick = () => {
        setBergerMenu(!menuIsOpen)
    }
    return (
        <nav className={s.nav}>
            <div className={s.navContainer}>
                <div className={s.linkAndImgBlock}>
                    <svg className={s.svgIcon}>
                        <use href={`${navSvg}#navProfile`}/>
                    </svg>
                    <NavLink to='/profile' className={s.active}>Profile</NavLink>
                </div>

                <div className={s.linkAndImgBlock}>
                    <svg className={s.svgIcon}>
                        <use href={`${navSvg}#message`}/>
                    </svg>
                    <NavLink to='/dialogs' className={s.active}>Messаge</NavLink>
                </div>
                <div className={s.linkAndImgBlock}>
                    <svg className={s.svgIcon}>
                        <use href={`${navSvg}#news`}/>
                    </svg>

                    <NavLink to='/news' className={s.active}>News</NavLink>
                </div>
                <div className={s.linkAndImgBlock}>
                    <svg className={s.svgIcon}>
                        <use href={`${navSvg}#music`}/>
                    </svg>
                    <NavLink to='/music' className={s.active}>Musiс</NavLink>
                </div>
                <div className={s.linkAndImgBlock}>
                    <svg className={s.svgIcon}>
                        <use href={`${navSvg}#settings`}/>
                    </svg>
                    <NavLink to='/settings' className={s.active}>Settings</NavLink>
                </div>
                <div className={s.linkAndImgBlock}>
                    <svg className={s.svgIcon}>
                        <use href={`${navSvg}#users`}/>
                    </svg>
                    <NavLink to='/users' className={s.active}>Users</NavLink>
                </div>
                <div className={s.linkAndImgBlock}>
                    <svg className={s.svgIcon}>
                        <use href={`${navSvg}#friends`}/>
                    </svg>
                    <NavLink to='/friends' className={s.active}>Friends</NavLink>
                </div>
            </div>
            <div onClick={onBurgerBtnClick} className={s.burgerBtn}>
                <span></span>
            </div>

        </nav>
    );
};

