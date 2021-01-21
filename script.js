let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
let form4 = document.getElementById("reviewData");
let info = document.getElementById("step5");
let r,dishArr,m;
/******show form2******************* */
document.getElementById("nextForm1").addEventListener("click" , ()=> {
   
    if(document.getElementById("people").value > 10)    {
        alert("Sorry,Maximum number of people can only be upto 10");
        return false;
    }

    if(document.getElementById("meal").value == "" || document.getElementById("people").value == "")   {
        alert("This is required");
    }else {
        form2.style.display = "block";
        form1.style.display = "none";
        form3.style.display = "none";
        form4.style.display = "none";
        info.style.display  = "none";
        document.getElementById("step2").style.background = "#2196f380";
        document.getElementById("step1").style.background = "none";
        document.getElementById("step3").style.background = "none";
        document.getElementById("step4").style.background = "none";
    }

    if(m == document.getElementById("meal").value)  {
        return false;
    }

    let restaurant = document.getElementById("restaurant");
    let option,optionText;
    restaurant.innerHTML = "";
    option = document.createElement("option");
    optionText = document.createTextNode("---");
    option.append(optionText);
    option.setAttribute("value" , "");
    restaurant.appendChild(option);

/****breakfast resturants */
    if(document.getElementById("meal").value == "Breakfast")    { 
        let restArr = ["Mc Donalds" , "Vege Deli" , "Olive Garden"];
        for(let i = 0; i < restArr.length; i++) {
            option = document.createElement("option");
            optionText = document.createTextNode(restArr[i]);
            option.append(optionText);
            option.setAttribute("value" , restArr[i]);
            restaurant.appendChild(option);
        }
    }

/****Lunch resturants */
    if(document.getElementById("meal").value == "Lunch")    {
        let restArr = ["Mc Donalds" , "Taco Bell" , "Vege Deli" , "Pizzeria" , "Panda Express" , "Olive Garden"];
        for(let i = 0; i < restArr.length; i++) {
            option = document.createElement("option");
            optionText = document.createTextNode(restArr[i]);
            option.append(optionText);
            option.setAttribute("value" , restArr[i]);
            restaurant.appendChild(option);
        }
    }

/****Dinner resturants */
    if(document.getElementById("meal").value == "Dinner")    {
        let restArr = ["BBQ Hut" , "Mc Donalds" , "Taco Bell" , "Vege Deli" , "Pizzeria" , "Panda Express" , "Olive Garden"];
        for(let i = 0; i < restArr.length; i++) {
            option = document.createElement("option");
            optionText = document.createTextNode(restArr[i]);
            option.append(optionText);
            option.setAttribute("value" , restArr[i]);
            restaurant.appendChild(option);
        }
    }
})

/*******show form 1*********/
document.getElementById("prevDivForm2").addEventListener("click" , ()=>{  

    m = document.getElementById("meal").value;
    form2.style.display = "none";
    form1.style.display = "block";
    form3.style.display = "none";
    form4.style.display = "none";
    info.style.display  = "none";
    document.getElementById("step1").style.background = "#2196f380";
    document.getElementById("step2").style.background = "none";
    document.getElementById("step3").style.background = "none";
    document.getElementById("step4").style.background = "none";
})

