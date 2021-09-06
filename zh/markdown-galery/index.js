class imageTextarea {
    constructor(elem) {
        this.area = elem;
    }

    init(){
        this.drawImages();
    }

    drawImages() {
        const area = document.querySelector("[data-markdown]");
        const ul = document.createElement('ul');
        area.insertAdjacentElement('afterend', ul);
        const regex = /!\[\]\((.*?)\)/g;
        const str = area.value;
        let tmp = "";
        let urls = str.matchAll(regex);
        for (const url of urls) {
            tmp += "<li><img src='" + url[1] + "'></li>";
        }
        ul.innerHTML = tmp;
    }
}

const elem = document.querySelector('form');
const imageArea = new imageTextarea(elem);
imageArea.init();