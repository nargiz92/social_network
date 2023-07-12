import * as React from 'react'
import {NavLink} from 'react-router-dom';
import s from './Header.module.scss'
import logo from '../../assets/images/logo.svg'

type HeaderPropsType = {
    isAuth: boolean
    login: string
    logout: () => void
}

const Header = (props: HeaderPropsType) => {

    return (
        <header className={s.header}>
          <div className={s.logoAndLogin}>
              <svg>
                  <use href={`${logo}#myLogo`}/>
                  <use/>
              </svg>
              <div className={s.loginBlock}>
                  {props.isAuth ?
                      <div>
                          {props.login}
                          <button onClick={props.logout}>log out</button>
                      </div>
                      : <NavLink to={'/login'}>Login</NavLink>}
              </div>
          </div>

            {/*<Navbar/>*/}
        </header>
    );
};

export default Header;