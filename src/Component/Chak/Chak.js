import React from 'react';
import './Chak.css'
const Chak = (props) => {
    return (
        <div className='mainclass'>
                   { <table>
                <tbody>
                    {
                        props.a.length !== 0?(
                            props.a.map((element,i)=>{
                                return (
                                   <tr>
                                     <td>{}{element}</td>
                                    <td><button onClick={()=>props.rem(i)}>Remove</button></td>
                                   </tr>
                                )
                            })


                        ):(<></>)
                }
                </tbody>
            </table> }
        </div>
    );
};

export default Chak;