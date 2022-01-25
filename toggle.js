let ele1 = document.getElementById("primaryNav");
function openSideMenu() {
  document.getElementById("hamburgerBtn").classList.toggle("open");
  document.body.classList.toggle("show");
  if (ele1.style.display === "block") {
    ele1.style.display = "none";
  } else {
    ele1.style.display = "block";
  };
};


let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


/*GSAP Animation*/
gsap.registerPlugin(ScrollTrigger);
let animation = gsap.timeline({defaults: {ease:"SlowMo.easeOut"}});

animation.to("#create", {y:"0%", duration:1, stagger:0.2, 
  scrollTrigger:{
    trigger:"#create",
    toggleActions:"restart none none restart"
  }
});

gsap.to("#create1", {y:"0%", duration:1, stagger:.3,
  scrollTrigger:{
    trigger:"#create1",
    start:"top center+=100",
    end:"top top",
    toggleActions:"restart none reverse reset"
  }
});
gsap.to("#create2", {y:"0%", duration:1, stagger:.3, delay:.5,
  scrollTrigger:{
    trigger:".show"
  }
});
let anim = gsap.timeline({ default: {duration:1}});

anim.fromTo(".create3", {y:"100%"}, {y:"0%", stagger:0.3,ease:"SlowMo.easeOut",delay:.1,
  scrollTrigger:{
    trigger:".create3"
  }}
);
anim.fromTo(".link1", {x:-100, opacity:0}, {x:0, opacity:1, ease:"SlowMo.easeOut", 
  scrollTrigger:{
    trigger:".link1"
  }
});
anim.fromTo(".link2", {x:100, opacity:0}, {x:0, opacity:1, ease:"SlowMo.easeOut", 
  scrollTrigger:{
    trigger:".link1"
  }
}, "<")
document.getElementById("crea").onclick =()=> anim.restart();

let roll = gsap.fromTo(".two", {scale:1}, {rotation:3*360, scale:1.5, duration:2, ease:"SlowMo.easeOut", 
scrollTrigger:{
  trigger:".two",
  start:"top center",
  toggleActions:"restart none reverse reset"
}
})
let two = document.querySelector('.two')
two.addEventListener("mouseenter", ()=>{
  roll.restart();
})
two.addEventListener("mouseleave", ()=>{
  roll.reverse();
})
gsap.fromTo(".image2", {clipPath:"square(5% at 77%40%)", scale:0, opacity:0},
                     {clipPath:"square(75% at 50%50%)", ease: "SlowMo.easeOut",
                     scale:1, delay:.2, opacity:1, duration:1.5, rotation:2*360,
                      scrollTrigger:{
                        trigger:".image2",
                        start:"-100px bottom",
                        end:"top center",
                        toggleActions: "restart play reverse reset"
                      }
});

gsap.fromTo(".image1", {clipPath:"circle(5% at 77%40%)", scale:0.1, opacity:0},
                     {clipPath:"circle(75% at 50%50%)", ease: "SlowMo.easeOut",
                     scale:1, delay:.2, opacity:1, duration:1.5,
                      scrollTrigger:{
                        trigger:".image1",
                        start:"-100px bottom",
                        end:"top center",
                        toggleActions: "restart play reverse reset"
                      }});
