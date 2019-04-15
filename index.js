let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    //added action
    action: function (){
        alert("no mistakes, just happy accidents!");
    },
    //added action 
    paid: function (){
        let hours = prompt("how many hours did he work");
        let pay = hours * this.cost_per_hour;
        alert(`the painter made ${pay} for ${hours} of work`);
    }
}
    painter.action();
    painter.paid();
//dot notation
painter.sellService = () => {
    return `hi i am a painter and i will paint your house for ${painter.cost_per_hour} per hour`
}  

console.log(painter.sellService());

    
 

//Add an action that the painter can perform.
//Have her take that action by execucting the method you created.
//BONUS: Add a method that allows us to add new tools for the painter.