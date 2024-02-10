var tl = gsap.timeline();
gsap.registerPlugin(TextPlugin);
var span=document.querySelector("span")
tl.from(".navbar h4",{
    y:-200,
    opacity:0,
    stagger:.3
})
tl.from(".pics img",{
    scale:0,
    opacity:0,
    stagger:.3,
    
})

tl.from(".footer h4",{
    y:-100,
    opacity:0,
    stagger:.4,
})
tl.from("#heading1,#heading2 #span2,#heading2 #span1,#heading3",{
    x:-400,
    opacity:0,
    stagger:.5

})
tl.to(".pics img",{
    rotate:0,
})
tl.to("#img3",{
    top:80,
    left:300,
    duration:2,
// rotate:"20deg"
})
tl.to("#img1",{
    top:80,
    right:200,
    duration:2,

})

tl.from("#span1",{
    scale:.3,
    duration:2,
    color:"transparent",
  
})
tl.to("#span1",{
    scale:0,
    duration:2,
    text: {
        value: "Treat",
        newClass: "class2",
        delimiter: " ",
       
    },
    color:"transparent",
})
