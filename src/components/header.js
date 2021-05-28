const load = (() =>{
 const content =  document.getElementById('content')
 
 const nav = document.createElement("div")
  
   nav.innerHTML = `<nav class="my-nav">
   <ul class="nav">
   <li class="nav-item">
     <a class="nav-link active" aria-current="page" href="#">Home</a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="#">Menu</a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="#">Contact</a>
   </li>
   
 </ul>
 </nav>`
 content.appendChild(nav)
})()