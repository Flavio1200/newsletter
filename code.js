const dialog = document.getElementById('modal');
const btnclose = document.getElementById('close');
const btnopen = document.getElementById('open');
const err = document.getElementById('error');

btnopen.addEventListener('click',function(e){
    e.preventDefault()
    const mail = document.getElementById('mail').value;
    if(mail.trim() === ''){
        console.log('error')
        err.classList.remove('error')
        err.classList.add('err')
    } else{
        dialog.showModal()
        err.classList.add('error')
        err.classList.remove('err')
    }
})

btnclose.addEventListener('click',function(){
    dialog.close()
})