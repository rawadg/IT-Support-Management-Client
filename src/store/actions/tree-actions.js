import {ADD_NODE} from "./actions-constants";

export const addNode = () => {
    return {
        type: ADD_NODE,
        payload: {
            id: 0
        }
    }
};