import React from 'react';

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: true
    }

    activateEditMode() {
        this.setState({
           editMode: true
        })
    }
    deActivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        onBlur={this.deActivateEditMode.bind(this)}
                        autoFocus={true}
                        value={this.props.status}
                    />
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus