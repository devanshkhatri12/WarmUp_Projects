// dataset : it is an object which give value of every data attribute have

const inputs = document.querySelectorAll('input');

function handleUpdates()
{
    const suffix = this.dataset.sizing || '';
    
    console.log(`${this.name} + ${this.value} + ${suffix}`);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdates));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdates));
