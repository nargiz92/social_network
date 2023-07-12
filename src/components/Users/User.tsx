import React, {FC} from 'react';
import s from './users.module.css'
import userImage from '../../assets/images/OIP.jpeg'
import {NavLink} from 'react-router-dom';
import {InjectedFormProps} from "redux-form";
import {UsersType} from "../../redux/Users-reducer";



type UserPropsType={
    user:UsersType
    followingProgress:number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
const User:React.FC<UserPropsType> = ({user,followingProgress,unfollow,follow}) => {

    return (
      <div>
          <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small || userImage} className={s.userPhoto}/>
                    </NavLink>
                    </div>

                    <div>
                        {user.followed
                            ? <button disabled={followingProgress.some(id=>id===user.id)} onClick={() => {
                            unfollow( user.id)

                            }}>UnFollow</button>
                            : <button disabled={followingProgress.some(id=>id===user.id)} onClick={() => {
                                follow( user.id)

                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>
    );
}

export default User;