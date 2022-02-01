import React, { useState } from 'react';
import Card from '../Card/Card';
import CostDate from '../CostDate/CostDate';
import "./CostItem.css";

const CostItem = (props) => {
    // console.log(props)

    const [description, setDescription] = useState(props.description);

    const changeDescriptionHandler = () => {
        setDescription("Description")
        console.log("click");
    }

    return (
        <Card className='cost-item'>
            <CostDate date={props.date} />
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
            <button onClick={changeDescriptionHandler}>Изменить описание</button>
        </Card>
    );
};

export default CostItem;
