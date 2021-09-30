import React from 'react';
import { useState } from 'react/cjs/react.development';
import '../02-useEffect/effects.css'
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook';

export const RealExampleRef = () => {

   const[show,setShow]= useState(false);
    return (
        <div>
            <h1>ReakExampleRef</h1>
            <hr/>



            {show && <MultipleCustomHook/>}

            <button
                className="btn btn-primary mt-5"
                onClick={()=>{
                    setShow(!show)
                }}
            >
                Show/Hide
            </button>

        </div>
    )
}
