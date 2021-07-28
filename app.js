/* Create a TodoApp class

It will used as like this new TodoApp(document.getElementById("app"))

This will generate a todo app inside the app div

Hint
====

class TodoApp{
   constructor(el){
        this.rootElement = el

        this.render()
   }

   render(){ render the todo app using inner html & add eventlistners to inputs & buttons }

   addTodo() { add logic for adding todo into list}

   deleteTodo(element) {delete todo element}
} */

class TodoApp {
    constructor(){
        const button = document.getElementById('todoBtn')
        button.addEventListener('click', () => { this.render() })
        
    }

    render(){
        const ul = document.getElementById('showTodo')
        const input = document.getElementById('todoInp')
        let li = this.createItem()
        li.innerText = input.value
        console.log(input.value);
        ul.appendChild(li)
        input.value = ""
    }

    addTodo() {
        
    }

    createItem() {
        let li = document.createElement('li')
        li.id = 'listItem'
        return li
    }
}