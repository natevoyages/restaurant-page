import loadHome from "./home";
import createTabs from "./tabs";
function loadPage(){

  createTabs();
  loadHome();
}

export  default loadPage;