export let isMobile = () => {
  if (window.innerWidth < 605) {
    return true;
  }

  return false;
};

export let isSmallTablet = () => {
  if (window.innerWidth >= 606 && window.innerWidth <= 845) {
    return true;
  }

  return false;
};

export let isTablet = () => {
  if (window.innerWidth >= 846 && window.innerWidth <= 1250) {
    return true;
  }

  return false;
};

export let isLaptop = () => {
  if (window.innerWidth >= 1251 && window.innerWidth <= 1320) {
    return true;
  }

  return false;
};

export let isDesktop = () => {
  if (window.innerWidth > 1485) {
    return true;
  }

  return false;
};

export let isLargeDesktop = () => {
  if (window.innerWidth > 1485) {
    return true;
  }

  return false;
};