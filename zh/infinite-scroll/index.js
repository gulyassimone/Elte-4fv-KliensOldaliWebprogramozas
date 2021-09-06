const moreBtn = document.getElementById('btn-new-content');
moreBtn.setAttribute("style", "display:none");

document.addEventListener('scroll', _.throttle(() => {
    const scrolled = scrollY; // most hol járunk
    const viewportHeight = document.body.clientHeight; // dokumentum kliens magassága
    const windowHeight = window.innerHeight; // az ablak belső magassága
    if (scrolled + windowHeight >= viewportHeight) {
        const templateElement = document.getElementById("newRow");
        console.log("END OF PAGE");
        const newText = document.createTextNode("HELLLLLOOOO");
        const newElement = templateElement.content.cloneNode(true);
        document.body.appendChild(newElement);
        templateElement.content.appendChild(newText);

        /*document.body.appendChild(newElement);
        templateElement.content.appendChild(newElement);*/

    }
}, 200));