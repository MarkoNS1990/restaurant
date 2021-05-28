const load = (() =>{
 const content =  document.getElementById('content')
 
 const nav = document.createElement("div")
  
   nav.innerHTML = `<nav class="my-nav">
   <ul class="nav">
   <li class="nav-item">
     <a class="nav-link link-home active" aria-current="page" href="#">Home</a>
   </li>
   <li class="nav-item">
     <a class="nav-link link-menu" href="#">Menu</a>
   </li>
   <li class="nav-item">
     <a class="nav-link link-contact" href="#">Contact</a>
   </li>
   
 </ul>
 
 </nav>`
 content.appendChild(nav)
})()