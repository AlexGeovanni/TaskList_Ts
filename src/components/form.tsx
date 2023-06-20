import React, {useState} from 'react'
import '../index.scss'
import { Items } from '../types'

// Interface de estados es decir que podemos tener varios estado es una misma intefaz
interface FormState{
    inputsValue:Items
}

interface Props {
    newTarea:(tarea:Items)=> void
}

function FormTask ({newTarea}:Props){
    
    const [input,setInput]= useState<FormState['inputsValue']>({
        id:crypto.randomUUID(), 
        descrip:'',
        isActive:false
    });

    // event:submit, se envia los datos para agregar nueva tarea
    const valorsForm =(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setInput({...input,['id']:crypto.randomUUID()})
        if(input.descrip != ''){
            newTarea(input)
            setInput({
                id:crypto.randomUUID(), 
                descrip:'',
                isActive:false
            })
        }
    }
    
    // actualizamos el valor input cada que escribimos un texto 
    const ActualizarInput= (e:React.ChangeEvent<HTMLInputElement>) =>{
        setInput({...input,['id']:crypto.randomUUID(),
            [e.target.name]:e.target.value})
    }

    return(
        <form onSubmit={valorsForm} className='form' >
            <input 
            value={input.descrip}
            onChange={ActualizarInput}
            placeholder="Ingrese la tarea" 
            className="input__form"
            type="text" 
            name="descrip" 
            id="descrip" 
            />
            <button  className="btn btnAgregar__form" >Agregar</button>
        </form>
    )
}

export default FormTask;