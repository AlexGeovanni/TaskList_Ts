import { useState} from 'react'

import FormTask from "./components/form"
import ItemsForm from "./components/items"
import Contacto from './components/contacto'

import './index.scss'

// exportamos la interfaz reut
import { Items } from './types'


function App() { 
  const [tareas,setTareas]= useState <Array<Items>> ([]);

  const EliminarTarea=(id:string):void=>{
        const Tareas = tareas.filter((tarea)=> tarea.id !==id)
        setTareas(Tareas)
  }

  const newTareas=(newTarea:Items):void=>{
    setTareas([...tareas, newTarea])
  }

  const tareaRealizada=(id:string,activo:boolean):void=>{
    const Actualizado= tareas.map((tarea)=>{
      if(tarea.id === id){
        tarea.isActive = activo
      }
      return tarea
    })
    setTareas(Actualizado)
  }

  return (
    <>
      <section className="content__app">
      <Contacto />
      <h1 className="title__app">Formulario de lista</h1>
      <div className="form__app">
        <FormTask newTarea={newTareas} />
      </div>
      <article className='taskList__app'>
          {
            tareas.map((item ,i)=>{
              return(
                <ItemsForm key={i}  item={item} Eliminar={EliminarTarea} Realizado={tareaRealizada} />
              )
            })
          }
      </article>
      </section>
    </>
  )
}

export default App
