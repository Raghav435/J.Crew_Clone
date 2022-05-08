import {navbar} from "../components/navbar.js"
document.getElementById("body").innerHTML=navbar()

// let q="Sign In"
// localStorage.setItem("sign",JSON.stringify("Sign In"))


let dltfromstorage=()=>{
    let dl=JSON.parse(localStorage.getItem("sign"));
    dl=null;
    localStorage.setItem("sign",JSON.stringify(dl))
    // localStorage.clear()


    window.location.href="index.html"
}

document.getElementById("dlt").addEventListener("click",dltfromstorage)




let query=JSON.parse(localStorage.getItem("sign"))
console.log(query)
if(query=="New Account"){
    document.getElementById("navacc").innerHTML="New Account";
}else{
    document.getElementById("navacc").innerHTML="Sign In"
}


document.getElementById("navbarsearch").addEventListener("keypress", function(event){
    let x=document.getElementById("navbarsearch").value
    if(event.key==="Enter"){
    
        if(x=="Mens"||x=="mens"||x=="Men"||x=="men"){
            window.location.href="menpage.html"
        }else if(x=="Women"||x=="women"||x=="Womens"||x=="womens"){
            window.location.href="womenpage.html"
        }else if(x=="kid"||x=="kids"||x=="Kid"||x=="Kids"){
            window.location.href="kidspage.html"
        }
    }

})

let gotoindex=()=>{
    window.location.href="index.html"

}
document.getElementById("navimg").addEventListener("click",gotoindex);


let myNew=()=>{
    let x=document.getElementById("new")
    // x.style.display="block"
    x.style.display="flex"

    

    
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
    document.getElementById("acc").style.display="none"
    
    
    
    

}
let hideNew=()=>{
   
    let x=document.getElementById("new")
    x.style.display="none"
    
}




let mywomen=()=>{
    
    document.getElementById("men").style.display="none"
    document.getElementById("new").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
    document.getElementById("acc").style.display="none"
    let x=document.getElementById("women")
    // x.style.display="block"
    x.style.display="flex"

}
let hidewomen=()=>{
    let x=document.getElementById("women")
    x.style.display="none"
}





let mymen=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
    document.getElementById("acc").style.display="none"
    let x=document.getElementById("men")
    // x.style.display="block"
    x.style.display="flex"

}
let hidemen=()=>{

    let x=document.getElementById("men")
    x.style.display="none"
}

let mykids=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
    document.getElementById("acc").style.display="none"
    let x=document.getElementById("kids")
    // x.style.display="block"
    x.style.display="flex"
}

let hidekids=()=>{
    let x=document.getElementById("kids")
    x.style.display="none"
}

let myswim=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
    document.getElementById("acc").style.display="none"
    let x=document.getElementById("swim")
    // x.style.display="block"
    x.style.display="flex"
}

let hideswim=()=>{
    let x=document.getElementById("swim")
    x.style.display="none"
}

let mycashmere=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
    document.getElementById("acc").style.display="none"
    let x=document.getElementById("cashmere")
    // x.style.display="block"
    x.style.display="flex"
}

let hidecashmere=()=>{
    let x=document.getElementById("cashmere")
    x.style.display="none"
}


let myhome=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
    document.getElementById("acc").style.display="none"

    let x=document.getElementById("home")
    // x.style.display="block"
    x.style.display="flex"
}

let hidehome=()=>{
    let x=document.getElementById("home")
    x.style.display="none"
}



let mystories=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("sale").style.display="none"
    document.getElementById("acc").style.display="none"
    let x=document.getElementById("stories")
    // x.style.display="block"
    x.style.display="flex"
}

let hidestories=()=>{
    let x=document.getElementById("stories")
    x.style.display="none"
}

let mysale=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("acc").style.display="none"
    let x=document.getElementById("sale")
    // x.style.display="block"
    x.style.display="flex"
}

let hidesale=()=>{
    let x=document.getElementById("sale")
    x.style.display="none"
}

let myacc=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
    let x=document.getElementById("acc")
    // x.style.display="block"
    x.style.display="flex"
}

let hideacc=()=>{
    let x=document.getElementById("acc")
    x.style.display="none"
}






let hidediv=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
    document.getElementById("acc").style.display="none"
}


document.getElementById("navnew").addEventListener("mouseover",myNew);
document.getElementById("new").addEventListener("mouseleave",hideNew);

document.getElementById("navwomen").addEventListener("mouseover",mywomen);
document.getElementById("women").addEventListener("mouseleave",hidewomen);

document.getElementById("navmen").addEventListener("mouseover",mymen);
document.getElementById("men").addEventListener("mouseleave",hidemen);


document.getElementById("navkids").addEventListener("mouseover",mykids);
document.getElementById("kids").addEventListener("mouseleave",hidekids);

document.getElementById("navswim").addEventListener("mouseover",myswim);
document.getElementById("swim").addEventListener("mouseleave",hideswim);

document.getElementById("navcashmere").addEventListener("mouseover",mycashmere);
document.getElementById("cashmere").addEventListener("mouseleave",hidecashmere);


document.getElementById("navhome").addEventListener("mouseover",myhome);
document.getElementById("home").addEventListener("mouseleave",hidehome);


document.getElementById("navstories").addEventListener("mouseover",mystories);
document.getElementById("stories").addEventListener("mouseleave",hidestories);

document.getElementById("navsale").addEventListener("mouseover",mysale);
document.getElementById("sale").addEventListener("mouseleave",hidesale);

let it=document.getElementById("navacc").innerText
if(it=="New Account"){
    document.getElementById("navacc").addEventListener("mouseover",myacc);
    document.getElementById("acc").addEventListener("mouseleave",hideacc);
}



document.getElementById("navimg").addEventListener("mouseover",hidediv);
document.getElementById("navsearch").addEventListener("mouseover",hidediv);



let c=JSON.parse(localStorage.getItem("cart"))
document.getElementById("navlen").innerText=c.length;
if(c.length>0){
    document.getElementById("navlen").style.backgroundColor="rgb(1,97,255)"
}





