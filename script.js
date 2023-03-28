var container=document.createElement("container");
container.setAttribute("class","container-fluid");
container.style.width="100%" ;
container.style.height="100vh" ;

var h1=document.createElement("h1");
h1.style.textAlign="center";
h1.style.marginTop="60px";
h1.style.backgroundColor="rgb(145, 139, 140)";
h1.innerHTML="NATIONALITY GUESSOR BASED ON NAME ";
h1.style.color="Blue";
document.body.append(h1);


var input=document.createElement("input");
input.style.marginTop="30px";
input.style.fontSize="30px";
input.style.marginLeft="500px";
input.style.borderWidth="10px";
input.style.textAlign="center";
input.setAttribute("type","text");
input.setAttribute("id","submittext");
input.setAttribute("placeholder","Enter the Name");
input.style.borderColor="black";
document.body.append(input);

var button=document.createElement("button");
button.innerHTML="Submit";
button.classList.add("btn","btn-primary");
button.style.marginLeft="5px";
button.style.textAlign="center";
button.setAttribute("id","btn");
button.setAttribute("value","submit");
document.body.append(button);

var button=document.createElement("button");
button.innerHTML="clear";
button.classList.add("btn","btn-danger");
button.style.marginLeft="5px";
button.style.textAlign="center";
button.setAttribute("id","btn");
button.setAttribute("value","clear");
document.body.append(button);

var div=document.createElement("div");
div.style.textAlign="center";
document.body.append(div);
div.setAttribute("class","container-fluid result");

var h4=document.createElement("h4");
h4.style.textAlign="center";
h4.style.marginTop="20px";
h4.setAttribute("id", "result")
h4.innerHTML="Name Related To Countries And Their Probabilities Are Listed Below:";
h4.style.color="Brown";
h4.style.textDecorationThickness="Bold";
document.body.append(div,h4 );

let submit_text=document.querySelector("#submittext");
let result_data=document.querySelector("#result");
let submit_btn=document.querySelector("#button");
 let clear_btn=document.querySelector("#button");

 submit_btn.addEventListener("click",async ()=> {
    let value=document.getElementById("submittext").value;
    console.log(value);
    document.querySelector('.result').style.display="block";
   
    

    if(value.length==0||value.includes(" ")){
        alert("Please enter the valid name without any spaces");

   }
   
   else {
     
       try{
           let data=await fetch(`https://api.nationalize.io/?name=${value}`);
          let result= await data.json();
          console.log(result);
          result_data.innerHTML="";
          
          for(let i=0;i<3;i++){
         result_data.innerHTML+=
            `
 <div class="container">
              <div class="card">
                <div class="card-header">
                 <div class="card-title">TOP-${i+2}</div>
                 
                </div>
                <div class="card-body">
                Country_id:${result.country[i].country_id}<br>
                Probability :${result.country[i].probability}<br><br>
                </div>
              </div>
            </div>
              `
          }
          
       }
       catch{
           console.log(error);
       }
       
   }
})
var container_data = document.querySelector('.card');
clear_btn.addEventListener("click",()=>{
document.querySelector('.result').style.display="none";
submit_text.value="";
result_data.innerHTML=" ";

});
    






