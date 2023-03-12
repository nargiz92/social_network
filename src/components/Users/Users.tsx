import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'
import * as axios from "axios";
import userImage from '../../assets/images/OIP.jpeg'



class Users extends React.Component<any, any>{

   componentDidMount() {
       alert('new')
       axios.get("https://social-network.samuraijs.com/api/1.0" ).then(response => {
           debugger
           this.props.setUsers()
       })
   }




    rerender(){
        return (

            <div>

                {this.props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small!=null?u.photos.small:userImage} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>unFollow</button>
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
}
export default Users;