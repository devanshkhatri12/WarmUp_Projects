const throttleFunction=(func, delay)=>
{
    let prev = 0;
    return (...args) =>
    {
        let now = new Date().getTime();
        if(now - prev> delay)
        {
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector('#rect').addEventListener("mousemove", throttleFunction((details)=>{
    
    // less occur repetation code and image occur div
    let div = document.createElement("div");
    div.classList.add('imageoccur');

    // imageoccur div ko shi position pr lao
    div.style.left = details.clientX + 'px';
    div.style.top = details.clientY + 'px';

    let img  = document.createElement("img");
    img.setAttribute('src' , 'InFrame_1643029749197.jpg')
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img, {
        y: '0',
        ease: Power1,
        duration: 0.6,
    });

    gsap.to(img, {
        y: '100%',
        delay: 0.6,
        ease: Power2,
        });

    // removeing image occur div
    setTimeout(function(){
        div.remove();
    },1000);
}, 500));