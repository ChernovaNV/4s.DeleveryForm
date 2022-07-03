const select = document.querySelector('.recipient__select--recipientName')

export function trimFullNameRecipient() {
    
   for(let i = 0; i < select.options.length; i++) {
        if(select.options[i].outerText.length > 40) {
            let optionsArr = select.options[i].outerText.split(' ');
            optionsArr.splice(1, 1);
            let newStr = optionsArr.join(' ')
            
            select.options[i].innerText = newStr;
        }
   }
}
