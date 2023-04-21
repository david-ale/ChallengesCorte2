import { useState } from "react";
import { Son } from "./Son";

export const Father = ()=>{
    const list = [2,4,6,8,10]
    const [valor,setValor] = useState(0)
    
    const increment = (num) =>{
        setValor(valor +  num)
    }

    return(
        <div>
            <h1>Father</h1>
            <p>Total:</p>
            <hr/>
            {
                list.map((n,idx)=>{
                    return (
                        <Son
                            key = {idx}
                            number = {n}
                            increment = {increment}
                        />

                    )
                })
            }

        </div>
    )
}