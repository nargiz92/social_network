import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import Friends from "../Friends/Friends";
import {SideBareType} from "../../redux/store";


export const Navbar = () => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='profile' activeClassName={s.activeNavlink} >Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.activ}`}>
                <NavLink to='/dialogs' activeClassName={s.activeNavlink}>Messаge</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeNavlink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='music' activeClassName={s.activeNavlink}>Musiс</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='settings' activeClassName={s.activeNavlink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='users' activeClassName={s.activeNavlink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='friends' activeClassName={s.activeNavlink}>Friends</NavLink>
            </div>


            {/*<Friends />*/}
        </nav>
    );
};

