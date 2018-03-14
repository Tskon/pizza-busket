window.addEventListener('load', () => {

// counter logic
  const decrArr = document.querySelectorAll('.basket-grid__product-decr');
  const incrArr = document.querySelectorAll('.basket-grid__product-incr');
  const counterValArr = document.querySelectorAll('.basket-grid__product-count');

  counterValArr.forEach((countarVal, i) => {
    if (counterValArr[i].innerHTML === '1') {
      decrArr[i].classList.add('basket-grid__product-decr_inactive');
    }
  });

  incrArr.forEach((incr, i) => {
    incr.addEventListener('click', () => {
      counterValArr[i].innerHTML = ++counterValArr[i].innerHTML;
      if (+counterValArr[i].innerHTML > 1)
        decrArr[i].classList.remove('basket-grid__product-decr_inactive');
    })
  });

  decrArr.forEach((decr, i) => {
    decr.addEventListener('click', () => {
      if (+counterValArr[i].innerHTML > 1) {
        counterValArr[i].innerHTML = --counterValArr[i].innerHTML;
        if (+counterValArr[i].innerHTML === 1)
          decrArr[i].classList.add('basket-grid__product-decr_inactive');
      }

    })
  });

// del-btn (toggle) logic
  const toggleBtnArr = document.querySelectorAll('.basket-grid__product-toggle-btn');
  const rowArr = document.querySelectorAll('.basket-grid__row');

  toggleBtnArr.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      rowArr[i].classList.toggle('basket-grid__row_inactive');
      btn.classList.toggle('basket-grid__product-toggle-btn_active');
      if (btn.classList.contains('basket-grid__product-toggle-btn_active')) {
        btn.value = 'Вернуть';
      } else {
        btn.value = 'Удалить';
      }
    })
  });
});