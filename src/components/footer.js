const footer = (() =>{
    const content = document.querySelector('#content')
    const footer = document.createElement('footer')
    footer.classList.add('my-footer')
    footer.innerHTML =`
        <p>made with &#10084; by Marko Zecevic &copy; 2021</p>
    `
    content.appendChild(footer)
})()