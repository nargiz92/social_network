import React from 'react';
import s from "./Post.module.css";


export type PostPropsType = {
    message: string
    likes: number
}
const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src={'https://th.bing.com/th/id/OIP.iyrBrw7GY8DPoRRRyMvemAHaJO?w=133&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'}
                alt={'logo'}/>
            {props.message}
            <div>
                <span>like:{props.likes}</span>
            </div>
        </div>
    );
};

export default Post;