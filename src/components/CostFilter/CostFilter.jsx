import React from 'react';
import "./CostFilter.css";

const CostFilter = (props) => {
    // Год полученный из выпадающего списка, передаем в полученную из компонента Costs коллбек функцию
    const yearChangeHandler = (event) => {
        props.onChangeYear(event.target.value);
    }

    return (
        <div className="costs-filter">
            <div className="costs-filter__control">
                <label>Выбор по году</label>
                {/* Добавляем событие на выпадающий список */}
                <select value={props.year} onChange={yearChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default CostFilter;
