const menu = (() =>{
    const content = document.querySelector('#content')

    const menuDiv = document.createElement('div')
    menuDiv.setAttribute('class','menu-div')

    menuDiv.innerHTML = `<h1 class='main-heading'>Try our specialites!</h1>
    <p class='main-text'>Come and try the best food in the world!</p>
    <div class='block-menu'>
        <div class='row menu-row'>
            <div class='col-md-4'>
                <img src='assets/pizza.jpg' alt='pizza' class='menu-img' >

            </div>
            <div class='col-md-8'>
                <h4 class='menu-heading'>Pizza Di Marko</h4>
                <p class='menu-text'>Cras semper odio nisl, vel suscipit neque elementum eu. Fusce eu est tempus, tempor nisl ac, luctus justo. Nullam ut mauris vitae arcu sodales consectetur at lacinia ante. Praesent risus metus, ultrices sed lectus nec, fermentum hendrerit neque. Ut consequat tellus eget mi aliquam, a condimentum ipsum lacinia.</p>
                <p class='menu-price'>$4,99</p>
            </div>
        </div>
        <div class='row menu-row flex-row-reverse'>
            <div class='col-md-4'>
                <img src='assets/pasta.jpg' alt='pizza' class='menu-img' >

            </div>
            <div class='col-md-8'>
                <h4 class='menu-heading'>Pasta Di Marko</h4>
                <p class='menu-text'>Cras semper odio nisl, vel suscipit neque elementum eu. Fusce eu est tempus, tempor nisl ac, luctus justo. Nullam ut mauris vitae arcu sodales consectetur at lacinia ante. Praesent risus metus, ultrices sed lectus nec, fermentum hendrerit neque. Ut consequat tellus eget mi aliquam, a condimentum ipsum lacinia.</p>
                <p class='menu-price'>$6,99</p>
            </div>
        </div>
        <div class='row menu-row '>
            <div class='col-md-4'>
                <img src='assets/burger.jpg' alt='pizza' class='menu-img' >

            </div>
            <div class='col-md-8'>
                <h4 class='menu-heading'>Burger Di Marko</h4>
                <p class='menu-text'>Cras semper odio nisl, vel suscipit neque elementum eu. Fusce eu est tempus, tempor nisl ac, luctus justo. Nullam ut mauris vitae arcu sodales consectetur at lacinia ante. Praesent risus metus, ultrices sed lectus nec, fermentum hendrerit neque. Ut consequat tellus eget mi aliquam, a condimentum ipsum lacinia.</p>
                <p class='menu-price'>$9,99</p>
            </div>
        </div>
        
        
        
        
    </div>`

    content.appendChild(menuDiv)

})()

export {menu}