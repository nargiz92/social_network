import React from 'react';
export type FriendPropsType={
    id:number
    name:string
}
const Friend = (props:FriendPropsType) => {
    return (
        <span>
            {props.name}
        </span>
    );
};

export default Friend;