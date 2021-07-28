class TodoApp{
    constructor(el){
        this.rootElement = el
        this.render()
    }

    render(){ 
        this.rootElement.innerHTML = `<input type="text" placeholder="add task"/>
        <button>Add</button>
        <ul></ul>`

        const addButton = this.rootElement.querySelector("button")
        addButton.addEventListener('click', () => {
            this.addTodo()
        })
    }

    addTodo() { 
        const input = this.rootElement.querySelector("input")
        const ul = this.rootElement.querySelector("ul")
        let li = document.createElement('li')
        li.innerText = input.value
        li.style.cursor= "pointer"
        console.log(input.value);
        ul.appendChild(li)
        input.value = ""
        this.addDeleteListener(li)
    }

    addDeleteListener(element) {
        element.addEventListener('click', () => {
            element.remove()
        })
        
    }
}