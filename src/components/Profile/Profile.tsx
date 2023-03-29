import React from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfilInfo/ProfileInfo";

import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfilyType} from "../../redux/Profile_Page_reduser";

type ProfileTypes={
profile: null|ProfilyType
}
const Profile = (props:ProfileTypes) => {
    return (
        <div className={s.profile}>
          <ProfileInfo profile={props.profile}/>
            <MyPostContainer />
        </div>

    );
};

export default Profile;