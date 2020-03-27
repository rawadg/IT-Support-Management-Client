import {ADD_NODE, REMOVE_SUBTREE} from "../actions/actions-constants";

/*
let node = {
    id: -> id of the node,
    label -> one of {Question, Solution},
    properties -> properties of the node for example {question: 'Is server on ?'}
    pathValue -> the path the connects to this node - usually the answer to the previous node question
    children -> array of child nodes
    guiLabel -> the solution or the question
}
 */
const demo = {
    id: 1,
    label: 'Question',
    properties: {question: 'is server on ?'},
    guiLabel: 'is server on ?',
    children: [{id: 2, label: 'Solution', pathValue: 'No', properties: {solution: 'start server', link: '/'}, guiLabel: 'start server'},
                {id: 3, label: 'Question', pathValue: 'Yes', properties: {question: 'is linux machine proper ?'}, guiLabel: 'is linux machine proper ?', children:[
                        {id: 4, label: 'Solution', pathValue: 'Yes', properties: {solution: 'restart server', link: '/'}, guiLabel: 'restart server'},
                        {id:5 , label: 'Solution', pathValue: 'No', properties: {solution: 'call support', link: '/'}, guiLabel: 'call support'}
                    ]}]
};
const initialState = demo; // TODO change to empty json and fill from server data
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_NODE:
            return state;
        case REMOVE_SUBTREE:
            return state;
        default:
            return state;
    }
}