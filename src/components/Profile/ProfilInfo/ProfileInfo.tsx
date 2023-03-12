import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <img className={s.profileImg} src={'https://th.bing.com/th/id/OIP.TW5Fkdqi6O26c-o6kc1VcwHaE8?pid=ImgDet&rs=1'}
                 alt={'profileImages'}/>

        </div>
    );
};

export default ProfileInfo;
