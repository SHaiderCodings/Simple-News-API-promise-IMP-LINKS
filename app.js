//promise holds two para error and sucess
// var mypromise = new Promise((resolve,reject)=>{
// if(true){
// console.log(resolve);
// }
// else{
// console.log(reject);
// }
// })
// console.log(mypromise);

// let mypromise = new Promise((resolve,reject)=>{
//     // if(true){
//     // console.log(resolve);
//     // }
//     // else{
//     // console.log(reject);
//     // }
//     // })
//     // console.log(mypromise);


//--fetch---//
// USE GET DATA FROM SERVER OR API

// let  url="https://newsapi.org/v2/everything?q=bitcoin&from=2018-10-10&sortBy=publishedAt&apiKey=a059d909f5fd4da7817ce1d686e0ae6d"
// fetch(url)
// .then((sucess)=>{ 
//     // console.log(sucess)
//     return sucess.json()
// })
// .then((data)=>{
//     console.log(data) //for jason for unlocking data 
//                       //success data canbe any variable 
// })



// .catch((error)=>{ 
//     console.log(error)
// }) 

//THEN IS SUCESSS(RESOLVE)
//catch IS UNSUCESSS(Reject/eror)

var newDATA=[];
var div=document.getElementById('news');
var content=document.getElementById('content');

let  url="https://newsapi.org/v2/everything?q=bitcoin&from=2018-12-30&sortBy=publishedAt&apiKey=a059d909f5fd4da7817ce1d686e0ae6d";
// https://newsapi.org/v2/everything?q=bitcoin&from=2018-12-30&sortBy=publishedAt&apiKey=API_KEY

fetch(url)
.then((sucess)=>{ 
    // console.log(sucess)
    return sucess.json()
})
.then((data)=>{
    console.log(data.articles)
    var articles=data.articles;
    for(var key in articles)
    {
        div.innerHTML+="<h3>"+articles[key].title +"</h3>"+"<p>"+ articles[key].description+"</p>"+"<p>"+ articles[key].publishedAt+"</p>";
    }


   


    // newDATA.push(data.articles);
                    //saving only articles in array
                    //for jason for unlocking data 
                      //success data canbe any variable 
})



.catch((error)=>{ 
    console.log(error)
}) 