/********show form3******* */
document.getElementById("nextForm2").addEventListener("click" , ()=> {
    
    if(document.getElementById("restaurant").value == "")   {
        alert("This is required");
    }else {
        form3.style.display = "block";
        form1.style.display = "none";
        form2.style.display = "none";
        form4.style.display = "none";
        info.style.display  = "none";
        document.getElementById("step3").style.background = "#2196f380";
        document.getElementById("step1").style.background = "none";
        document.getElementById("step2").style.background = "none";
        document.getElementById("step4").style.background = "none";
    }
    let dish;
    dish = document.getElementById("select1");
    if(r) {
        if(r == document.getElementById("restaurant").value)    {
            return true; 
        }
        if(r != document.getElementById("restaurant").value)    {
            let count = +document.getElementsByClassName("dishesContainer")[0].lastElementChild.id.substr(7);
            for(let i = 1; i <= count; i++ ) {
                if(document.getElementById(`getInfo${i+1}`))  {
                    document.getElementById(`getInfo${i+1}`).remove();
                }else {
                    continue;
                }
            }     
            if(document.getElementById("getInfo1")==null)   {
                let getInfo1 = document.createElement("div");
                getInfo1.id = "getInfo1";
                let crossIcon1 = document.createElement("div");
                crossIcon1.id = "crossIcon1";
                crossIcon1.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
                getInfo1.append(crossIcon1);
                let label = document.createElement("label");
                label.setAttribute("for" , "dish");
                label.innerHTML = "Please Select a Dish";
                getInfo1.append(label);
                let select = document.createElement("select");
                select.setAttribute("name" , "dish");
                select.id = "select1";
                getInfo1.append(select);
                let label2 = document.createElement("label");
                label2.setAttribute("for" , "servings");
                label2.innerHTML = "Please Enter number of servings";
                getInfo1.append(label2);
                let input = document.createElement("input");
                input.setAttribute("type" , "number");
                input.setAttribute("min" , "1");
                input.setAttribute("max" , "100");
                input.setAttribute("value" , "1");
                input.id = "input1";
                getInfo1.append(input);
                document.getElementsByClassName("dishesContainer")[0].append(getInfo1);
                dish = document.getElementById("select1");
            }
        }
    }
    document.getElementById("input1").value = 1;
    dish.innerHTML = "";
    let option,optionText;
    option = document.createElement("option");
    optionText = document.createTextNode("---");
    option.append(optionText);
    option.setAttribute("value" , "");
    dish.appendChild(option);

    if(document.getElementById("meal").value == "Breakfast") {
        if(document.getElementById("restaurant").value == "Mc Donalds") {
            option = document.createElement("option");
            optionText = document.createTextNode("Egg Muffin");
            option.append(optionText);
            option.setAttribute("value" , "Egg Muffin");
            dish.appendChild(option);
        }else if(document.getElementById("restaurant").value == "Vege Deli")   {
            dishArr = ["Coleslaw Sandwich" , "Grilled Sandwich"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Olive Garden"){
            option = document.createElement("option");
            optionText = document.createTextNode("Garlic Bread");
            option.append(optionText);
            option.setAttribute("value" , "Garlic Bread");
            dish.appendChild(option);
        }

    }else if(document.getElementById("meal").value == "Lunch") {
        if(document.getElementById("restaurant").value == "Mc Donalds")   {
            dishArr = ["Chicken Burger" , "Ham Burger" , "Cheese Burger" , "Fries"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Taco Bell")   {
            dishArr = ["Burrito" , "Tacos" , "Quesadilla"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Vege Deli")   {
            dishArr = ["Vegan Bento" , "Veg Salad" , "Fruit Salad" , "Corn Soup" , "Tomato Soup" , "Minestrone Soup"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Pizzeria")   {
            dishArr = ["Pepperoni Pizza" , "Hawaiian Pizza" , "Seafood Pizza" , "Deep Dish Pizza"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Panda Express")   {
            dishArr = ["Wontons" , "Kung Pao" , "Mapo Tofu" , "Chow Mein"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Olive Garden")   {
            dishArr = ["Fettucine Pasta" , "Rigatoni Spaghetti" , "Ravioli" , "Garlic Bread"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }
    }else if(document.getElementById("meal").value == "Dinner") {
        if(document.getElementById("restaurant").value == "Mc Donalds")   {
            dishArr = ["Chicken Burger" , "Ham Burger" , "Cheese Burger" , "Fries"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Taco Bell")   {
            dishArr = ["Burrito" , "Tacos" , "Quesadilla"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Vege Deli")   {
            dishArr = ["Veg Salad" , "Fruit Salad" , "Corn Soup" , "Tomato Soup" , "Minestrone Soup"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Pizzeria")   {
            dishArr = ["Pepperoni Pizza" , "Hawaiian Pizza" , "Seafood Pizza" , "Deep Dish Pizza"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Panda Express")   {
            dishArr = ["Wontons" , "Kung Pao" , "Mapo Tofu" , "Chow Mein"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Olive Garden")   {
            dishArr = ["Fettucine Pasta" , "Rigatoni Spaghetti" , "Ravioli" , "Garlic Bread"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "BBQ Hut")   {
            dishArr = ["Steak" , "Yakitori" , "Nankotsu" , "Piman"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }
    }
})

/**********show form2***************/
document.getElementById("prevForm3").addEventListener("click" , ()=>{
    r = document.getElementById("restaurant").value;
    form2.style.display = "block";
    form1.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    info.style.display  = "none";
    document.getElementById("step2").style.background = "#2196f380";
    document.getElementById("step1").style.background = "none";
    document.getElementById("step3").style.background = "none";
    document.getElementById("step4").style.background = "none";
})

document.getElementById(`select1`).addEventListener("change" , ()=>{
    let val = document.getElementById(`select1`).value;
    disable(val , `select1`);
})

/******add More dishes*****************/
document.getElementById("addMore").addEventListener("click" , () => {
    
    let arr = [],selItem = [];
    let count = document.getElementsByClassName("dishesContainer")[0].childElementCount;
    let lastChild = document.getElementsByClassName("dishesContainer")[0].lastElementChild.id;
    let lastChildId = +lastChild.substr(7);

    for(let i = 1; i <= lastChildId; i++)  {
        if(document.getElementById(`select${i}`))   {
            if(document.getElementById(`select${lastChildId}`).value == "") {
                alert("This is required");
                return false;
            }
        }else {
            continue;
        }
    }

    for(let i = 1; i <= lastChildId; i++)   {
        if(document.getElementById(`input${i}`))  {
            if(document.getElementById(`input${i}`).value > 100)    {
                alert("Maximum servings you can enter is 100");
                return false;
            }
        }else {
            continue;
        }
    }
    

    for(let i = 1; i <= lastChildId; i++) {
        if(document.getElementById(`select${i}`)) {
            let val = document.getElementById(`select${i}`).value;
            selItem.push(val);
        }else {
            continue;
        }
    }

    for(let i = 0; i < dishArr.length; i++) {
        arr.push(dishArr[i]);
    }
    
    for(let i = 0; i < selItem.length; i++)   {
        for(let j = 0; j < dishArr.length; j++)  {
            if(selItem[i] == arr[j])  {
                arr.splice(j,1);
            }
        }
    }

    
    if(arr.length != 0)  {

        let select = document.createElement("select");
        select.id = `select${lastChildId+1}`;
        select.style.marginLeft = 18 + "px";

        let input = document.createElement("input");
        input.setAttribute("type" , "number");
        input.setAttribute("min" , "1");
        input.setAttribute("max" , "100");
        input.setAttribute("value" , 1);
        input.id = `input${lastChildId+1}`;
        input.style.display = "inline-block";
        input.style.marginLeft = 90 + "px";
        input.style.width = 40 + "px";

        let crossIcon = document.createElement("div");
        crossIcon.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
        crossIcon.id = `crossIcon${lastChildId+1}`;
        crossIcon.style.display = "inline-block";
        crossIcon.style.marginLeft = -15 + "px";
        
    
        let selectParent = document.createElement("div");
        selectParent.id = `getInfo${lastChildId+1}`;
        selectParent.style.padding = 15 + "px";
    
        document.getElementsByClassName("dishesContainer")[0].append(selectParent);
        let option = document.createElement("option");
        let optionText = document.createTextNode("---");
        option.append(optionText);
        option.setAttribute("value" , "");
        select.append(option);
        for(let i = 0; i < arr.length; i++)  {
            option = document.createElement("option");
            optionText = document.createTextNode(arr[i]);
            option.append(optionText);
            option.setAttribute("value" , arr[i]);
            select.append(option);
        }
        selectParent.append(crossIcon);
        selectParent.append(select);
        selectParent.append(input);

        document.getElementById(`select${lastChildId+1}`).addEventListener("change" , ()=>{
            disable(document.getElementById(`select${lastChildId+1}`).value , `select${lastChildId+1}`);
        })

    }else {
        alert("Oops, No more dishes");
    }
    
    for(let i = 1; i <= lastChildId; i++) {
        if(document.getElementById(`crossIcon${i}`))   {
            document.getElementById(`crossIcon${i}`).addEventListener("click" , (e) => {
                let p = +e.target.parentNode.id.substr(9);
                let selValue = document.getElementById(`select${p}`).value;
                document.getElementById(`getInfo${p}`).remove();
                fun(selValue);
            });
        }else {
            continue;
        }
    }
});


function fun(p)  {
    let lastChild = document.getElementsByClassName("dishesContainer")[0].lastElementChild.id;
    let lastChildId = +lastChild.substr(7);
    let option = document.createElement("option");
    let optionText = document.createTextNode(p);
    option.append(optionText);
    option.setAttribute("value" , p);
    for(let i = 1; i <= lastChildId; i++)   {
        if(document.getElementById(`select${i}`))   {
            document.getElementById(`select${i}`).appendChild(option);
        }else {
                continue;
        }
    }
    
}

function disable(val , idd)  {
    let lastChild = document.getElementsByClassName("dishesContainer")[0].lastElementChild.id;
    let lastChildId = +lastChild.substr(7);
    let arr = dishArr;
    
    for(let i = 1; i <= lastChildId; i++)   {
        if(document.getElementById(`select${i}`))   {
            let len = document.getElementById(`select${i}`).length;
            if((`select${i}`) != idd){
                for(let k = 0; k < len; k++) {
                    if(document.getElementById(`select${i}`)[k].value == val)  {
                        document.getElementById(`select${i}`)[k].disabled = true;
                        
                    }
                }
           }
        }else {
            continue;
        }
    }
}
/************reviw info**********************/
document.getElementById("nextForm3").addEventListener("click" , ()=>{

    let lastChild = document.getElementsByClassName("dishesContainer")[0].lastElementChild.id;
    let lastChildId = +lastChild.substr(7);
    let count = document.getElementsByClassName("dishesContainer")[0].childElementCount;

    for(let i = 1; i <= lastChildId; i++)   {
        if(document.getElementById(`input${i}`))  {
            if(document.getElementById(`input${i}`).value > 100)    {
                alert("Maximum servings you can enter is 100");
                return false;
            }
        }else {
            continue;
        }
    }
    
    for(let i = 1; i <= lastChildId; i++)   {
        if(document.getElementById(`select${i}`))  {
            if(document.getElementById(`select${i}`).value == "")   { 
            alert("This is required");
            return false;
            }
        }else {
            continue;
        }
    }

    form4.style.display = "block";
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    info.style.display  = "none";
    document.getElementById("step4").style.background = "#2196f380";
    document.getElementById("step1").style.background = "none";
    document.getElementById("step2").style.background = "none";
    document.getElementById("step3").style.background = "none";

    document.getElementById("selctMeal").innerHTML = document.getElementById("meal").value;
    document.getElementById("selctPeople").innerHTML = document.getElementById("people").value;
    document.getElementById("selctRestaurant").innerHTML = document.getElementById("restaurant").value;

    let dishesInfo = document.getElementsByClassName("dishes")[0];
    let createPara;
    dishesInfo.innerHTML = "";
    for(let i = 1; i <= lastChildId; i++)   {
        if(document.getElementById(`select${i}`))   {
            createPara = document.createElement("p");
            createPara.id = `p${i}`;
            dishesInfo.append(createPara);
            document.getElementById(`p${i}`).innerHTML = `${document.getElementById(`select${i}`).value} - ${document.getElementById(`input${i}`).value}`;
        }else {
            continue;
        }
    }
});

/*************cancel order*****************/
document.getElementById("cancelOrder").addEventListener("click" , ()=> {
    alert("Order is cancelled successfully!");
    window.open("index.html");
})


/*************************show form 3*************************/
document.getElementById("prevReviewData").addEventListener("click" , ()=>{
    form3.style.display = "block";
    form1.style.display = "none";
    form2.style.display = "none";
    form4.style.display = "none";
    info.style.display = "none";
    document.getElementById("step3").style.background = "#2196f380";
    document.getElementById("step1").style.background = "none";
    document.getElementById("step2").style.background = "none";
    document.getElementById("step4").style.background = "none";
})

/************************info about order********************/
document.getElementById("submit").addEventListener("click" , ()=>{
    info.style.display = "block";
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    document.getElementById("step3").style.background = "#2196f380";
    document.getElementById("step1").style.background = "#2196f380";
    document.getElementById("step2").style.background = "#2196f380";
    document.getElementById("step4").style.background = "#2196f380";
})

