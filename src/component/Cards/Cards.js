import './Cards.css';
import { useState} from 'react';
// useState Code👇

export default function Cards({ img, name, availability, price }) {
    let [count, setcount] = useState(0);
    function decreament() {
        setcount(count - 1)
    }
    function increament() {
        setcount(count + 1)
    }
  
    return (
        <div className='card-container'>
            <div className='img-div'>
                <img src={img} className='fruitimg' />
            </div>
            <hr className='line' />
            <div className='info'>
                <h1 className='head-1'>{name}</h1>
                <h5 className='head-2'>{availability}</h5>
                <h2 className='head-3'>{price}</h2>
                <h1 className='head-count'>{count}</h1>
                <div class="btn-div">
                    <button className="btn" onClick={decreament}>-</button>
                    <button className="btn" onClick={increament}>+</button>
                    {/* <button onClick={ValueIsChanged}>function call</button> */}

                </div>
            </div>
        </div>
        
    )
}

