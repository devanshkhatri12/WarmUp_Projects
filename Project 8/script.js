// let element1 = document.querySelector('#element1');
// let elemtImage = document.querySelector('#element1 img');

// element1.addEventListener("mousemove",function(details)
// {
//     elemtImage.style.left = details.clientX + 'px';
//     elemtImage.style.top = details.clientY + 'px';
// });

// element1.addEventListener('mouseenter',function(details)
// {
//     elemtImage.style.opacity = '1';
// })

// element1.addEventListener('mouseleave',function(details)
// {s
//     elemtImage.style.opacity = '0';
// })

let element  = document.querySelectorAll('.element');

element.forEach(function(value)
{
    // console.log(value.childNodes[3]);
    value.addEventListener('mouseenter', function()
    {
        value.childNodes[3].style.opacity = 1;
    });

    value.addEventListener('mouseleave', function()
    {
        value.childNodes[3].style.opacity = 0;
    });

    value.addEventListener('mousemove', function(details)
    {
        value.childNodes[3].style.left = details.clientX + 'px';
        // value.childNodes[3].style.top = details.clientY + 'px';
    });

})