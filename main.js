
window.onload = () => {
const tl = gsap.timeline()
gsap.set("#textlogo",{
   y:"-1000px",
    opacity:0,
})
tl.to("#textlogo",{
    y:"0px",
    opacity:1,
    duration:1
})
gsap.set("#sum",{
   x:"-1000px",
   opacity:0
})
tl.to("#sum",{
    opacity:1,
    x:"0",
    duration:1
})
}
gsap.registerPlugin(ScrollTrigger);
gsap.to("#textlogo",{
    y:"-1000px",
    opacity:0,
    scrollTrigger:{
    //markers:true,
    start:"top 10%",
    end:"top top ",
    scrub:true
    }
})
gsap.to("#sum",{
    x:"1000px",
    opacity:0,
    scrollTrigger:{
    //markers:true,
    start:"top 10%",
    end:"top top ",
    scrub:true
    }
})
gsap.to("#background",{
   transform:"rotate(90deg)",
   width:"50%",
   top:"50px",  
    scrollTrigger:{
    //markers:true,
    start:"top 10%",
    end:"top top ",
    scrub:true
    }
})
gsap.set("#whyus",{
    y:5000,
    opacity: 0
})
gsap.to("#whyus",{
    y:0,
    opacity: 1,
    scrollTrigger:{
   // markers:true,
    start:"top 6%",
    end:"top top",
    scrub:1

    }
})
gsap.set("#aboutus",{
    x:1000,
    opacity: 0
})
gsap.to("#aboutus",{
    x:0,
    opacity: 1,
    scrollTrigger:{
    //markers:true,
    start:"top 6%",
    end:"top top",
    scrub:1

    }
})
gsap.set(".sideline",{
    x:1000,
    opacity:0
})
gsap.to(".sideline",{
    x:0,
    opacity:1,
    scrollTrigger:{
        trigger:".sideline",
        scroller:"body",
        start:"bottom 90%",
        end:"top 85%",
        scrub:2,
       // markers:true
    }
})

gsap.set(".tabs",{
    scale:0
})
gsap.to(".tabs",{
    scale:1,
    scrollTrigger:{
        trigger:".tabs",
        scroller:"body",
        start:"top 85%",
        end:"top 70%",
        scrub:2,
        //markers:true
    }
})

VanillaTilt.init(document.querySelector(".t1"), {
    max: 15,
    speed: 500,
    transformStyle:"preserve-3d",
    transform:"perspective(1000px)",
    transform: "translateZ(20px)"
})
VanillaTilt.init(document.querySelector(".t2"), {
    max: 15,
    speed: 500,
    transformStyle:"preserve-3d",
    transform:"perspective(1000px)",
    transform: "translateZ(20px)"
})
VanillaTilt.init(document.querySelector(".t3"), {
    max: 15,
    speed: 500,
    transformStyle:"preserve-3d",
    transform:"perspective(1000px)",
    transform: "translateZ(20px)"
})


function thankyou(){
    const response = document.querySelector("#response")
    response.style.display = "block";
}


