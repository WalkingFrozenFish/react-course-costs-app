import React, { useState } from 'react';
import Card from '../Card/Card';
import CostFilter from '../CostFilter/CostFilter';
import CostItem from '../CostItem/CostItem';
import CostsDiagram from '../CostsDiagram/CostsDiagram';
import CostsList from '../CostsList/CostsList';
import "./Costs.css";

const Costs = (props) => {
    const [selectedYear, setSelectedYear] = useState("2019");
    // const [filterArray, setFilterArray] = useState([...props.costs]);

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
        // setFilterArray(props.costs.filter(item => new Date(item.date).getFullYear().toString() === year))
    }

    const filteredCosts = props.costs.filter(cost => cost.date.getFullYear().toString() === selectedYear);



    return (
        <div>
            <Card className='costs'>
                <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
                {/* <CostItem date={props.costs[0].date} description={props.costs[0].description} amount={props.costs[0].amount} />
                <CostItem date={props.costs[1].date} description={props.costs[1].description} amount={props.costs[1].amount} />
                <CostItem date={props.costs[2].date} description={props.costs[2].description} amount={props.costs[2].amount} /> */}
                <CostsDiagram costs={filteredCosts} />
                <CostsList costs={filteredCosts} />

                {/* {filterArray.map((item) => {
                    return <CostItem key={item.id} date={item.date} description={item.description} amount={item.amount} />
                })} */}
                {/* {props.costs.map((item) => {
                    return <CostItem key={item.id} date={item.date} description={item.description} amount={item.amount} />
                })} */}
            </Card>
        </div>
    );
};

export default Costs;
