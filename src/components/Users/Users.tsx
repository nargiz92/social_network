import React from 'react';
import s from './users.module.css'
import userImage from '../../assets/images/OIP.jpeg'
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from 'react-router-dom';
import {usersApi} from "../../api/API";


type UsersPropsTypes = UsersPropsType & {
    onPageChanged: (pageNumber: number) => void
    unfollow:any
    follow:any
}

const Users = (props: UsersPropsTypes) => {

    let pagesCount = Math.ceil(props.totalUsers / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(t => {
                    return <span style={{marginRight: 5}} className={props.currentPage === t ? s.page : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(t)
                                 }}>{t}</span>
                })}
            </div>

            {props.users.map(u => <div key={u.id}>
                <span>

                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small || userImage} className={s.userPhoto}/>
                    </NavLink>
                    </div>

                    <div>
                        {u.followed
                            ? <button disabled={props.followingProgress.some(id=>id===u.id)} onClick={() => {
                                props.unfollow( u.id)


                            }}>UnFollow</button>
                            : <button disabled={props.followingProgress.some(id=>id===u.id)} onClick={() => {
                                props.follow( u.id)

                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
}

export default Users;