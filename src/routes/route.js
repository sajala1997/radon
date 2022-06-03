const express = require('express');
const lodash = require('lodash');
const ChunkHandler = require('chunk-handler'); 
var ch = new ChunkHandler();


const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

//..

// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

// router.get('/hello', function (req, res) {

//     const arr= ["january","february","march","april","may","june","july","august","september","october","november","december"]
//     var result = ch.make(arr,3);
//     console.log(result)
//     res.send('My first ever api!')
    
// });


// router.get('/hello', function (req, res) {

//     const arr= [1,3,5,7,8,9,11,13,15,17]
//     console.log(lodash.tail(arr))
//     console.log(arr)
//     res.send('My first ever api!')
    
// });

// router.get('/hello', function (req, res) {

//     const arr= [1,3,5,7]
//     const arr1= [5,7,8,9]
//     const arr2=[11,13,15,17]
//     const arr3=[15,17,18,19]
//     const arr4=[1,5,6,7]
//     console.log(lodash.union(arr,arr1,arr2,arr3,arr4))
    
//     res.send('My first ever api!')
    
// });

// router.get('/hello', function (req, res) {

    
//     // console.log(lodash.fromPairs(["horror", "The shining"], ["drama", "titanic"],["thriller","Shutter island"],["fantasy","Pans Labyrinth"]))
//     const d=[['horror', 'the shining'], ['drama', 'titanic'],['thriller', 'shutter island'],['fantasy', 'harry potter']]
//     console.log(lodash.fromPairs(d))
//     res.send('My first ever api!')
    
// });


//1

router.get('/movies', function (req, res) {
    let movies = ['Forrest Gump','Shawshank redemption','pursuit of happyness','Good will Hunting']
    res.send(movies)

});

//2

router.get('/movies2/:indexNumber', function (req, res) {
    let movies2 = ['Forrest Gump','Shawshank redemption','pursuit of happyness','Good will Hunting']
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('movie name is '+req.params.indexNumber)
    res.send(movies2[req.params.indexNumber])

});

//3
router.get('/movies2/:indexNumber', function (req, res) {
    let movies2 = ['Forrest Gump','Shawshank redemption','pursuit of happyness','Good will Hunting']
    // console.log('The request objects is '+ JSON.stringify(req.params))
    // console.log('movie name is '+req.params.indexNumber)
    if (req.params.indexNumber < movies2.length)
    res.send(movies2[req.params.indexNumber])
    else
    res.send('error')

});

//4

router.get('/films', function (req, res) {
    // let movies2 = ['Forrest Gump','Shawshank redemption','pursuit of happyness','Good will Hunting']
    let films = [{id:1,name:"The shining"},{id:2,name:"Incendies"},{id:3,name:"Rang de Basanti"},{id:4,name:"Finding Nemo"}]
    console.log('The request objects is '+ JSON.stringify(req.params))
    res.send(films)
    

});

router.get('/films/:filmId', function (req, res) {
    
    let films = [{id:1,name:"The shining"},{id:2,name:"Incendies"},{id:3,name:"Rang de Basanti"},{id:4,name:"Finding Nemo"}]
    console.log('The request objects is '+ JSON.stringify(req.params))
    const d= req.params.filmId + 1
    if(req.params.filmId<films.length)
    res.send(films[req.params.filmId])
    else
    res.send('error')

    

    


});



//pritesh sir

router.get('/sol1', function (req, res) {
    // let movies2 = ['Forrest Gump','Shawshank redemption','pursuit of happyness','Good will Hunting']
    let arr = [1,2,3,5,6,7]
    let sum=0
        for(let i=0;i<arr.length;i++){
            
            sum=sum+arr[i]
        }
    
        let number= arr.pop()
        let missingNumber=((number*(number+1))/2)-sum
        res.send({data:missingNumber})
        

        
    
     console.log('The request objects is '+ JSON.stringify(req.params))
    //  res.send(result)
        // res.send(films)
    

});


router.get('/sol2', function (req, res) {
    // let movies2 = ['Forrest Gump','Shawshank redemption','pursuit of happyness','Good will Hunting']
    let arr = [33,34,35,37,38]
    let sum=0
    let a = arr.length
        for(let i=0;i<arr.length;i++){
            
            sum=sum+arr[i]
        }
        // res.send({data: sum})
    
        let lastNumber= arr.pop()
        let firstNumber=arr[0]
        
        console.log(a)
        let b= lastNumber+firstNumber
        let missingNumber= (((a+1)*b)/2) - sum
        res.send({data:missingNumber})
        

        
    
    //  console.log('The request objects is '+ JSON.stringify(req.params))
    //  res.send(result)
        // res.send(films)
    

});


router.post('/post-api', function (req, res) {
    let id= req.body.user
    let pwd= req.body.password
    console.log(id,pwd)
    console.log(req.body)
    res.send({msg:"hi"})
});

router.post('/post-api2', function (req, res) {
    let arr=[12,"functionup"]
    let ele=req.body.element
    arr.push(ele)
    
    res.send({msg:arr, status: true})
});

let players=[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
        "swimming"
        ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
            "soccer"
            ]
            },
            {
                "name": "lokesh",
                "dob": "1/1/1990",
                "gender": "male",
                "city": "mumbai",
                "sports": [
                "soccer"
                ]
                }
                                    
]

router.post('/player', function (req, res) {
    
    let ele=req.body
    let count =0
    for(let i=0;i<players.length;i++){
    if(players[i].name===req.body.name){
    count ++
    break
    }
    }
    
    if(count===0){
    players.push(ele)
    }
    res.send({msg:players})
    
});






// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })




module.exports = router;
// adding this comment for no reason