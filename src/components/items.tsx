import '../index.scss'
import { Items } from '../types'

// una de las cosas que podemos hacer para solucionar el tipo "Any" al pasar las props.
// Hacer interface de las props que estamos pasando

interface Props{ /* punto importante esque debemos especificar si lo que estamos pasando 
                es un Array | objeto | un solo dato para hacer la interface de la prop correctamente */
    item:Items, // aqui estamos importando un objeto de tipo Items lo cual tenemos configurado en types.d.ts
    Eliminar:(id:string)=> void
    Realizado:(id:string,actvo:boolean) => void
}

function ItemsForm({item,Eliminar,Realizado}:Props){

    /* check lo hize manual ya que cuando accedia al "e.target.checked" me salia un error que no la propiedad no se encotraba,
        pero creo que es error de react ya que el valor boleano si me salia auque me marcara error, por eso obte acerlo manual,
        negando el atributo de la tarea.
    */ 
    const checkedTarea=():void=>{
        const check = !item.isActive;
        Realizado(item.id,check)
    }
    
    return(
        <div className={`item ${item.isActive && "done"}`}>
            <p className={`description__item`}>{item.descrip}</p>
            <div className="action__item">
                <input checked={item.isActive} onClick={checkedTarea} className="check__action" type="checkbox" name="" />
                <p onClick={()=>Eliminar(item.id)} className="delete__action">Eliminar</p>
            </div>
        </div>
    )
}

export default ItemsForm 

// segunda sulucion del tipo Any al pasar las props
/*
    diferencia con la anterior solucion es que lo que estaba devolviendo que era un  JSX, y ahora devulve otra cosa y hacerlo de otra forma,
    lo bueno de esta solcion esque permite acceso a los children pero no hay ninguna necesidad de pasar eso y por lo que es error.
 */
/*
const ItemsForm:React.FunctionComponent<Props>=({tareas})=>{
    return(
        <div className="item">
            <p className="description__item">{tareas.descrip}</p>
            <div className="action__item">
                <input className="check__action" type="checkbox" name="" id="" />
                <p className="delete__action">Eliminar</p>
            </div>
        </div>
    )
}

export default ItemsForm */