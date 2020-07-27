import React, {ChangeEvent} from 'react';

class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '-------'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        onChange={this.onStatusChange}
                        onBlur={this.deActivateEditMode}
                        autoFocus={true}
                        value={this.state.status}
                    />
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus