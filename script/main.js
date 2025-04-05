const mainElement = document.getElementById('main');
const clickMessageDiv = document.getElementById('message');

mainElement.addEventListener('click', () => {
  clickMessageDiv.textContent = 'You clicked in <main>';
});
