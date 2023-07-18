let a = document.querySelector('#displayHome');
let b = document.querySelector('#displayAway');
let goal = 0;



function AddGoadHome(){
    goal += 1;
    a.textContent = goal;
    console.log("Home Scored");
}

function AddGoadAway(){
    goal += 1;
    b.textContent = goal;
    console.log("Away Scored");
}

function reset(){
    goal = 0;
    a.textContent = goal;
    b.textContent = goal;    
}