import React, {useState} from 'react';
import './tree-graph.css';
import Tree from 'react-tree-graph';
import PathsText from "./paths-text";
import {useSelector} from "react-redux";
import {getRootId, getSubTree} from "../../store/filters/filters";

function TreeGraph() {
    const handleClick = (event, nodeId) => {
        setActiveNode(nodeId);
    };

    const generatePathProps = (node) => {
        if(node.pathValue !== undefined) {
            node.pathProps = {id: node.id}
        }
        if(!node.children || node.children.length === 0) {
            return;
        }
        node.children.forEach((node) => {
            generatePathProps(node);
        });
    };

    const [activeNode, setActiveNode] = useState(useSelector(getRootId()));
    const storeData = useSelector(getSubTree(activeNode));
    let data  = Object.assign({}, storeData);

    generatePathProps(data);

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const margins = { bottom : 10, left : 100, right : 150, top : 50};

    window.onresize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    return (
        <div className="custom-container">
            <Tree
                width={width}
                height={height}
                data={data}
                children={<PathsText data={data}/>}
                pathFunc={(x1, y1, x2, y2) =>
                    `M${y1},${x1} ${y2},${x2}`}
                animated
                labelProp={'guiLabel'}
                nodeOffset={-50}
                margins={margins}
                steps={50}
                nodeRadius={30}
                gProps={{
                    onClick: handleClick
                }}
                keyProp={'id'}
            />
        </div>
    );
}
export default TreeGraph;