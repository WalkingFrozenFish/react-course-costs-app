import React, { useState } from 'react';
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const App = () => {

  // Состояние компонента, некоторые данные для списка трат в виде объектов
  const [costs, setCosts] = useState([
    {
      id: "c1",
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99
    },
    {
      id: "c2",
      date: new Date(2020, 11, 25),
      description: "MacBook",
      amount: 1254.72
    },
    {
      id: "c3",
      date: new Date(2019, 4, 1),
      description: "Джинсы",
      amount: 49.99
    },
  ])

  // Функция коллбек для добавления трат в состояние компонента
  const addCostHandler = (cost) => {
    // Разворачиваем состояние, добавляем новые данные, затем добавляем это в состояние компонента App
    setCosts([...costs, cost])
  }

  return (
    <div>
      {/* Передаем функцию коллбек в компонент NewCost */}
      <NewCost onAddCost={addCostHandler} />
      {/* Передаем данные из компонента в дочерний */}
      <Costs costs={costs} />
    </div>
  );
};

export default App;