
class addPicture{
  constructor(element){
    this.element = element;
  }
  init(name) {
    const picture = document.createElement('img');
    if(picture !==null){
      picture.setAttribute("src", `./imgs/${name}.jpg`)
      this.element.appendChild(picture);
      picture.addEventListener("click", "");
    }
  }
}

const animals = document.querySelectorAll('.animal-name');
animals.forEach(elem => {
  const img = new addPicture(elem);
  console.log(elem.innerText.toLowerCase());
  img.init(elem.innerText.toLowerCase());
});
//! Ez legyen legalul! Ez alá már ne írj semmit!
// imported from BS
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});