import React from 'react';
import CostItem from '../CostItem/CostItem';
import "./CostsList.css";

const CostsList = (props) => {

    // Если данных в массиве нет, то отрисовываем сообщение
    if (props.costs.length === 0) {
        return <h2 className='cost-list__fallback'>В этом году расходов нет</h2>
    }

    return (
        <ul className="cost-list">
            {/* Через метод массивов map, передаем полученные данные в компонент CostItem */}
            {props.costs.map((item) => <CostItem key={item.id} date={item.date} description={item.description} amount={item.amount} />)}
        </ul>
    );
};

export default CostsList;
