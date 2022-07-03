// Определение ширины экрана
import { isMobile, isSmallTablet, isTablet, isDesktop, isLaptop, isLargeDesktop } from './functions/check-viewport';

import { modalMoreInfo } from "./components/modal";
import {sliderCardForDesctop, sliderCardForTabletAndMobile}  from "./components/sliderCard";
import { trimCardDate, returnFullCardDate } from "./components/CardDate";
import { trimFullNameRecipient } from "./components/trimFullNameRecipient";


modalMoreInfo();

if (isDesktop() || isLaptop() || isTablet()) {
    sliderCardForDesctop() 
} else { 
    sliderCardForTabletAndMobile()
} 
    
if(isMobile()) {
    trimCardDate();
    trimFullNameRecipient();
} 

window.addEventListener('resize', function() {
  if (isDesktop() || isLaptop() || isTablet()) {
    sliderCardForDesctop() 
  } else { 
    sliderCardForTabletAndMobile()
  } 
   
  if(isMobile()) {
    trimCardDate();
    trimFullNameRecipient();
  } 
}, true);

