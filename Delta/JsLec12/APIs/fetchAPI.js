let url = "https://catfact.ninja/fact ";
// fetch(url)
// .then((response)=> {
//     console.log(response);
//     return response.json();
// })

// .then((data) =>{
//     console.log(data);
//     console.log(data.fact);
//     return fetch(url);
// })

// .then((response)=> {
//     console.log(response);
//     return response.json();
// })

// .then((data) =>{
//     console.log(data);
//     console.log(data.fact);
// })

// .catch((err) => {
//     console.log("error", err);
// })

// SAME CONCEPT WITH ASYNC FUNCTION

 async function getFact() {

    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(res);
        console.log(data);

         let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(res2);
        console.log(data2);

    } catch(e){
        console.log("error: ", e);
    }
    
 }

 getFact();