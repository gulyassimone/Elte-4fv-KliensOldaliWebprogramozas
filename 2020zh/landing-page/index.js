const animationObserver = new IntersectionObserver((entries) => {

  
    entries.filter(
      (entry) => entry.isIntersecting
    ).forEach(
      (entry) => {
        const elem = entry.target;
        const animation = elem.dataset.scroll;
        elem.classList.add('animate__animated', `animate__${ATTR}`);
        setTimeout(() => {
          elem.classList.remove('animate__animated', `animate__${ATTR}`);
        }, 1000);
      }
    );
  });


  document.querySelectorAll('[data-scroll]').forEach(
    (elem) => animationObserver.observe(elem)
  );

document.addEventListener('scroll', _.throttle(() => {

    const nav = document.querySelector("nav");
    if (scrollY >= 200) {
      nav.classList.add("navbar-scrolled");
    } 

    const scrolled = scrollY; 
    const viewportHeight = document.body.clientHeight; 
    const windowHeight = window.innerHeight; 
    const scrolledRatio = scrolled / (viewportHeight - windowHeight);
    document.querySelector('progress').value = scrolledRatio * 100;
  }, 200));
  