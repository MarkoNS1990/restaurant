(()=>{var e={941:()=>{(()=>{const e=document.querySelector("#content"),n=document.createElement("footer");n.classList.add("my-footer"),n.innerHTML="\n        <p>made with &#10084; by Marko Zecevic &copy; 2021</p>\n    ",e.appendChild(n)})()},561:()=>{(()=>{const e=document.getElementById("content"),n=document.createElement("div");n.innerHTML='<nav class="my-nav">\n   <ul class="nav">\n   <li class="nav-item">\n     <a class="nav-link link-home active" aria-current="page" href="#">Home</a>\n   </li>\n   <li class="nav-item">\n     <a class="nav-link link-menu" href="#">Menu</a>\n   </li>\n   <li class="nav-item">\n     <a class="nav-link link-contact" href="#">Contact</a>\n   </li>\n   \n </ul>\n \n </nav>',e.appendChild(n)})()},951:()=>{(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.setAttribute("class","home-div"),n.innerHTML="<h1 class='main-heading'>Welcome to La Casa Del Marko</h1>\n    <p class='main-text'>Come and try the best food in the world!</p>\n    <div class='block'>\n        <div class='left'><span class='quotes'>\"</span>Cras semper odio nisl, vel suscipit neque elementum eu. Fusce eu est tempus, tempor nisl ac, luctus justo. Nullam ut mauris vitae arcu sodales consectetur at lacinia ante.<span class='quotes'>\"</span></div>\n        <div class='right'><img src='assets/chef.jpg' alt='chef' class='chef-img'>\n        \n        <p class='text-block'>Made with passion since 1878</p>\n        \n    </div>\n    \n    ",e.appendChild(n),console.log("whyy")})()}},n={};function s(t){var a=n[t];if(void 0!==a)return a.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,s),i.exports}(()=>{"use strict";s(561),s(951),(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.setAttribute("class","menu-div"),n.innerHTML="<h1 class='main-heading'>Try our specialites!</h1>\n    <p class='main-text'>Come and try the best food in the world!</p>\n    <div class='block-menu'>\n        <div class='row menu-row'>\n            <div class='col-md-4'>\n                <img src='assets/pizza.jpg' alt='pizza' class='menu-img' >\n\n            </div>\n            <div class='col-md-8'>\n                <h4 class='menu-heading'>Pizza Di Marko</h4>\n                <p class='menu-text'>Cras semper odio nisl, vel suscipit neque elementum eu. Fusce eu est tempus, tempor nisl ac, luctus justo. Nullam ut mauris vitae arcu sodales consectetur at lacinia ante. Praesent risus metus, ultrices sed lectus nec, fermentum hendrerit neque. Ut consequat tellus eget mi aliquam, a condimentum ipsum lacinia.</p>\n                <p class='menu-price'>$4,99</p>\n            </div>\n        </div>\n        <div class='row menu-row flex-row-reverse'>\n            <div class='col-md-4'>\n                <img src='assets/pasta.jpg' alt='pizza' class='menu-img' >\n\n            </div>\n            <div class='col-md-8'>\n                <h4 class='menu-heading'>Pasta Di Marko</h4>\n                <p class='menu-text'>Cras semper odio nisl, vel suscipit neque elementum eu. Fusce eu est tempus, tempor nisl ac, luctus justo. Nullam ut mauris vitae arcu sodales consectetur at lacinia ante. Praesent risus metus, ultrices sed lectus nec, fermentum hendrerit neque. Ut consequat tellus eget mi aliquam, a condimentum ipsum lacinia.</p>\n                <p class='menu-price'>$6,99</p>\n            </div>\n        </div>\n        <div class='row menu-row '>\n            <div class='col-md-4'>\n                <img src='assets/burger.jpg' alt='pizza' class='menu-img' >\n\n            </div>\n            <div class='col-md-8'>\n                <h4 class='menu-heading'>Burger Di Marko</h4>\n                <p class='menu-text'>Cras semper odio nisl, vel suscipit neque elementum eu. Fusce eu est tempus, tempor nisl ac, luctus justo. Nullam ut mauris vitae arcu sodales consectetur at lacinia ante. Praesent risus metus, ultrices sed lectus nec, fermentum hendrerit neque. Ut consequat tellus eget mi aliquam, a condimentum ipsum lacinia.</p>\n                <p class='menu-price'>$9,99</p>\n            </div>\n        </div>\n        \n        \n        \n        \n    </div>",e.appendChild(n)})(),(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.setAttribute("class","contact-div"),n.innerHTML='<h1 class=\'main-heading\'>Contact us!</h1>\n    <p class=\'main-text\'>Call us or reach us via email!</p>\n    <div class=\'block-contact\'>\n        \n        <div class=\'left\'> \n        <div class="mapouter"><div class="gmap_canvas"><iframe width="413" height="273" id="gmap_canvas" src="https://maps.google.com/maps?q=nou%20camp&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net">fmivies</a><br><style>.mapouter{position:relative;text-align:right;height:273px;width:413px;}</style><a href="https://www.embedgooglemap.net">google embed maps</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:273px;width:413px;}</style></div></div>\n        </div>\n        <div class=\'right\'>\n            <p class=\'contact-text\'>Adress :Fake Street 123</p>\n            <p class=\'contact-text\'>Email: mail@mail.com</p>\n            <p class=\'contact-text\'>Phone: (123) 456-789</p>\n        </div>\n        ',e.appendChild(n)})(),s(941);const e=document.querySelector(".link-home"),n=document.querySelector(".link-menu"),t=document.querySelector(".link-contact"),a=document.querySelector(".home-div"),i=document.querySelector(".menu-div"),c=document.querySelector(".contact-div");e.addEventListener("click",(()=>{a.style.display="block",i.style.display="none",c.style.display="none"})),n.addEventListener("click",(()=>{a.style.display="none",i.style.display="block",c.style.display="none"})),t.addEventListener("click",(()=>{a.style.display="none",i.style.display="none",c.style.display="block"}))})()})();