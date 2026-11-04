//ejercicio 1
//

async function crearTarea(tarea){
    const respuesta = await fetch("http://localhost:3000/tareas", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
            tarea: tarea,
            hecha: false,

        }),
    });
    const tareaCreada = await respuesta.json();
    console.log("tarea creada", tareaCreada);
    return tareaCreada;

}

//crearTarea("Hacer la tarea de javascript")
//Delete

async function borraTarea(id){
    const respuesta = await fetch(`http://localhost:3000/tareas/${id}`, {
        method: "DELETE",
    })

    if(!respuesta.ok){
        throw new Error(`Error al borrar la tarea ${respuesta.status}`);
    }
    console.log("tarea eliminada", id);
}
//borraTarea("sqdUOTmbKXU")

async function marcarTareaHecha(id, estado) {
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
//marcarTareaHecha("1xw84dq2kqo", true)

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
//modificarTareaCompleta("1xw84dq2kqo", "esta es la nueva tarea", false)
//--**Preguntas para pensarlo**

//-¿De dónde salieron los `id`?,¿Los mandaste vos?,¿Cómo te enteraste de cuál le tocó a cada una?
//-Los id salen del json-server que los genera aleotariamente para que nose repitan asi mismo
//- ¿Por qué el `POST` va a `/tareas` y el `PATCH` a `/tareas/` + `id`?
//-Porque la tarea aun no existe y permite crear algo nuevo, el patch permite modificar la id 
//--Por va ahi
//-El post 
//- Abrí `http://localhost:3000/tareas` en el navegador después de cada paso.
//¿Qué método está usando el navegador ahí?
//esta utilizando el json que permite filtrar lo que esta conectado sobre el codigo

// =================================
// EJERCICIO 2 - ROMPER PETICIONES
// =================================
