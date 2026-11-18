//npx json-server db.json 
//npx(manejador) json-server(servidor a levantar) db.json(nombre de la db)

async function crearTarea(tarea){
    
    try{

        const respuesta = await fetch("http://localhost:3000/tareas", {
            method: "POST",
            headers: { "content-Type": "application/json" },
        body: {
            tarea: tarea,
            hecha: false,
            
        },
    });
        const tareaCreada = await respuesta.json();
        console.log("tarea creada", tareaCreada);
        return tareaCreada;
    }catch(error){
        console.log(error)
    }
}


//1_crearTarea("Tarea fede creada")


//el post como no tiene "JSON.stringify" no permite crear la tarea 
//dejandonos con un objeto no reconocible como json, db.json no lo crea

async function modificarTareaCompleta(id, tarea, estado){
    const respuesta = await fetch(`http://localhost:3000/tareas/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            tarea: tarea, 
            hecha: estado, 
        }),

    });
    console.log(respuesta)
}
//modificarTareaCompleta("iOaYlF3DXBs", "", false)

//status: 200,  statusText: 'OK',
//db.json quedo: 
  /*{
      "tarea": "",
      "hecha": false,
      "id": "iOaYlF3DXBs"
    }
  */
 async function borraTarea(id){
    const respuesta = await fetch(`http://localhost:3000/tareas/${id}`, {
        method: "DELETE",
    })

    if(!respuesta.ok){
        throw new Error(`Error al borrar la tarea ${respuesta.status}`);
    }
    console.log("tarea eliminada", id);
}
//borraTarea("999999999")

//estado:error-->404
//lo que muestra seria lo mismo porque no borra la id
/*    POST = crear.

    GET = leer.

    PUT = reemplazar todo.

    PATCH = modificar una parte.

    DELETE = eliminar.
*/
/*Error: Error al borrar la tarea 404
    at borraTarea (/home/etec/Documentos/clase-11/anexo-2/ejercicio-2.js:60:15)
    at process.processTicksAndRejections (node:internal/process/task_queues:103:5)
*/    
async function marcarTareaSinID(id, estado) {
    const respuesta = await fetch(`http://localhost:3000/tareas/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            hecha: estado,
        }),
    });
    const tareaModificada = await respuesta.json();
    console.log(tareaModificada);
    return tareaModificada;
}
//marcarTareaSinID("", true)
//codigo de estado:{ error: 'Not Found' }
/*
- ¿En cuáles se disparó el `catch` **solo**, sin que vos chequearas nada? 
    aparecio esto:{ error: 'Not Found' },porque no es un comando configurado que puse
  
  ¿En cuáles tuviste que chequear `respuesta.ok` para enterarte?

- El `PUT` con solo `hecha`: ¿el servidor contestó con error?  
¿Entonces salió "bien"? 

¿Para quién?
- Sin el `JSON.stringify`, ¿qué texto le llegó al servidor?  
¿De dónde sale ese texto?

*/
