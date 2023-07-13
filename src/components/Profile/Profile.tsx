import React from 'react';
import s from './Profile.module.scss';
import ProfileInfo from "./ProfilInfo/ProfileInfo";
import styleContainer from '../../common/style/Container.module.scss'
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfilyType} from "../../redux/Profile_Page_reduser";

type ProfileTypes={
profile: null|ProfilyType
    status:string
    updatedStatus:(status:string)=>void
}
const Profile = (props:ProfileTypes) => {
    return (
        <div className={`${styleContainer.container} ${s.profile}`}>
          <ProfileInfo profile={props.profile} status={props.status} updatedStatus={props.updatedStatus}/>
            <MyPostContainer />
        </div>

    );
};

export default Profile;