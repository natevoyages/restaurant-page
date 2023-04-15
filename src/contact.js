function createContact(){
  let content = document.getElementById('content');
    
  let pageContent = document.createElement('div');
  pageContent.classList.add("page-content");
  content.appendChild(pageContent);
  const headline = document.createElement('h2');
  
  headline.innerText = "Contact Us";
  pageContent.appendChild(headline);
  
  
  const text = document.createElement('p');
  
  text.innerText = `Phone: (123)456-7891
  Address: Fake Bvd 12345, Fantasy City`
  pageContent.appendChild(text);
  }
  export default createContact;