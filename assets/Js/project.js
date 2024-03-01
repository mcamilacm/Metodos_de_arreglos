const listaTareas = document.querySelector(".cuerpo_tabla");
const inputTarea = document.querySelector("#input1");
const botonAgregar = document.querySelector("#botontarea");
const contarTareas = document.querySelector("#cuenta-tareas");
const tareaRealizada = document.querySelector("#cuenta-realizadas");

const tareas = [
    { id: 1, tarea: "Regar Plantas", completada: false },
    { id: 2, tarea: "Sacar al Perro", completada: false },
    { id: 3, tarea: "Sacar la Basura", completada: false }
];

renderList(tareas);

botonAgregar.addEventListener("click", () => {
    const nuevaTarea = inputTarea.value;
    if (nuevaTarea === "") {
        alert("Por favor escribir una tarea");
        return;
    }

    let lastId = 0;
    if (tareas.length > 0) {
        lastId = tareas[tareas.length - 1].id;
    }

    const tarea1 = {
        id: lastId + 1,
        tarea: nuevaTarea,
        completada: false
    };

    tareas.push(tarea1);
    inputTarea.value = "";
    renderList(tareas);
});

function renderList(tareas) {
    let html = "";
    let tareasRealizadas = 0;

    for (const tarea of tareas) {
        html += `
        <tr id="tarea-${tarea.id}">
            <td id="id_tabla">${tarea.id}</td>
            <td>${tarea.tarea}</td>
            <td id="check">
                <input type="checkbox" id="checkbox1-${tarea.id}" ${tarea.completada ? "checked" : ""} onclick="marcarRealizada(${tarea.id})">
            </td>
            <td><button onclick="borrarTarea(${tarea.id})">Borrar</button></td>
        </tr>`;

        if (tarea.completada) {
            tareasRealizadas++;
        }
    }

    listaTareas.innerHTML = html;
    contarTareas.innerHTML = `${tareas.length}`;
    tareaRealizada.innerHTML = tareasRealizadas;
}

function marcarRealizada(id) {
    const tarea = tareas.find((t) => t.id === id);
    tarea.completada = !tarea.completada;
    renderList(tareas);
}

function borrarTarea(id) {
    const index = tareas.findIndex((ele) => ele.id === id);
    tareas.splice(index, 1);
    renderList(tareas);
}


















// const inputTarea = document.querySelector("#input1");
// const cuerpoTabla =document.querySelector("#cuerpo_tabla")
// const botonAgregar = document.querySelector("#botontarea");
// const contarTareas = document.querySelector("#cuenta-tareas");





// const tareaRealizada = document.querySelector("#cuenta-realizadas");
// const tareaTablas = document.querySelector("#tarea_tabla");
// const hacerCheck = document.querySelector("#check");
// const eliminar = document.querySelector("#delete");




// const tareas = [];

// botonAgregar.addEventListener("click", () => {
//     nuevaTarea = inputTarea.value;
//     tareas.push({ nuevaTarea });
//     inputTarea.value = "";


//     let html = ""; 
//     for (let tarea of tareas){
//         html += `<li>${tarea}</li> ` 
       

//     }
//  cuerpoTabla.innerHTML = html
//      //contarTareas.innerHTML = tareas.length

    

// });


// // hacerCheck= <input type="checkbox"></input>
// // eliminar= <button >Eliminar</button>