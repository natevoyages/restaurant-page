function loadHome() {

  let content = document.getElementById('content');
  
  let pageContent = document.createElement('div');
  pageContent.classList.add("page-content");
  content.appendChild(pageContent);
  const headline = document.createElement('h2');
  
  headline.innerText = "Best Restaurant!!!!";
  pageContent.appendChild(headline);
  
  const image = document.createElement('img');
  
  image.src =   "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
  pageContent.appendChild(image);
  image.height = "300";
  image.width = "300";

  const text = document.createElement('p');
  
  text.innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium laborum neque nulla odio cum, debitis quos dolores consequatur facere omnis.
       Illo sequi praesentium reiciendis voluptatem rerum fuga at ad beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ratione sequi animi,Lorem ipsum dolor, 
       sit amet consectetur adipisicing elit. Laudantium laborum neque nulla odio cum, debitis quos dolores consequatur facere omnis
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium laborum neque nulla odio cum, debitis quos dolores consequatur facere omnis`
  pageContent.appendChild(text);
}
export default loadHome;
