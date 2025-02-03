import React from 'react';

const notificationStyle = {
    color: 'green',
    fontSize: '24px',
    fontWeight: 'bold',
    borderRadius: '5px',
    borderStyle: 'solid',
    padding: '10px',
    borderColor: 'green',
}
const errorStyle = {
    color: 'red',
    fontSize: '24px',
    fontWeight: 'bold',
    borderRadius: '5px',
    borderStyle: 'solid',
    padding: '10px',
    borderColor: 'red',
}

const Notification = ({message}) => {
    if (message) {
        return (
            <div style={message.error ? errorStyle : notificationStyle}>
                {message.content}
            </div>
        );
    }
    return null
};

export default Notification;