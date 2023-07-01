import React, {ChangeEvent, useEffect, useState} from 'react';

export type ProfileStatusPropsType = {
    status: string
    updatedStatus: (status: string) => void
}

const ProfileStatusWithHook= (props:any)=> {
   const[editMode, setEditMode]=useState(false)
   const[status, setStatus]=useState(props.status)
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])
    const activatedEditMode=()=>{
       setEditMode(true)
    }
    const deActivatedEditMode=()=>{
        setEditMode(false)
        props.updatedStatus(status)
    }
    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value)
    }
    return (
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={activatedEditMode}>{props.status||"-------"}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deActivatedEditMode}/>
                </div>
                }

            </div>
        );

};

export default ProfileStatusWithHook;
