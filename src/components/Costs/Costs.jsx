import React, { useState } from 'react';
import Card from '../Card/Card';
import CostFilter from '../CostFilter/CostFilter';
import CostsDiagram from '../CostsDiagram/CostsDiagram';
import CostsList from '../CostsList/CostsList';
import "./Costs.css";

const Costs = (props) => {
    // Объявляем состояние для выбора года, по которому будет идти фильтрация трат
    const [selectedYear, setSelectedYear] = useState("2019");

    // Коллбек функция для смены значения в состоянии selectedYear, которую мы передаем в компонент CostFilter
    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }

    // Фильтруем полученные данные из компонента App, получаем новый массив с данными где год траты из массива совпадает с годом в состоянии selectedYear
    const filteredCosts = props.costs.filter(cost => cost.date.getFullYear().toString() === selectedYear);

    return (
        <div>
            <Card className='costs'>
                {/* Передаем коллбек функцию в компонент, через которую мы получаем год для фильтрации */}
                <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />

                {/* Передаем отфильтрованный массив с данными в компонент */}
                <CostsDiagram costs={filteredCosts} />

                {/* Передаем отфильтрованный массив с данными в компонент */}
                <CostsList costs={filteredCosts} />
            </Card>
        </div>
    );
};

export default Costs;
