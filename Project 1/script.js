var rectangle = document.querySelector('#rect');

rectangle.addEventListener('mousemove' , function(details)
{ 
    var rectanglelocation = rectangle.getBoundingClientRect();

    var insiderectval = details.clientX - rectanglelocation.left;

    if(insiderectval < rectanglelocation.width/2)
    {
        var redcolor = gsap.utils.mapRange(0, rectanglelocation.width/2, 255, 0, insiderectval);

        gsap.to(rectangle, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4,
        });
    }
    else
    {
        var bluecolor = gsap.utils.mapRange( rectanglelocation.width/2, rectanglelocation.width, 0, 255, insiderectval);

        gsap.to(rectangle, {
            backgroundColor: `rgb(0 ,0, ${bluecolor})`,
            ease: Power4,
        });
    }
});

rectangle.addEventListener('mouseleave', function()
{
    gsap.to(rectangle, {
        backgroundColor: "white",
    });
});