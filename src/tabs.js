import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";

 function createTabs(){
  let content = document.getElementById('content');
  let tabs = document.createElement('div');
  tabs.setAttribute('id', 'nav-tabs');
  document.getElementById('content').appendChild(tabs);

  const homeTab = document.createElement('div');
  const menuTab = document.createElement('div');
  const contactTab = document.createElement('div');
  
  homeTab.setAttribute('class', 'tab');
  homeTab.setAttribute('id','home');
  homeTab.innerText = "Home";
  homeTab.style.background = "pink";
  homeTab.addEventListener("click", ()=>{
    setTabs();
    homeTab.style.background = "pink";
    clearContent();
    loadHome();
  })


  menuTab.setAttribute('class', 'tab');
  menuTab.setAttribute('id','menu');
  menuTab.innerText = "Menu"
  menuTab.addEventListener("click", ()=>{
    setTabs();
    menuTab.style.background = "pink";
    clearContent();
    loadMenu();

  })


  contactTab.setAttribute('class', 'tab');
  contactTab.setAttribute('id','contact');
  contactTab.innerText = "Contact";
  contactTab.addEventListener("click", ()=>{
    setTabs();
    contactTab.style.background = "pink";
    clearContent();
    loadContact();

  })



  tabs.appendChild(homeTab);
  tabs.appendChild(menuTab);
  tabs.appendChild(contactTab);
}

function clearContent(){
  let pageContent = document.querySelector(".page-content");
  pageContent.remove();
}

function setTabs(){
  document.getElementById("home").style.background = "white";
  document.getElementById("menu").style.background = "white";
  document.getElementById("contact").style.background = "white";
}
export default createTabs;