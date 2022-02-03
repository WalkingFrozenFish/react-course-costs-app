import React from 'react';
import DiagramBar from '../DiagramBar/DiagramBar';
import "./Diagram.css";

const Diagram = (props) => {
    // Возвращаем массив со значениями трат, получаем массив с числами
    const dataSetsValues = props.dataSet.map(dataSet => dataSet.value);
    // Разворачиваем массив с числами, и находим максимальное значение
    const maxMonthCosts = Math.max(...dataSetsValues);

    return (
        <div className="diagram">
            {/* Через метод массивов map, передаем данные из dataSet, и возвращаем компоненты DiagramBar, для отображения процента трат */}
            {props.dataSet.map((dataSet) => {
                return <DiagramBar
                    key={dataSet.label} // Название месяца как уникальный ключ
                    value={dataSet.value} // Трата за месяц
                    maxValue={maxMonthCosts} // Максимальное число трат за месяц
                    label={dataSet.label} // Название месяца
                />
            })}
        </div>
    );
};

export default Diagram;
