document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const stateName = document.querySelector('input').value
    try{
        const response = await fetch(`https://nigeria-state-infor-api.herokuapp.com/api/${stateName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#capital').innerText = data.Capital
        document.querySelector('#slogan').innerText = data.Slogan
        document.querySelector('#region').innerText = data.Slogan
        document.querySelector('#zone').innerText = data.Slogan
        document.querySelector('#area').innerText = data.Slogan
    }catch(error){
        console.log(error)
    }
}