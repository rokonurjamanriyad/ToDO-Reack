import React from 'react';
import './Chak.css'
const Chak = (props) => {
    return (
        <div className='mainclass'>
                   { <table>
                <ol>
                    {
                        props.a.length !== 0?(
                            props.a.map((element,i)=>{
                                return (
                                   <ol>
                                     <td>{}{element}</td>
                                    <li><button onClick={()=>props.rem(i)}>Remove</button></li>
                                   </ol>
                                )
                            })


                        ):(<></>)
                }
                </ol>
            </table> }
        </div>
    );
};

export default Chak;