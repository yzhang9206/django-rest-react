import { CREATE_MESSAGE, GET_MESSAGES } from './types';

export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    }
}

export const returnErrors = (msg, status) => {
    return {
        type: GET_MESSAGES,
        payload: { msg, status }
    };
};