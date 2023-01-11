import React, { useEffect, useState } from 'react';
import { Reorder } from 'framer-motion';

import './App.css';

const App = () => {

  const [items, setItems] = useState([
    { 
      nome: "React",
      imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      nome: "CSS",
      imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
      nome: "HTML",
      imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    }
  ]);

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
          <Reorder.Item key={ item.nome } value={ item }>
            { item.nome }
            <img src={item.imgLink} alt="item" />
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
