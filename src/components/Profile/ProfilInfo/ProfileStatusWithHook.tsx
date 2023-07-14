import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileStatus.module.scss'


export type ProfileStatusPropsType = {
    status: string
    updatedStatus: (status: string) => void
}

const ProfileStatusWithHook = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activatedEditMode = () => {
        setEditMode(true)
    }
    const deActivatedEditMode = () => {
        setEditMode(false)
        props.updatedStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div className={s.statusContainer}>
            {!editMode &&
            <div className={s.statusForChange}>
                <h4 onDoubleClick={activatedEditMode}>{props.status || "-------"}</h4>
            </div>
            }
            {editMode &&
            <div className={s.inputForChangeStatus}>
                <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deActivatedEditMode}/>
            </div>
            }
            <span>change status</span>
        </div>
    );

};

export default ProfileStatusWithHook;
