import React from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfilInfo/ProfileInfo";
import {ActionType, ProfilePagesType, StoreType} from "../../redux/store";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = () => {
    return (
        <div className={s.profile}>
          <ProfileInfo/>
            <MyPostContainer />
        </div>

    );
};

export default Profile;