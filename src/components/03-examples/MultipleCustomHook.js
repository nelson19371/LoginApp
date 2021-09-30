import React from 'react'
import '../02-useEffect/effects.css'
import {useFetch} from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'



export const MultipleCustomHook = () => {

    const {counter, increment,decrement}= useCounter(1);

    const {loading, data }=  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    // console.log(state);
    const {author, quote} = !!data && data[0];
    console.log(author, quote);

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>




            {
                loading
                ?  
                  (
                    <div className="alert alert-info text-center">
                    Loading...
                    </div>


                  )

                :
                (
                    <blockquote className="blockquote text-right">
                    <p className="mb-0">{ quote }</p>
                    <br></br>
                    <footer className="blockquote-footer">{ author }</footer>
                </blockquote>

                )
            }

           
            <button 
            className="btn btn-primary"
            onClick={increment}
            >
                Siguiente quote
            </button>
            <button 
            className="btn btn-primary"
            onClick={decrement}
            >
                Anterior quote
            </button>

           

        </div>
    )
}
