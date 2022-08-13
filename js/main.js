document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const stateName = document.querySelector('input').value
    try{
        const response = await fetch(`api/${stateName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName
    }catch(error){
        console.log(error)
    }
}