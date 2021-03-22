const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')


const generateTemplate = (todo)=>{
    
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todo}</span>
                    <i class="far fa-trash-alt delete"></i>
                </li>`
    list.innerHTML += html
    
}




addForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const todo = addForm.add.value.toLowerCase().trim();
    // trim the spaces at the beginning

    if(todo.length){ //todo.length will give the length 
        generateTemplate(todo)
        addForm.reset()
    }
    

})


// delete the todos 
list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})

const filterTodo = (term)=>{
    Array.from(list.children)
            .filter((todo)=>{
                return !todo.textContent.includes(term)
            })
            .forEach((todo)=>{
                todo.classList.add('filtered')
            })
    Array.from(list.children)
            .filter((todo)=>{
                return todo.textContent.includes(term)
            })
            .forEach((todo)=>{
                todo.classList.remove('filtered')
            })
}

search.addEventListener('keyup',()=>{
// keydown - The key is on its way down.
// keypress - The key is pressed down.
// keyup - The key is released
    const term = search.value.trim().toLowerCase()
    filterTodo(term)
})
