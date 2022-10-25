import React, {useState} from "react";
import close from "./../asets/close.svg"
function TodoList() {
    const [inputValue, setInputValue] = useState("")
    const [todoes, setTodoes] = useState([])
    const [isVisible, setIsVisible] = useState(true)
    const [deleteTodo, setDeleteTodo] = useState(false)


    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const addTodo = () => {
        console.log("todo");
        setTodoes((prev) => ([...prev, {title: inputValue, id: Math.random()}]))
        setInputValue('');
    }

    const handleDelete = (id) => {
        if(id === todoes.todo.id){
            setDeleteTodo(true)
        }

        console.log(deleteTodo);
    }

    return <div className="todoListWrapper">
        <div className="todoList">
            <div>
                <input value={inputValue} onChange={handleInputChange} type="text"/>
                <button disabled={!inputValue} onClick={addTodo}> Add</button>
            </div>
            <div className={"todoes"}>
                {todoes.map((todo) => <div key = {todo.title}>
                    {todo.title}
                    <img value = {inputValue} onClick ={handleDelete} className="close" src={close} alt={"close"} />
                </div>)
                }


                {/*{isVisible ? <>*/}
                {/*    {todoes.map((todo) => <div key = {todo.title}>*/}
                {/*        {todo.title}*/}
                {/*        <img onClick ={handleToggle} className="close" src={close} alt={"close"} />*/}
                {/*    </div>)*/}
                {/*    }*/}
                {/*</> : <>*/}
                {/*    <img onClick ={handleToggle} className="close" src={close} alt={"close"} />*/}

                {/*</>*/}
                {/*}*/}

            </div>
        </div>
    </div>
}

export default TodoList;