const btnMoreInfo = document.getElementById('moreInfo')
const btnCloseMoreInfo = document.getElementById('btnCloseMoreInfo')

const details = document.querySelector('.details')

export function modalMoreInfo() {
    btnMoreInfo.addEventListener('click', () => {
        details.classList.add('open'); 
    })
    btnCloseMoreInfo.addEventListener('click', () => {
        details.classList.remove('open');
    })
}

