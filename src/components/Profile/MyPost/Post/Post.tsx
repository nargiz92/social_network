import React from 'react';
import s from "./Post.module.scss";
import likesImg from '../../../../assets/images/like-svgrepo-com.svg'

import navSvg from '../../../../assets/images/forNav/user-heart-rounded-svgrepo-com.svg'

const imgOfProfile = {
    backgroundImage: `url(${likesImg})`
}

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
            <div className={s.postsText}>
                {props.message}
            </div>

            <div className={s.svgIkonAndLikes}>
                <svg className={s.svgIcon}>
                    <use href={`${navSvg}#likes`}/>
                </svg>
                <span >:{props.likes}</span>
            </div>
        </div>
    );
};

export default Post;