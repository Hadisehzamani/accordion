let btn = document.querySelectorAll('.btn')



btn.forEach(function(item){
    item.addEventListener('click', function(){
        let panel = this.nextElementSibling;
        let newI = item.querySelector('i')
        panel.classList.toggle('display-block');

    })
});

