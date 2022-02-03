import React, { useState } from 'react';
import "./CostForm.css";

const CostForm = (props) => {

    // Объявляем состояние для полей формы, название траты, сумма траты и дата траты
    const [inputDescription, setInputDescription] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const [inputDate, setInputDate] = useState("");

    // Функция для добавления данных в состояние. Получение данных с элемента, на котором сработало событие
    const descriptionChangeHandler = (event) => {
        setInputDescription(event.target.value);
    }

    // Функция для добавления данных в состояние. Получение данных с элемента, на котором сработало событие
    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    }

    // Функция для добавления данных в состояние. Получение данных с элемента, на котором сработало событие
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    }

    // Функция которая сработает при отправке данных с формы
    const submitHandler = (event) => {
        // Предотвращаем перезагрузку страницы после отправки данных
        event.preventDefault();

        // Записываем данные в объект
        const costData = {
            description: inputDescription,
            amount: inputAmount,
            date: new Date(inputDate)
        }

        // В функцию коллбек из компонента NewCost, передаем данные с формы
        props.onSaveCostData(costData)

        // Очищаем поля ввода
        setInputDescription("");
        setInputAmount("");
        setInputDate("");
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-cost__controls">
                    <div className="new-cost__control">
                        <label>Название</label>
                        {/* Добавляем события */}
                        <input type="text" value={inputDescription} onChange={descriptionChangeHandler} />
                    </div>
                    <div className="new-cost__control">
                        <label>Сумма</label>
                        {/* Добавляем события */}
                        <input type="number" value={inputAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                    </div>
                    <div className="new-cost__control">
                        <label>Дата</label>
                        {/* Добавляем события */}
                        <input type="date" value={inputDate} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} />
                    </div>
                    <div className="new-cost__actions">
                        <button type="submit">Добавить расход</button>
                        {/* Добавляем коллбек функцию из компонента NewCost, для закрытия формы */}
                        <button onClick={props.onCancel}>Отмена</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CostForm;