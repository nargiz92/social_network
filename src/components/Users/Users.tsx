import React from 'react';
import s from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import User from "./User";
import Paginator from "../../common/paginator/Paginator";


type UsersPropsTypes = UsersPropsType & {
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users:React.FC<UsersPropsTypes> = ({totalUsers,pageSize,currentPage,onPageChanged,users,...props}) => {

    return (
      <div>
          <Paginator totalItemsCount={totalUsers} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} portionSize={10}/>
          <div>
          {users.map(u => <User key={u.id} user={u} followingProgress={props.followingProgress}
                                  unfollow={props.unfollow} follow={props.follow} />
            )
            }
          </div>
        </div>
    );
}

export default Users;