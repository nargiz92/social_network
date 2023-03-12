import React from 'react';
import {SideBareType} from "../../redux/store";
import Friend from "./Friend/Friend";


export type FriendsType={
    sideBar:SideBareType
}
const Friends = (props:FriendsType) => {

    return (
        <div>
          <span>  {props.sideBar.friends.map(f=><Friend name={f.name } id={f.id}/>)}</span>
        </div>
    );
};

export default Friends;
