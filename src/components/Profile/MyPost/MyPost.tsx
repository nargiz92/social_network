import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

import {MyPostType} from "./MyPostContainer";


const MyPost = (props: MyPostType) => {

    let postsElement = props.posts.map(p => <Post message={p.message} key={p.id} likes={p.likes}/>)
    let newTextElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        props.addPost()

    }
    const onChangePost = () => {

        let text=newTextElement.current?.value
        if (text) {
            props.onChangePost(text)
        }
    }

    return (
        <div>
            <div>
                My Post
            </div>
            <textarea ref={newTextElement} onChange={onChangePost} value={props.newPostText}></textarea>
            <button onClick={addPost}>add post</button>
            {postsElement}

        </div>
    );
};

export default MyPost;