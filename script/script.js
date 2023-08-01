let btn = document.querySelectorAll('.btn')



btn.forEach(function(item){
    item.addEventListener('click', function(){
        let panel = this.nextElementSibling;
        let newI = item.querySelector('i')
        if(panel.style.display === 'none'){
            panel.style.display = 'block'
            newI.classList.remove('fa-solid', 'fa-plus')
            newI.classList.add('fa-solid', 'fa-minus')
        }else {
            panel.style.display = 'none'
            newI.classList.remove('fa-solid', 'fa-minus')
            newI.classList.add('fa-solid', 'fa-plus' )
        }

    })
});

