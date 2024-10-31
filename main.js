class ToDoList {
    constructor(tasks){
        this.tasks = tasks;
    }
}

class CreateList {
    constructor(){
        this.array = [];
        this.inputs = {
            listItem: document.querySelector(".input")
        }
    }
    creatTask(){
        const task = new ToDoList(this.inputs.listItem.value);
        this.array.push(task);
        console.log(task);
        console.log(this.array);
    }

    init(){
        const button = document.querySelector(".button");
        button.addEventListener("click", () => this.creatTask());
    }
}

const app = new CreateList();
app.init();