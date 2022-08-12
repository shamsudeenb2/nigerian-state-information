const express = require('express')
const cors = require('cors')
const app= express()

app.use(cors())
const PORT = 8000

const states ={
    'abia':{
        'Capital':'Umuahia',
        'Slogan':'God"s Own State'
    },
    'adamawa':{
        'Capital':'yola',
        'Slogan':'Land of Beauty'
    },
    'akwa ibom':{
        'Capital':'uyo',
        'Slogan':'Land of Promise'
    },
    'anambra':{
        'Capital':'Awka',
        'Slogan':'Light of the Nation'
    },
    'bauchi':{
        'Capital':'Bauchi',
        'Slogan':'Pearl of Tourism'
    },
    'bayalsa':{
        'Capital':'Yenagoa',
        'Slogan':'Light of the Nation'
    },
    'benue':{
        'Capital':'Makurdi',
        'Slogan':'Food Basket of the Nation'
    },
    'cross river':{
        'Capital':'Calaba',
        'Slogan':'The People"s Paradise'
    },
    'delta':{
        'Capital':'Asaba',
        'Slogan':'The Big Heart'
    },
    'ebonyi':{
        'Capital':'Abakaliki',
        'Slogan':'Salt of the Nation'
    },
    'edo':{
        'Capital':'Benin City',
        'Slogan':'Heart Beat of Nigeria'
    }
}

app.get('/', (req , res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:stateName', (req , res)=>{
    const stateName = req.params.stateName.toLowerCase()

    if(states[stateName]){
        res.json(states[stateName])
    }else{
        res.send(`There are no state with such name ${stateName}`)
    }
})

app.listen(process.env.PORT || PORT ,()=>{
    console.log(`app runing on port ${PORT} `)
})