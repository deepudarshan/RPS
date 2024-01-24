let user_score=0;
let comp_score=0;

let parah=document.querySelector("#parah");
let u_points=document.querySelector("#u_points");
let c_points=document.querySelector("#c_points");


const choices=document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user_choice=choice.getAttribute('id')
        play(user_choice);
        
    });
});


const comp_choice=()=>{
    let arr=["rock","paper","scissor"];
    let idx=Math.floor(Math.random()*3)
    return arr[idx];
    
}

const draw=()=>{
    console.log("draw");
    parah.innerText="Draw";
    parah.style.backgroundColor="blueviolet";
}



const play=(user_choice) => {
    console.log(user_choice);
    const comp=comp_choice();
    console.log(comp);
    if(user_choice===comp){
        draw();
    }
    else {
        let userwin=true;
        if(user_choice==="rock"){
            userwin= comp==="paper"? false:true;
        }
        else if(user_choice==="paper"){
            userwin=comp==="scissor" ? false : true;

        }
        else {
            userwin=comp==="rock" ? false  : true;
        }
        show_winner(userwin,user_choice,comp);
    
    }
    
};

const show_winner=(userwin,user_choice,comp)=>{
    if(userwin){
        console.log("user won");
        parah.innerText=`Computer puts ${comp} USER WON`;
        user_score++;
        u_points.innerText=user_score;
        parah.style.backgroundColor="green";

    }
    else{
        console.log("you lost");
        parah.innerText=`Computer puts ${comp} USER LOST`;
        comp_score++;
        c_points.innerText=comp_score;
        parah.style.backgroundColor="red";
        //parah.style.color="black";
        

    }
}



