class TodoApp{
    constructor(el){
        this.rootElement = el
        this.render()
    }

    render(){ 
        this.rootElement.innerHTML = `<div id="todo-app">
        <h1>Add your tasks here</h1>
            <div div="todo-app-content">
                <input type="text" placeholder="add task"/>
                <button>Add</button>
                <ul></ul>
            </div>
        </div>`

        const addButton = this.rootElement.querySelector("button")
        addButton.addEventListener('click', () => {
            this.addTodo()
        })
    }

    addTodo() { 
        const input = this.rootElement.querySelector("input")
        const ul = this.rootElement.querySelector("ul")
        let li = document.createElement('li')
        if (input.value == "")
            alert("First write something!")
        else {
            li.innerText = input.value
            li.style.cursor= "pointer"
            console.log(input.value);
            ul.appendChild(li)
            input.value = ""
            this.addDeleteListener(li)
        }
    }

    addDeleteListener(element) {
        element.addEventListener('click', () => {
            element.remove()
        })
        
    }
}