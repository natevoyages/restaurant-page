function createMenu(){
let content = document.getElementById('content');
  
let pageContent = document.createElement('div');
pageContent.classList.add("page-content");
content.appendChild(pageContent);
const headline = document.createElement('h2');

headline.innerText = "MENUUUU";
pageContent.appendChild(headline);

const image = document.createElement('img');
image.src = "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
image.alt = "delicous pizza"
image.height = "200";
image.width = "200";
pageContent.appendChild(image)
const text = document.createElement('p');

text.innerText = `YUP it's just pizza. ENJOYYY`
pageContent.appendChild(text);
}
export default createMenu;