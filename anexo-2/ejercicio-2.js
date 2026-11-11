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
borraTarea("999999999")
//estado:error-->404
//lo que muestra seria lo mismo porque no borra la id
/*    POST = crear.

    GET = leer.

    PUT = reemplazar todo.

    PATCH = modificar una parte.

    DELETE = eliminar.
*/
