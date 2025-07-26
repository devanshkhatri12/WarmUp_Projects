const panels = document.querySelectorAll('.panel')

function toggleActive(e)
{
    console.log(e.propertyName);
    if(e.propertyName.includes('flex-grow'))
    {
        this.classList.toggle('open-active');
    }  
}

function toggleOne()
{
    this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOne));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


