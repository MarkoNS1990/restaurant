const contact = (() =>{
    const content = document.querySelector('#content')

    const contactDiv = document.createElement('div')
    contactDiv.setAttribute('class','contact-div')

    contactDiv.innerHTML = `<h1 class='main-heading'>Contact us!</h1>
    <p class='main-text'>Call us or reach us via email!</p>
    <div class='block-contact'>
        
        <div class='left'> 
        <div class="mapouter"><div class="gmap_canvas"><iframe width="413" height="273" id="gmap_canvas" src="https://maps.google.com/maps?q=nou%20camp&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net">fmivies</a><br><style>.mapouter{position:relative;text-align:right;height:273px;width:413px;}</style><a href="https://www.embedgooglemap.net">google embed maps</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:273px;width:413px;}</style></div></div>
        </div>
        <div class='right'>
            <p class='contact-text'>Adress :Fake Street 123</p>
            <p class='contact-text'>Email: mail@mail.com</p>
            <p class='contact-text'>Phone: (123) 456-789</p>
        </div>
        `

    content.appendChild(contactDiv)

})()

export {contact}