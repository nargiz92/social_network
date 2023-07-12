import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/preloader/Preloader";
import {ProfilyType} from "../../../redux/Profile_Page_reduser";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

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
            <img className={s.profileImg}
                 src={'https://th.bing.com/th/id/OIP.TW5Fkdqi6O26c-o6kc1VcwHaE8?pid=ImgDet&rs=1'}
                 alt={'profileImages'}/>
            <div>
                <img src={props.profile.photos.large}/>
            </div>
            <div>{props.profile.aboutMe}
                {props.profile.fullName}
            </div>
            <ul>

                <li>
                    {props.profile.contacts.vk}
                </li>
            </ul>
            <ProfileStatusWithHook status={props.status} updatedStatus={props.updatedStatus}/>
        </div>
    );
};

export default ProfileInfo;
