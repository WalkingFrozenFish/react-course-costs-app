import React, { useState } from 'react';
import CostItem from './components/CostItem/CostItem';
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const App = () => {

  // const costs = [
  //   {
  //     id: "c1",
  //     date: new Date(2021, 2, 12),
  //     description: "Холодильник",
  //     amount: 999.99
  //   },
  //   {
  //     id: "c2",
  //     date: new Date(2021, 11, 25),
  //     description: "MacBook",
  //     amount: 1254.72
  //   },
  //   {
  //     id: "c3",
  //     date: new Date(2021, 4, 1),
  //     description: "Джинсы",
  //     amount: 49.99
  //   },
  // ]


  const [costs, setCosts] = useState([
    {
      id: "c1",
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99
    },
    {
      id: "c2",
      date: new Date(2021, 11, 25),
      description: "MacBook",
      amount: 1254.72
    },
    {
      id: "c3",
      date: new Date(2021, 4, 1),
      description: "Джинсы",
      amount: 49.99
    },
  ])

  const addCostHandler = (cost) => {
    console.log(cost)
    setCosts([...costs, cost])
  }

  return (
    <div>
      {/* <h1>Изучаем react</h1> */}
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
      {/* <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount} />
      <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount} />
      <CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount} /> */}
    </div>
  );
};

export default App;