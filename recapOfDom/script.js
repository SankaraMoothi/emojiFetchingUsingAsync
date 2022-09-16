let div=document.createElement("div");
div.setAttribute("class","container col-sm-12 col-12");
document.body.append(div);

// seclect element created dinamically
var search=document.createElement("select");
search.setAttribute("id","select");




// creating dinamic div tag to display fetching data
let flag=document.createElement("div");
flag.setAttribute("id","flag")
document.body.append(flag)

//creating button dinamicaly and appending
let button=document.createElement("button");
button.setAttribute("id","button1");
button.setAttribute("class","btn btn-primary")
button.textContent="search";

//footers
let para=document.createElement("p");
para.setAttribute("id","p");
para.innerText="This Page About The Print The Fruits & Food Related Emoji That Fetch For An Public Api";
document.body.append(para);



//append both select and div tag dinamically
div.append(search,button);





async function foo(){
  
    const response = await fetch(`https://emojihub.herokuapp.com/api/all/category_food_and_drink`)
    const data = await response.json();
    var names=[];
    data.forEach(element => {
        names.push(element.name);
    });
    for (const val of names){
        var option = document.createElement("option");
        option.setAttribute("id","optionValue")
        option.value = val;
        option.innerText=val;
        search.append(option);
    }
    
button.addEventListener("click",async()=>{
        var valuea=document.getElementById("select");
        const response = await fetch(`https://emojihub.herokuapp.com/api/all/category_food_and_drink`)
        const data = await response.json();
        data.forEach(element => {
            if(element.name==valuea.value){
                flag.innerHTML=element.htmlCode;
            }
        });
    });
}
foo();

