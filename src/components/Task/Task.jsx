import { TaskStyle } from "./styles";


export function Task(props) {
    return (
        <TaskStyle>
            <p>{props.titulo}</p>
            <button onClick={() => props.onremoveTask(props.id)}> X </button>
        </TaskStyle>
    )
}