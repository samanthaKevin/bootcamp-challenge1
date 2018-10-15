function getDate(){
    document.getElementById('now').innerHTML = Date();
}
function attendant_admin(){
    var loginoption = document.getElementById('loginoption').value;
    if(loginoption == 'admin'){
        document.getElementById('login').href = 'adminhome.html';
    }
    else if(loginoption == 'attendant'){
        document.getElementById('login').href = 'home.html';
    }
    else{
        document.getElementById('login').href = '';
    }
    
}
function addtocart1(){
    var number = parseInt(document.getElementById('qty1').innerHTML);
    var cartnumber = parseInt(document.getElementById('cartnumber').innerHTML);

    if(number>1){
        document.getElementById('cartnumber').innerHTML = cartnumber + 1;
        document.getElementById('qty1').innerHTML = number - 1;
    }
    else if(number == 1){
        document.getElementById('cartnumber').innerHTML = cartnumber + 1;
        document.getElementById('qty1').innerHTML = number - 1;
        document.getElementById('addbtn1').style = 'background-color:grey';
        document.getElementById('addbtn1').innerHTML = 'Out of stock';
    }
    else{
        document.getElementById('addbtn1').style = 'background-color:grey';
        document.getElementById('addbtn1').innerHTML = 'Out of stock';
    }
    
}
function addtocart2(){
    var number = parseInt(document.getElementById('qty2').innerHTML);
    var cartnumber = parseInt(document.getElementById('cartnumber').innerHTML);

    if(number>1){
        document.getElementById('cartnumber').innerHTML = cartnumber + 1;
        document.getElementById('qty2').innerHTML = number - 1;
    }
    else if(number == 1){
        document.getElementById('cartnumber').innerHTML = cartnumber + 1;
        document.getElementById('qty2').innerHTML = number - 1;
        document.getElementById('addbtn2').style = 'background-color:grey';
        document.getElementById('addbtn2').innerHTML = 'Out of stock';
    }
    else{
        document.getElementById('addbtn2').style = 'background-color:grey';
        document.getElementById('addbtn2').innerHTML = 'Out of stock';
    }
    
}
function addtocart3(){
    var number = parseInt(document.getElementById('qty3').innerHTML);
    var cartnumber = parseInt(document.getElementById('cartnumber').innerHTML);

    if(number>1){
        document.getElementById('cartnumber').innerHTML = cartnumber + 1;
        document.getElementById('qty3').innerHTML = number - 1;
    }
    else if(number == 1){
        document.getElementById('cartnumber').innerHTML = cartnumber + 1;
        document.getElementById('qty3').innerHTML = number - 1;
        document.getElementById('addbtn3').style = 'background-color:grey';
        document.getElementById('addbtn3').innerHTML = 'Out of stock';
    }
    else{
        document.getElementById('addbtn3').style = 'background-color:grey';
        document.getElementById('addbtn3').innerHTML = 'Out of stock';
    }
    
}
function deleteitem1(){
    document.getElementById('item1').hidden = 'True';
}
function deleteitem2(){
    document.getElementById('item2').hidden = 'True';
}
function deleteitem3(){
    document.getElementById('item3').hidden = 'True';
}
function makeadmin1(){
    document.getElementById('makeadmin1').style = 'background-color:grey';
    document.getElementById('makeadmin1').innerHTML = 'Admin';
}
function makeadmin2(){
    document.getElementById('makeadmin2').style = 'background-color:grey';
    document.getElementById('makeadmin2').innerHTML = 'Admin';
}
