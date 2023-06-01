import { useDispatch } from "react-redux";

import { addTodoAction, deleteTodoAction } from "../store/actions/todoActions";

export default function useTodo() {
    const dispatch = useDispatch()

    //to add one todo
    const addOneTodo = async (data) => {
        dispatch(addTodoAction(data))
    }

    //to delete one todo
    const deleteOneTodo = async () => {
        dispatch(deleteTodoAction())
    }

    return { addOneTodo, deleteOneTodo }
}
