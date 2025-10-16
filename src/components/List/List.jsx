import { useState } from "react";
import { Task } from "../Task/Task";
import { ConteinerList } from "./style";

export function List() {
     let valorStorage = [];
     if (localStorage.getItem('listaStorage') != null) {
          valorStorage = JSON.parse(localStorage.getItem('listaStorage'));
     }
     //estado -> função atualizadora e valor inicial
     const [tarefas, setTarefas] = useState(valorStorage);
     const [novaTarefa, setNovaTarefa] = useState('');


     localStorage.setItem('listaStorage', JSON.stringify(tarefas));


     function addTask(e) {    
          e.preventDefault();
          let idTask = new Date().getTime();

          setTarefas([...tarefas, { titulo: novaTarefa, id: idTask }]);
          setNovaTarefa('');
     }


     function removeTask(id) {
          setTarefas(
               tarefas.filter((tarefa) => {
                    return tarefa.id !== id;
               })
          );
     }

     function removeAll(){
     setTarefas([])
     
     }
     return (
          <ConteinerList>
               <form onSubmit={addTask}> 
                    <input type="text"

                         placeholder="Digite sua tarefa"
                         value={novaTarefa}
                         onChange={(e) => setNovaTarefa(e.target.value)}
                    />

                    <button disabled={novaTarefa == ''} >criar</button>
                    <a href='#' className="btnlimpar" onClick={removeAll}>limpar</a>
               </form>

               {
                    tarefas.map((tarefa) => (
                         <Task titulo={tarefa.titulo} id={tarefa.id} key={tarefa.id} onremoveTask={removeTask} />
                    ))
               }
          </ConteinerList>
     )
}