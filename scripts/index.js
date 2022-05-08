let arr=
[
    "https://www.jcrew.com/brand_creative/2022/202205-May/cc_newarrivals/2022may_0426_na_g_img0.jpg",
    "https://www.jcrew.com/brand_creative/2022/202205-May/cc_newarrivals/2022may_0426_na_g_img6.jpg",
    "https://www.jcrew.com/brand_creative/2022/202205-May/cc_newarrivals/2022may_0426_na_b_img0.jpg",
    "https://www.jcrew.com/brand_creative/2022/202205-May/cc_newarrivals/2022may_0426_na_b_img7.jpg"
    
]
let i=0;
let x=document.getElementById("land8")
let id=setInterval(() => {
    if(i==arr.length){
        i=0;
    }
    x.style.backgroundImage=`url(${arr[i]})`
    i++
}, 1000);



let show1=()=>{
    document.getElementById("spr61").style.display="block"
}

let hide1=()=>{
    document.getElementById("spr61").style.display="none"
}

let show2=()=>{
    document.getElementById("spr62").style.display="block"
}

let hide2=()=>{
    document.getElementById("spr62").style.display="none"
}

let show3=()=>{
    document.getElementById("spr63").style.display="block"
}

let hide3=()=>{
    document.getElementById("spr63").style.display="none"
}

let show4=()=>{
    document.getElementById("spr64").style.display="block"
}

let hide4=()=>{
    document.getElementById("spr64").style.display="none"
}


document.getElementById("pr6img1").addEventListener("mouseover",show1)
document.getElementById("pr6img1").addEventListener("mouseleave",hide1)

document.getElementById("pr6img2").addEventListener("mouseover",show2)
document.getElementById("pr6img2").addEventListener("mouseleave",hide2)

document.getElementById("pr6img3").addEventListener("mouseover",show3)
document.getElementById("pr6img3").addEventListener("mouseleave",hide3)

document.getElementById("pr6img4").addEventListener("mouseover",show4)
document.getElementById("pr6img4").addEventListener("mouseleave",hide4)



let gotowomen=()=>{
    window.location.href="womenpage.html"
}

let gotomen=()=>{
    window.location.href="menpage.html"
}

let gotokid=()=>{
    window.location.href="kidspage.html"
}


document.getElementById("pr41").addEventListener("click",gotowomen);
document.getElementById("pr42").addEventListener("click",gotomen);
document.getElementById("pr43").addEventListener("click",gotokid);
document.getElementById("pr44").addEventListener("click",gotokid);





let goright=()=>{
    document.getElementById("pr6img1").style.backgroundImage="url('https://www.jcrew.com/brand_creative/2022/202205-May/w_swim/2022may_0426_w_swim_img2.jpg')"
    document.getElementById("like1").innerText="579 Likes"

    document.getElementById("pr6img2").style.backgroundImage="url('https://www.jcrew.com/brand_creative/2022/202205-May/flyout/2022may_0506_flyouts_m_img0.jpg')"
    document.getElementById("like2").innerText="784 Likes"

    document.getElementById("pr6img3").style.backgroundImage="url('https://www.jcrew.com/brand_creative/2022/202205-May/flyout/2022may_0426_flyouts_cc_img2.jpg')"
    document.getElementById("like3").innerText="1718 Likes"

    document.getElementById("pr6img4").style.backgroundImage="url('https://www.jcrew.com/brand_creative/2022/202205-May/flyout/2022may_0506_flyouts_stories_img0.jpg')"
    document.getElementById("like4").innerText="987 Likes"
}
document.getElementById("sign2").addEventListener("click", goright)


let goleft=()=>{
    document.getElementById("pr6img1").style.backgroundImage="url('https://www.jcrew.com/s7-img-facade/BA400_OR5362_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540')"
    document.getElementById("like1").innerText="416 Likes"

    document.getElementById("pr6img2").style.backgroundImage="url('https://www.jcrew.com/s7-img-facade/BI759_OR5362_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540')"
    document.getElementById("like2").innerText="793 Likes"

    document.getElementById("pr6img3").style.backgroundImage="url('https://www.jcrew.com/s7-img-facade/BI409_YD1226_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540')"
    document.getElementById("like3").innerText="1412 Likes"

    document.getElementById("pr6img4").style.backgroundImage="url('https://www.jcrew.com/brand_creative/2022/202205-May/flyout/2022may_0426_flyouts_cc_img0.jpg')"
    document.getElementById("like4").innerText="1629 Likes"
}
document.getElementById("sign1").addEventListener("click", goleft)

