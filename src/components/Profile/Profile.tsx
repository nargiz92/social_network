import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfilInfo/ProfileInfo";

import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfilyType} from "../../redux/Profile_Page_reduser";

type ProfileTypes={
profile: null|ProfilyType
    status:string
    updatedStatus:(status:string)=>void
}
const Profile = (props:ProfileTypes) => {
    return (
        <div className={s.profile}>
          <ProfileInfo profile={props.profile} status={props.status} updatedStatus={props.updatedStatus}/>
            <MyPostContainer />
        </div>

    );
};

export default Profile;