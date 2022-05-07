
// // ------------sorting--------->

let sorting=()=>{
    
    let select=document.getElementById("featured").value;
    // console.log(select)
    if(select==="LH"){
        men.sort((a,b)=>(+a.price)-(+b.price))
        // console.log(men)
        displayData(men)
    }
    if(select==="HL"){
        men.sort((a,b)=>(+b.price)-(+a.price))
        displayData(men)
    }
    
    }

    export {sorting}




