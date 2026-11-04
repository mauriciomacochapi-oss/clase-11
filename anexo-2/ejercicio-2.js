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
            hecha: true, 
        }),

    });
    console.log(respuesta)
}
modificarTareaCompleta("iOaYlF3DXBs", "cambio ruedas", false)