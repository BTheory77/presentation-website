let info = document.getElementsByClassName("info");

function scrollToSlide(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
}

function Next() {
    for(let i = 0; i <= 2; i++) {
        if(info[i].classList.contains('active') && i != 2) {
            info[i].classList.remove('active');
            info[i+1].classList.add('active');
            break;
        }
        if(i == 2) {
            info[i].classList.remove('active');
            info[i-2].classList.add('active');
            break;
        }
    }

}