import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './component/Cards/Cards';
import Imgapple from './component/Cards/Apple.webp';
import Imgpears from './component/Cards/pears.jpg';
import Imgstrowberry from './component/Cards/Strowberry.webp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <div className='cards'>
  <Card  img={Imgapple} name = {"Apple 500 G"}  availability={"Available✅"}  price={"Rs 150.00"}/>
  <Card img={Imgpears} name = {"Pears 500 G"}  availability={"Available✅"}  price={"Rs 182.00"}/>
  <Card img={Imgstrowberry} name = {"Strowberies 500 G"}  availability={"Available✅"}  price={"Rs 170.00"}/>

  </div>
);

