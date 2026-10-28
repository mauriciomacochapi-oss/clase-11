//ejercicio 1
//

async function crearTarea(tarea){
    const respuesta = await fetch("http://localhost:3000/tareas", {
        method: "POST",
        headers: {"content-Type": "application/json"},
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

async function modificarTarea(id, estado) {
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
modificarTarea("1xw84dq2kqo", true)