import React from 'react';
import DiagramBar from '../DiagramBar/DiagramBar';
import "./Diagram.css";

const Diagram = (props) => {
    const dataSetsValues = props.dataSet.map(dataSet => dataSet.value);
    const maxMonthCosts = Math.max(...dataSetsValues);

    return (
        <div className="diagram">
            {props.dataSet.map((dataSet) => {
                return <DiagramBar
                    key={dataSet.label}
                    value={dataSet.value}
                    maxValue={maxMonthCosts}
                    label={dataSet.label}
                />
            })}
        </div>
    );
};

export default Diagram;
