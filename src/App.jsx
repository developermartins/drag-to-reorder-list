import React, { useEffect, useState } from 'react';
import { Reorder } from 'framer-motion';

import './App.css';

const App = () => {

  const [items, setItems] = useState(["React", "CSS", "Motion"]);

  useEffect(() => {
    const savedData = localStorage.getItem("items");

    if (savedData) {
      setItems(JSON.parse(savedData));
    };

  }, []);

  const saveItems = () => {
    localStorage.setItem("items", JSON.stringify(items));
    setItems(items);
  };

  return (
    <section className='content-section'>
      <Reorder.Group values={ items } onReorder={ setItems }>
        { items.map(item => (
          <Reorder.Item key={ item } value={ item }>
            { item }
          </Reorder.Item>
        )) }
      </Reorder.Group>
      <button
        className='save-btn'
        onClick={ saveItems }
      >
        Salvar lista
      </button>
    </section>
  );
};

export default App;
