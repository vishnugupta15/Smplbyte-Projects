// To Do List JavaScript Code 

const inputData = document.querySelector(".input input");
const addBtn = document.querySelector(".input button");
const ToDoList = document.querySelector(".ToDoList");
const deleteAllData = document.querySelector("#red-btn");

showData();

// Function Of Add Data 

addBtn.onclick = () => {
    let userinput = inputData.value;
    if(userinput.trim() != 0){
        let storage = localStorage.getItem("To Do List");
        if (storage == null) {
            arr = [];
        } else {
            arr = JSON.parse(storage);
        }                                                                           
        arr.push(userinput);
        localStorage.setItem("To Do List", JSON.stringify(arr));
        successAlert("Task Added Suceesfully",1000,"success");
    }
    else{
        errorAlert("Enter Some Text / Value", 1000, "error");
    }
    showData();
}

// Function Of Show Data 

function showData() {
    let storage = localStorage.getItem("To Do List");
    if (storage == null) {
        arr = [];
    } else {
        arr = JSON.parse(storage);
    }
    var count = document.querySelector(".count");
    count.textContent = arr.length;
    let newData = "";
    arr.forEach((element, idNo) => {
        newData += `<li> ${element} <span onclick=deleteData(${idNo}); ><i class="fa fa-trash-o"></i></span></li>`;
    }); 

    ToDoList.innerHTML = newData;
    inputData.value = "";
}

// Function Of Delete Data 

function deleteData(idNo) {
    let storage = localStorage.getItem("To Do List");
    arr = JSON.parse(storage);
    arr.splice(idNo,1);
    localStorage.setItem("To Do List", JSON.stringify(arr));
    showData();
    deleteAlert("One Task Completed",1000,"delete-error");
}

// Function Of Delete All Data 

deleteAllData.onclick = () => {
    arr = [];
    localStorage.setItem("To Do List", JSON.stringify(arr));
    showData();
    deleteAlert("All Task Completed",1000,"delete-error");
}


//////////////////////// Alert JavaScript Code  ///////////////////////////////

function successAlert(msg, delay, feel) {
    $(".alert-modal").append(
        '<div class="alert non-animated '+ feel +'"><i class = "fa fa-check feel icon-notification"></i><span>'+ msg +'</span><i class = "fa fa-times icon-delete"></i></div>'
        );
    $(".non-animated").animate({left:"0"})
    $(".non-animated").removeClass(".non-animated").delay(10000).fadeOut(function(){
        $(this).remove();
    });
    if($(".alert-modal .alert").length > 4){
        $(".alert-modal .alert").eq(0).remove();
    }
}

function errorAlert(msg, delay, feel) {
    $(".alert-modal").append(
        '<div class="alert non-animated '+ feel +'"><i class = "fa fa-exclamation-circle feel icon-notification"></i><span>'+ msg +'</span><i class = "fa fa-times icon-delete"></i></div>'
        );
    $(".non-animated").animate({left:"0"})
    $(".non-animated").removeClass(".non-animated").delay(10000).fadeOut(function(){
        $(this).remove();
    });
    if($(".alert-modal .alert").length > 4){
        $(".alert-modal .alert").eq(0).remove();
    }
}

function deleteAlert(msg, delay, feel) {
    $(".alert-modal").append(
        '<div class="alert non-animated '+ feel +'"><i class = "fa fa-check feel icon-notification"></i><span>'+ msg +'</span><i class = "fa fa-times icon-delete"></i></div>'
        );
    $(".non-animated").animate({left:"0"})
    $(".non-animated").removeClass(".non-animated").delay(10000).fadeOut(function(){
        $(this).remove();
    });
    if($(".alert-modal .alert").length > 4){
        $(".alert-modal .alert").eq(0).remove();
    }
}

$(document).on("click",".alert-modal .alert" , function(){
    $(this).stop(false , true);
});