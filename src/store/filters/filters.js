import {getSubTreeUtil} from "../../utils/utils";

export const getSubTree = (id) => {
    return (state) => {
        return  getSubTreeUtil(state.tree, id);
    }
};

export const getRootId = () => {
    return (state) => {
        return state.tree.id;
    }

};

