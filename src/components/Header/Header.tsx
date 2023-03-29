import * as React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'



const Header = (props:any) => {
    return (
        <header className={s.header}>
            <img src={'https://th.bing.com/th/id/OIP.fXK1l4Tt-XrSb3srIC18kwHaEL?w=317&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'}
                 alt={'image'}/>
            <div className={s.loginBlock}>
                {props.isAuth?props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;