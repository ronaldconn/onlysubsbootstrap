const search = document.querySelectorAll('.fa-solid')
const addButton = document.querySelectorAll('.fav')

Array.from(addButton).forEach((el)=>{
    el.addEventListener('click', wrenchClick)
})

async function wrenchClick(){

    const whichButton = this
    console.log("wrenchClick() called")
    

    try{
        
        await fetch('/favorites', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({

                'vin': whichButton.parentNode.parentNode.parentNode.children[6].innerText,
                'row': whichButton.parentNode.parentNode.parentNode.children[5].innerText,
                'location': whichButton.parentNode.parentNode.parentNode.children[4].innerText,
                'date': whichButton.parentNode.parentNode.parentNode.children[3].innerText,
                'year': whichButton.parentNode.parentNode.parentNode.children[2].innerText,
                'make': whichButton.parentNode.parentNode.parentNode.children[1].innerText,
                'img': whichButton.parentNode.parentNode.parentNode.children[0].firstChild.childNodes[0].alt,
                
            }) 
        }).then(
        console.log("Favorite added")
        )
    
       

    }catch(err){
        console.log(err)
    }
}