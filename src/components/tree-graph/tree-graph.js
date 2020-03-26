import React, {useState} from 'react';
import './tree-graph.css';
import Tree from 'react-tree-graph';
import PathsText from "./paths-text";
import {useSelector} from "react-redux";

function TreeGraph() {
    const data = useSelector((state) => state.tree);

    return (
        <div className="custom-container">
            <Tree
                width={500}
                height={500}
                data={data}
                children={<PathsText/>}
                pathFunc={(x1, y1, x2, y2) =>
                    `M${y1},${x1} ${y2},${x2}`}
                svgProps={{
                    className: 'custom'
                }}
                animated
                labelProp={'id'}
            />

        </div>
    );
}
export default TreeGraph;