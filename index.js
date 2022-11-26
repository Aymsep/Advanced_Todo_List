const form = document.querySelector(".form-container");
const item_state = document.querySelector(".state_style")
const input_field = document.getElementById("field-text")
const add_btn = document.getElementById("submit-btn")
const add = document.querySelector('.items_added')
const clear_btn = document.getElementById("clear-items")




















let el_id=''
let editel;
let i = 0
let flag = false




function display_added_item(value){
    const inside = document.querySelectorAll('.inside')
    if(inside.length > 5 ){
        display_item_state("Max List Item Is 6", "max")
        default_para()
 }
else if(value && !flag ){
    
        display_item_state("item added","added")
        input_field.value = ""
        const el = document.createElement("div")
        el.classList.add("inside")
        el.setAttribute("data-id", `item-${i}`)
        el_id = `item=${i}`
        el.innerHTML = `
        <div class="items_added">
        <p id="item">${value}</p>
        </div>
        
        <div class="button">
        <a href="#">
        <img src="./images/edit.png" class="edit-item">
        </a>
        <a href="#" >
        <img src="./images/x.png" class="delete-item">
        </a>
        </div>
        `
        i++;
        form.insertBefore(el, clear_btn.parentNode)
        item_bg_color(el)
        const edit_btn = document.querySelectorAll(".edit-item")
        const delete_btn = document.querySelectorAll(".delete-item")
        clear_btn.style.visibility="visible"
        add_btn.textContent = 'submit'

        const ed = edit_btn.forEach(item =>{
            item.addEventListener('click', edt)
        })

        const dl = delete_btn.forEach(item =>{
            item.addEventListener("click",dlt)
        })
    }

    else if(value && flag){
        
        editel.innerHTML = value
        display_item_state("item changed", "added")
        default_para()
        
        
    }

 
    else{
        console.log("need to type item")
        display_item_state("add item to the field","danger")
    }
    
}


function edt(ed){
    editel = ed.currentTarget.parentElement.parentElement.previousElementSibling.children[0]
    input_field.value = editel.innerHTML;
    add_btn.textContent = 'EDIT'
    flag = true
 }

function dlt(dl){
    const  ele = dl.currentTarget.parentElement.parentElement.parentElement
    form.removeChild(ele)
    display_item_state("item removed","danger")
    if(form.children.length === 4){
        clearbutton()
    }
}





form.addEventListener("submit", e => {
    e.preventDefault()
    // let value = input_field.value.trim()
    //     if(t){
        //         edit_btn.addEventListener("click", test =>{
    
            //             console.log('second t '+t)
            //         })
            //     }
            //     localStorage.setItem(`item-${i}`,value)
            //     console.log('first t '+t)
            display_added_item(input_field.value.trim())
            default_para()
        } )
        




function display_item_state(value,state) {
    item_state.textContent = value
    item_state.classList.add(`state_${state}`)
    setTimeout(()=>{
        item_state.style.textContent = ""
        item_state.classList.remove(`state_${state}`)
    },1500)
}


clear_btn.addEventListener('click',clearbutton)

function clearbutton(){
    const clr = document.querySelectorAll(".inside")
    if (clr.length > 0) {
        clr.forEach(e =>{
            clear_btn.style.visibility="hidden"
            form.removeChild(e)
            display_item_state("list empty","danger")
        })
    }
    
       clear_btn.style.visibility="hidden"
       i = 0
       default_para()
}


function default_para(){
    flag = false
    input_field.value = ''
    add_btn.textContent = 'submit'
}


function item_bg_color(item){
    let hex_1 = Math.floor(Math.random()*16)
.toString(16)

// two number
let hex_2 = Math.floor(Math.random()*16)
.toString(16)

// two number
let hex_3 = Math.floor(Math.random()*16)
.toString(16)

if(hex_1.length == 1){

    hex_1 += '0'
}
// for var 2
if(hex_2.length == 1){

    hex_2 += '0'
}
// for var 3
if(hex_3.length == 1){

    hex_3 += '0'
}

item.style.backgroundColor = `#${hex_1+hex_2+hex_3}`

}