import React from 'react';
import Post from "./Post/Post";
import {MyPostType} from "./MyPostContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../utils/validators/index.";
import {Textarea} from "../../../common/FormsControl/FormControl";

type FormDataType = {
    newMyPostText: string
}
const maxLength10 = maxLenghtCreator(10);

const MyPost=React.memo((props: MyPostType) =>{
    let postsElement = props.posts.map(p => <Post message={p.message} key={p.id} likes={p.likes}/>)
    const onAddPost = (values: FormDataType) => {
        props.addPost(values.newMyPostText)

    }

    return (
        <div>
            <h3>
                My Post
            </h3>
            <MyPostFormRedux onSubmit={onAddPost}/>
            <div>
                {postsElement}
            </div>


        </div>
    );
})

export const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={'newMyPostText'}
               validate={[required, maxLength10]}/>
        <button>add post</button>
    </form>
}
const MyPostFormRedux = reduxForm<FormDataType>({
    form: 'ProfileAddPostForm'
})(AddNewPostForm)
export default MyPost;