import React, { useState } from 'react';
import CostForm from '../CostForm/CostForm';
import "./NewCost.css";

const NewCost = (props) => {
    // Объявляем состояние для показа формы добавления трат, изначально форма спрятана
    const [isFormVisible, setIsFormVisible] = useState(false);

    // Коллбек функция для передачи данных из компонента CostForm в компонент App
    const saveCostDataHandler = (inputCostData) => {
        // Полученный объект с данными разворачиваем в новый объект, и добавляем id
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }

        // В функцию коллбек из компонента App передаем объект с данными
        props.onAddCost(costData)

        // Скрываем форму
        setIsFormVisible(false);
    }

    // Функция для открытия формы добавления трат
    const inputCostDataHandler = () => {
        setIsFormVisible(true);
    }

    // Функция для закрытия формы добавления трат
    const cancelCostHandler = () => {
        setIsFormVisible(false);
    }

    return (
        <div className="new-cost">
            {/* Проверяем состояние через тернарный оператор, (Если false то показываем кнопку, иначе показываем форму) */}

            {/* Добавляем функцию для открытия формы */}
            {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}

            {/* Добавляем функцию коллбек для получения данных, и функцию для закрытия формы */}
            {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler} />}
        </div>
    );
};

export default NewCost;