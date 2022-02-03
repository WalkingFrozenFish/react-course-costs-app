import React, { useState } from 'react';
import "./CostForm.css";

const CostForm = (props) => {

    const [inputDescription, setInputDescription] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const [inputDate, setInputDate] = useState("");

    // const [showForm, setShowForm] = useState(false);

    // const [userInput, setUserInput] = useState({
    //     name: "",
    //     amount: "",
    //     date: ""
    // });

    const descriptionChangeHandler = (event) => {
        setInputDescription(event.target.value);
        // setUserInput({ ...userInput, name: event.target.value });
        // console.log(event.target.value, userInput);
    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
        // setUserInput({ ...userInput, amount: event.target.value });
        // console.log(event.target.value, userInput);
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
        // setUserInput({ ...userInput, date: event.target.value });
        // console.log(event.target.value, userInput);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputDescription,
            amount: inputAmount,
            date: new Date(inputDate)
        }
        props.onSaveCostData(costData)
        // console.log(props);

        setInputDescription("");
        setInputAmount("");
        setInputDate("");

        // setShowForm(false);
    }

    return (
        <div>
            {/* {showForm ? */}
            <form onSubmit={submitHandler}>
                <div className="new-cost__controls">
                    <div className="new-cost__control">
                        <label>Название</label>
                        <input type="text" value={inputDescription} onChange={descriptionChangeHandler} />
                    </div>
                    <div className="new-cost__control">
                        <label>Сумма</label>
                        <input type="number" value={inputAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                    </div>
                    <div className="new-cost__control">
                        <label>Дата</label>
                        <input type="date" value={inputDate} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} />
                    </div>
                    <div className="new-cost__actions">
                        <button type="submit">Добавить расход</button>
                        <button onClick={props.onCancel}>Отмена</button>
                    </div>
                </div>
            </form>
            {/* : <button onClick={() => setShowForm(true)}>Добавить новый расход</button>
            } */}
        </div>
    );
};

export default CostForm;
