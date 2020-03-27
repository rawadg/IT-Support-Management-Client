import React from "react";

function PathsText({data}) {
    const pathsData = [];
    const buildPathsData = (node) => {
        if(node.pathValue !== undefined) {
            pathsData.push({id: node.id, pathValue: node.pathValue})
        }
        if(!node.children || node.children.length === 0) {
            return;
        }
        node.children.forEach((node) => {
            buildPathsData(node);
        });
    };

    buildPathsData(data);

    return (
        <text>
            {pathsData.map((item) => {
                return <textPath href={'#' + item.id} startOffset={"50%"} spacing={'auto'} key={item.id}>{item.pathValue}</textPath>
            })}
        </text>
    );
}

export default PathsText;