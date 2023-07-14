import React from 'react';
import s from './ProfileInfo.module.scss'
import Preloader from "../../../common/preloader/Preloader";
import {ProfilyType} from "../../../redux/Profile_Page_reduser";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import profileImg from '../../../assets/images/timeline-1.jpg'
import userImage from '../../../assets/images/OIP.jpeg'

const imgOfProfile = {
    backgroundImage: `url(${profileImg})`
}
type ProfileInfoPropsType = {
    profile: null | ProfilyType
    status:string
    updatedStatus:(status:string)=>void
}
const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const contacts = Object.values(props.profile.contacts)

    return (
        <div className={s.profileInfo}>
            <div className={s.profileImg} style={imgOfProfile}></div>

            <div className={s.userPhotoBlock}>
                <img className={s.someUserPhotos} src={props.profile.photos.large||userImage}/>
            </div>
            <div className={s.usersDataAndStatus}>
                <div>{props.profile.aboutMe}
                   <h3>
                       {props.profile.fullName}
                   </h3>
                </div>
                <ul>

                    <li>
                        {props.profile.contacts.vk}
                    </li>
                </ul>
                <ProfileStatusWithHook status={props.status} updatedStatus={props.updatedStatus}/>
            </div>

        </div>
    );
};

export default ProfileInfo;
