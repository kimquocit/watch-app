import React, { Component } from 'react';

class Message extends Component {
    render() {
        var { message } = this.props;
        return (
            <h3>
                {message}
            </h3>
        );
    }
}

export default Message;
