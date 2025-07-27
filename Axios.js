//First we import the axios library 
// import axios from "axios";
let btn = document.querySelector('button');
btn.addEventListener("click", async() =>{
    let fact = await getFacts();
    console.log(fact)

    let p = document.querySelector('#fact');
    p.innerText = fact;
})




//Axios is popular javascript library it is used for make http request from the browser and the node js environment. it is comonally used for fetch the data and submit the form data:
//So Axios is a library 
//first we can install our axios from axios website command is - npm install axios 
//then we can import axios in our js file using import axios from 'axios';
let url = "https://catfact.ninja/fact";
//axios have two types 
//1. axios.get(); - to send the data 
//2. axios.post(); - to post the data 
async function getFacts(){
   try {
    let res = await axios.get(url)
    //we don't need to conward json data  url in axios 
    let data = res.data;
    return data.fact
   } 
   catch (error) {
    return "Error:", error
   }
}

getFacts()