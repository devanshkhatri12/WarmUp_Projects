var istatus = document.querySelector('h4');
var flag =0;

let add = document.querySelector('.add')
add.addEventListener('click' , function()
{
    if(flag == 0)
    {
        istatus.innerHTML = 'Friends';
        istatus.style.color = 'green';
        flag = 1;
        add.innerHTML = 'UnFriend';
        add.style.color = 'black';
        add.style.backgroundColor = 'rgb(165, 156, 156)';
    }
    else
    {
        istatus.innerHTML = 'Stranger';
        istatus.style.color = 'red';
        flag = 0;
        add.innerHTML = 'Add Friend';
        add.style.color = 'whitesmoke';
        add.style.backgroundColor = 'lightseagreen';
    }
});
