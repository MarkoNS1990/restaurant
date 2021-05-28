const home = (()=>{
    const content = document.querySelector("#content");
    const main = document.createElement('div')
    main.setAttribute('class','home-div')
    
    main.innerHTML=`<h1 class='main-heading'>Welcome to La Casa Del Marko</h1>
    <p class='main-text'>Come and try the best food in the world!</p>
    <div class='block'>
        <div class='left'><span class='quotes'>"</span>Cras semper odio nisl, vel suscipit neque elementum eu. Fusce eu est tempus, tempor nisl ac, luctus justo. Nullam ut mauris vitae arcu sodales consectetur at lacinia ante.<span class='quotes'>"</span></div>
        <div class='right'><img src='assets/chef.jpg' alt='chef' class='chef-img'>
        
        <p class='text-block'>Made with passion since 1878</p>
        
    </div>
    
    `
    content.appendChild(main)
    
   
    console.log('whyy');
})()

