export const getSubTreeUtil = (tree, id) => {

    if(tree.id === id) {
        return tree;
    }
    if(tree.children && tree.children.length > 0) {
        for (let i = 0; i< tree.children.length; i++) {
            let result =  getSubTreeUtil(tree.children[i], id);
            if(result) {
                return result
            }
        }
    }
    return false;
};