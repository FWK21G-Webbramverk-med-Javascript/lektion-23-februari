function TodoItem(props) {
    console.log(props);
    const { task, done } = props;
    let text = 'Ej klar';

    if (done) {
        text = 'Klar';
    }

    return (
        <li>{ task } - { text }</li>
    )
}

export default TodoItem;