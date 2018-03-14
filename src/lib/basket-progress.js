window.addEventListener('load', () => {
  const progress = document.querySelector('.progress progress');
  const progressVal = document.querySelector('.progress__val');

  progress.value = progress.dataset.progress;
  progressVal.innerHTML = progress.dataset.progress + "%";


  // progressVal shift logic
  const progressWidth = progress.offsetWidth;

  let shiftVal = 15 + progressWidth; // значения сдвига до нуля
  shiftVal = shiftVal - (progressWidth / 100 * progress.dataset.progress );
  progressVal.style.left = '-' +shiftVal + 'px';

});
