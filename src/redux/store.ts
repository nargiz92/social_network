import profilePageReducer, {AddPostType, UpdatedNewPostTextType} from "./Profile_Page_reduser";
import dialogsPageReducer, {ADD_NEW_MESSAGE, AddNewMessageType, UpdatedNewMessageType,} from "./Dialogs_Page_reduser";
import SideBarReducer from "./SideBar_reduser";

export type PostsType = {
    id: number
    message: string
    likes: number
}
export type MessageType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}
export type FriendsType = {
    id: number
    name: string
}
export type ProfilePagesType = {
    posts: PostsType[]
    newPostText: string
}
export type DialogsPagesType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newTextForMessage: string
}
export type SideBareType = {
    friends: FriendsType[]
}
export type StateType = {
    profilePages: ProfilePagesType
    dialogsPages: DialogsPagesType
    sideBar: SideBareType
}

export type ActionType=AddPostType|UpdatedNewPostTextType|
    AddNewMessageType|UpdatedNewMessageType

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: any) => void
    dispatch: (action: ActionType) => void
    subscriber: (observer: (state: StateType) => void) => void
}


let store: StoreType = {
    _state: {
        profilePages: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 5},
                {id: 2, message: 'Happy birthday', likes: 55},
                {id: 3, message: 'Yo', likes: 51},
            ],
            newPostText: 'it-incubator',
        },
        dialogsPages: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 1, name: 'Sveta'},
                {id: 1, name: 'Andrey'},
                {id: 1, name: 'Ann'},
                {id: 1, name: 'Parviz'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Are you ok?'},
                {id: 3, message: 'What`s up?'},
                {id: 4, message: 'Nice'},
            ],
            newTextForMessage: 'What are you doing?'
        },
        sideBar: {
            friends: [
                {id: 1, name: 'Ali'},
                {id: 2, name: 'Bob'},
                {id: 3, name: 'Hanna'},
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: any) {
        console.log('rerendered')
    },
    dispatch(action: ActionType) {
        debugger
        this._state.profilePages = profilePageReducer(this._state.profilePages, action)
        this._state.dialogsPages = dialogsPageReducer(this._state.dialogsPages, action)
        this._state.sideBar = SideBarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state);
    },
    subscriber(observer: (state: any) => void) {
        this._callSubscriber = observer;
    }

}

export default store;

