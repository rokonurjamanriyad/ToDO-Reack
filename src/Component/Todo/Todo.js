import React from 'react';
import { useState } from 'react';
import './Todo.css'
import Chak from '../Chak/Chak';
const Todo = () => {
    const [list, setlist] = useState([]);
    const [item, setItem] = useState("");
    const addTolist = () => {
        list.push(item)
        setlist([...list])
    }
    const removeItem = (i) => {
        list.splice(i, 1)
        setlist([...list])
    }

    return (
        <div>
            <div className="mainclss">
                <div className="input">
                    <div className="class1">
                        <p>List Item {list.length}</p>
                        <div className="display">
                            <h3>{item}</h3>
                            
                        </div>

                    </div>
                    <div className="class2">
                        <input onChange={(even) => setItem(even.target.value)} type="text" placeholder='Enter List' name="" id="" />
                        <button onClick={addTolist}>Add</button>
                    </div>
                </div>
                <Chak a={list} rem={removeItem} b={list}></Chak>
            </div>


            
        </div>
    );
};

export default Todo;