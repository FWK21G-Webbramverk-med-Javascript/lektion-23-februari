function AddTodo(props) {
    let inputText = '';
    const { updateTodos } = props;

    function handleKeyUp(event) {
        //console.log(event);
        inputText = event.target.value;
        //console.log('Står i inputfält: ', inputText);
    }

    function handleClick() {
        console.log(inputText);
        updateTodos(inputText);
    }

    return (
        <section>
            <input type="text" placeholder="Lägg till en todo" 
                onKeyUp={ handleKeyUp } />
            <button onClick={ handleClick }>Lägg till</button>
        </section>
    )
}

export default AddTodo;