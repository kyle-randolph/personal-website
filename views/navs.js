function hamMenu() {
  const HAM = document.querySelector('.links');
  if (HAM.classList.contains('d-none')) {
      HAM.classList.remove('d-none');
  }
  else {
      HAM.classList.add('d-none');
  }
}