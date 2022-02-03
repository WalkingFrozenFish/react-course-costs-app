import React from 'react';
import Diagram from '../Diagram/Diagram/Diagram';

const CostsDiagram = (props) => {

    // Массив с названиями месяцев и значением трат за месяц, по умолчанию 0
    const diagramDataSets = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 },
    ]

    // Через цикл перебираем данные, полученные из компонента Costs (Отфильтрованный массив)
    for (const cost of props.costs) {
        // Из каждого элемента массива получаем месяц
        const costMonth = cost.date.getMonth();
        // Затем добавляем сумму трат в определенный месяц в массиве diagramDataSets
        diagramDataSets[costMonth].value += cost.amount;
    }

    return (
        // Передаем массив с месяцами и тратами в компонент Diagram
        <Diagram dataSet={diagramDataSets} />
    );
};

export default CostsDiagram;
