//andha html file dummy number irunthuchula adha inga call pandrom
let a = document.querySelector('#displayHome');
let b = document.querySelector('#displayAway');

//aprm goal nu oru variable create panni initialize pandrom
let goal = 0;



function AddGoadHome(){
    goal += 1;
    a.textContent = goal;
    /*inga yepdi na namma andha dummy text ah a nu define pannirukoma
    appo andha mathanum na indha textContent use pannanum namma goal ah + 1 pandrom
    ah starting goal 0 la irunthu apdiye 1 increment aagum */
    console.log("Home Scored");
    /*idhu summa work aagutha illiya nu paaka browser la right click panna inspect nu
    oru option varum adhu open aana apro console oru tab varum adhula goal button press 
    panna indha message varum avalotha*/
}

function AddGoadAway(){
    goal += 1;
    b.textContent = goal;
    console.log("Away Scored");
}

function reset(){
    /*ipo namma goal variable ku again 0 kudukurom reset panna idhu click aana 
    goal oda value 0 ku poirum*/
    goal = 0;
    /*inga same mela panna maari tha*/
    a.textContent = goal;
    b.textContent = goal;    
}