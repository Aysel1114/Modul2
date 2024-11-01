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
        this.newList = document.querySelector(".newList");
        this.oldInput = document.querySelector(".input");

        this.div = document.createElement("div");
        this.div.classList.add("list");

        this.ul = document.createElement("ul");
        this.div.appendChild(this.ul);

        // this.newList.appendChild(this.div);
    }
    creatTask(){
        const container = document.querySelector(".container");
        const removeBtn = document.querySelector(".removeBtn");
        const btnContainer = document.querySelector(".btnContainer");
        const oldInputDisplay = getComputedStyle(this.oldInput).display;

        if(oldInputDisplay === "block"){
            
            const task = new ToDoList(this.inputs.listItem.value);
            this.array.push(task);
            console.log(task);
            console.log(this.array);
            this.inputs.listItem.value = "";

            this.newList.appendChild(this.div);
            this.createTaskList();

            const list = document.querySelector(".list");
            if(this.array.length > 5){
                list.style.overflowY = "scroll";
            }

            this.oldInput.style.display = "none";
            this.newList.style.display = "block";

            container.classList.add("taskContainer");
            removeBtn.style.display = "none";
            btnContainer.style.marginTop = "18px";


        }
        else if(oldInputDisplay === "none"){
            this.oldInput.style.display = "block";
            this.newList.style.display = "none";

            container.classList.remove("taskContainer");
            removeBtn.style.display = "block";
            btnContainer.style.marginTop = "0px";
        }

    }

    createTaskList() {
        this.ul.innerHTML = "";

        this.array.forEach(task => {
            const li = document.createElement("li");
            li.innerText = task.tasks;

            const insideDiv = document.createElement("div");
            insideDiv.innerText = "X";
            insideDiv.classList.add("listRemoveBtn");

            li.appendChild(insideDiv);

            insideDiv.addEventListener("click", () => {
                li.remove();
            });

            this.ul.appendChild(li);
        });
    }

    removeTask() {
        this.inputs.listItem.value = "";
    }

    init(){
        const button = document.querySelector(".button");
        button.addEventListener("click", () => this.creatTask());
        const removeButton = document.querySelector(".removeBtn");
        removeButton.addEventListener("click", () => this.removeTask());
    }
}

const app = new CreateList();
app.init();