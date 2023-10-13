// array of ovjects
let arr = [
    {dp:"https://images.unsplash.com/photo-1585589197566-b482772f8831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",story:"https://images.unsplash.com/photo-1591364011658-b2db9b314a40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80"},{dp:"https://images.unsplash.com/photo-1610165539774-791ae89d0574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",story:"https://images.unsplash.com/photo-1575919220112-0d5a2dc6a4b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"},{dp:"https://images.unsplash.com/photo-1610165539809-f37ec6d2f987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",story:"https://plus.unsplash.com/premium_photo-1661265900496-479869655bbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"},{dp:"https://images.unsplash.com/photo-1585589254880-2a46e2895b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",story:"https://images.unsplash.com/photo-1626793318748-a8d3c8e4f6ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80"},{dp:"https://images.unsplash.com/photo-1610057998992-6182af268499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",story:"https://images.unsplash.com/photo-1568960151774-79aa5ac711d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"},
]

let stories = document.querySelector('#stories')

let clutter = '';
arr.forEach(function(elem,index)
{
    clutter += `<div class="story">
    <img id="${index}" src="${elem.dp}" alt="">
</div>`
});

stories.innerHTML = clutter;

stories.addEventListener('click',function(details)
{
    document.querySelector('#full-screen').style.display = "block";
    document.querySelector('#full-screen').style.backgroundImage = `url(${arr[details.target.id].story})`;
    
    setTimeout(function()
    {
        document.querySelector('#full-screen').style.display = 'none';
    },2000)
});