function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function sniper(){
  var swiper = new Swiper(".mySniper", {
    loop: true,
    autoplay:true,
    spaceBetween: 70,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

function typinganim(){
  var typed = new Typed(".auto-typed",{
    strings : ["RELIABLE", "AFFORDABLE", "VALUEABLE"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})
}
function showMenu(){
  const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex";
  
}

function hideMenu(){
  const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "none";
  
}
function mousefollower(){
  var videocon = document.querySelector("#section3")
  var slbtn = document.querySelector("#s-l")
  videocon.addEventListener("mouseenter",function(){
    gsap.to(slbtn,{
      opacity:1,
      scale:1
    })
  })
  videocon.addEventListener("mouseleave",function(){
    gsap.to(slbtn,{
      opacity:0,
      scale:0
    })
  })
  videocon.addEventListener("mousemove",function(dets){
    gsap.to(slbtn,{
      left:dets.x-70,
      top:dets.y-30,
    })
  })
}
function cursor(){
  document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
      left:dets.x-50,
      top:dets.y-50,
      scale:1
    })
  })
}

cursor();
mousefollower();
typinganim();
sniper();
loco();


gsap.from('.nav',{
  y:-100,
  duration:1,
  scale:1.3,
  opacity:0,
})
gsap.from('.left1',{
  x:100,
  opacity:0,
  dutration:1 ,
  scale:1.4,

})

gsap.from('#app',{
  scale:1.3,
  opacity:0,
  duration:1.5,
})
gsap.from('#laptop',{
  scale:0.7,
  opacity:0,
  duration:1.5,
})


gsap.to('.wrraper>a',{
  opacity:0,
})

gsap.from('.top2 , .btm2',{
  opacity:0,
  duration:1,
  scale:0.9,
  y:100,
  stagger:0.5,
  ease:"power2",
  scrollTrigger:{
    trigger:".top2,btm2",
    scroller:"#main",
    start:"top 70%"
  }
})

gsap.from('.vid',{
  opacity:0,
  duration:1,
  scale:0.9,
  scrollTrigger:{
    start:"top 70%",
    scroller:"#main",
    trigger:".vid",
  }
})


var mu = new gsap.timeline()

mu.from('#container',{
  y:100,
  duration:.8,
  opacity:0,
  scale:0.8,
})

mu.from('.wrraper>h1',{
  y:100,
  duration:.3,
  opacity:0,
  scale:0.8,
})

mu.from('.wrraper>h3',{
  y:100,
  duration:0.3,
  scale:0.8,
  opacity:0
})


mu.to('.wrraper>a',{
  y:70,
  opacity:100,
})

mu.to('#app',{
  y:20,
  repeat:-1,
  duration:1.5,
  yoyo:true,
})

mu.to('#laptop',{
  x:3,
  repeat:-1,
  duration:1.5,
  yoyo:true,
})


mu.to('.wrraper>a',{
  scale:0.99,
  repeat:-1,
  duration:0.7,
  yoyo:true,
})


