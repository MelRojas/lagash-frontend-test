import { NotificationManager } from 'react-notifications';

export function flattenMessages(nestedMessages, prefix = '') {
    return Object.keys(nestedMessages).reduce((messages, key) => {
        let value       = nestedMessages[key];
        let prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'string') {
            messages[prefixedKey] = value;
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey));
        }

        return messages;
    }, {});
}

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const createNotification = (type, message) => {
    let notification = '';
    switch (type) {
        case 'info':
            notification = NotificationManager.info(message,null,3000);
            break;
        case 'success':
            notification = NotificationManager.success(message,null,3000);
            break;
        case 'warning':
            notification = NotificationManager.warning(message,null,3000);
            break;
        case 'error':
            notification = NotificationManager.error(message,null,3000);
            break;
        default:
            notification = NotificationManager.info(message,null,3000);
            break;
    }
    return notification;
};


