import React, {ChangeEvent} from 'react';

export type ProfileStatusPropsType = {
    status: string
    updatedStatus: (status: string) => void
}

class ProfileStatus extends React.Component <ProfileStatusPropsType> {
    statusInputRef = React.createRef()
    state = {
        editMode: false,
        status: this.props.status
    }
    activatedEditMode = () => {

        this.setState({
            editMode: true
        })
    }
    deActivatedEditMode = () => {
        this.setState({
            editMode: false

        })
        this.props.updatedStatus(this.state.status);
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.state.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activatedEditMode}>{this.props.status || "-------"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true}
                           onBlur={this.deActivatedEditMode} value={this.state.status}/>
                </div>
                }

            </div>
        );
    }
};

export default ProfileStatus;
