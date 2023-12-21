var rect = document.querySelector('#center');

rect.addEventListener("mousemove",function(e){
    var rectanglelocation = rect.getBoundingClientRect()
    var inside =  (e.clientX - rectanglelocation.left);


if(inside < rectanglelocation.width/2)
{
    var redcolor = 
    gsap.utils.mapRange(0,rectanglelocation.width/2,255,0,inside);
    gsap.to(rect,{
        backgroundColor:`rgb(${redcolor},0,0)`,
        ease: Power4,
        
    })

}
else {
    var bluecolor = gsap.utils.mapRange(rectanglelocation.width/2 , rectanglelocation.width,0,255,inside)
    gsap.to(rect,{
        backgroundColor:`rgb(0,0,${bluecolor})`,
        ease : Power4,
    })
}
})

rect.addEventListener("mouseleave",function(){
    rect.style.backgroundColor = "white";
    gsap.to(rect,{
        backgroundColor: "white",
    })
})