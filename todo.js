let input = prompt("What would you like to do!!");

const todo = ['blessing should sub for ola', 'send money to the coder'];

while(input !== "quit" && input !== "q"){
    if ( input === "list"){
        console.log("**************");
        for(let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("**************");
    } else if ( input === "new"){
        const newTodo = prompt("Enter your new Todo");
        todo.push(newTodo)
        console.log(`${newTodo} added to your list`);
    } else if ( input === "delete"){
        const index = parseInt(prompt("enter the number to delete"));
        if(!Number.isNaN(index)){
          const deleted = todo.splice(index, 1);
        console.log(`Ok, You deleted ${deleted[0]}`);
        } else{
            console.log("Unknown Number")
        }
    }
   input = prompt("what would you like to do");
}
console.log("ok, You quit the app!");