const container = document.querySelector('#head');

const content = document.createElement('p');
content.classList.add('content');
content.textContent = "Hey I'm Red!";

container.appendChild(content);