// heading
//paragraph
//input box
//button
//message
//------------------------------------variable---------------------
const my_number: any = document.querySelector(".display")
const btn = document.querySelector(".btn")
const para: any = document.querySelector(".msg_para")
let random_num = Math.floor(Math.random()*5 +1)

//--------------------------function------------------------------

btn?.addEventListener("click", () => {
    if(my_number.value > 0 && my_number.value < 6){
        if (my_number.value == random_num) {
            para.style.color = "green"
            para.textContent = "Number Matched!"
            my_number.value = ""
           
        }else{
            para.style.color = "red"
            para.textContent = "Try Again!"
            my_number.value = ""
        }

        random_num = Math.floor(Math.random() *5 +1)   
    
    }else if(my_number.value === ""){
        para.style.color = "red"
        para.textContent = "No Number to check ❓"
        my_number.value = ""
    }else{
        para.style.color = "red"
        para.textContent = "Number out of range⚠️"
    }    
    

})













