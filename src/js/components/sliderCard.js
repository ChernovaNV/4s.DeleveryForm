const buttons = document.querySelector('.deliveryMethod__buttons')
const buttonPrev = document.getElementById('btn-prev');
const buttonNext = document.getElementById('btn-next');
const cardsWrapper = document.querySelector('.cards');

const points = [
    {
      id: 'deliveryMethod_postRussia_1',
      method: 'Почта России, курьер — 24-26 сент.',
      address: 'ул. Академика Королева, 73/3, Петропавловск- Камчатский, 683000',
      price: '+367'
    },
    {
      id: 'deliveryMethod_inShop_1',
      method: 'Лабиринт, курьер — 25 сент.',
      address: 'Можайское шоссе, д. 21, кв. 50, Москва, 121471',
      price: '0'
    },
    {
      id: 'deliveryMethod_inShop_2',
      method: 'Лабиринт, курьер — 25 сен.',
      address: 'ул. Алексея Алексеева, 194 Б, Москва, 123456',
      price: '+200'
    },
    {
        id: 'deliveryMethod_postRussia_2',
        method: 'Почта России, курьер — 24-26 сент.',
        address: 'ул. Академика Королева, 73/3, Петропавловск- Камчатский, 683000',
        price: '+367'
    }
  ]



let state = {
    page: 0,
    items: points.length,
};


export function sliderCardForDesctop() {
    state.items = 2;

    changePage(points)
    buildCards(points)
}

export function sliderCardForTabletAndMobile() {
    buildCards(points)
}

function pagination(points, page, items) {
    
    const trimStart = page * items;
    const trimEnd = trimStart + items;
    const trimmedPoits = points.slice(trimStart, trimEnd);

    if(trimEnd >= points.length) {
        buttonNext.disabled = true;
        
    } else {
        buttonNext.disabled = false; 
    }
    if(trimStart === 0) {
        buttonPrev.disabled = true;
    } else {
        buttonPrev.disabled = false;
    }
    return {
        querySet: trimmedPoits
    }
}


  function changePage(points) {
    buttons.addEventListener('click', (event ) => {
      const $this = event.target.closest('button');
      if($this.disabled ===  true) {
        return
      }

      if($this.id === 'btn-next') {
        state.page++;
      }

      if($this.id === 'btn-prev') {
        state.page--;
      }

      buildCards(points);
    })
  }

export function buildCards(points) {
    let trimmedCards = pagination(points, state.page, state.items);
    let cardsList = trimmedCards.querySet;

    cardsWrapper.innerHTML = ``;
  
    for (let item of cardsList) {
        let card = `<div class="card card--deliveryMethod">
                        <input class="card__input" id=${item.id} type="radio" name="deliveryMethod">
                        <label class="card__label card__label--deliveryMethod" for=${item.id}>
                        <p class="card__title">${item.method}</p>
                        <p class="card__price">${item.price} &#8381;</p>
                        <p class="card__address">${item.address}</p>
                        </label>
                    </div>`

        cardsWrapper.innerHTML += card;
    }
  }