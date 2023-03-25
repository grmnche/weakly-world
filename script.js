const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.hr-big');
      if (entry.isIntersecting) {
        square.classList.add('extension');
        return;
      }
      square.classList.remove('extension');
    });
  });
  observer.observe(document.querySelector('.hr-line'));

  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square2 = entry.target.querySelector('.links');
      if (entry.isIntersecting) {
        square2.classList.add('scale');
        return;
      }
      square2.classList.remove('scale');
    });
  });
  observer2.observe(document.querySelector('.links-ani'));

window.addEventListener('scroll', e => {
  document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

  // const observer3 = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     const square3 = entry.target.querySelector('.hr-small');
  //     if (entry.isIntersecting) {
  //       square3.classList.add('extension-2');
  //       return;
  //     }
  //     square3.classList.remove('extension-2');
  //   });
  // });
  // observer3.observe(document.querySelector('.hr-line-2'));

  
  // const observer3 = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     const square3 = entry.target.querySelector('.fade-img-2');
  //     if (entry.isIntersecting) {
  //       square3.classList.add('ani-fade-2');
  //       return;
  //     }
  //     square3.classList.remove('ani-fade-2');
  //   });
  // });
  // observer3.observe(document.querySelector('.fade-kso-2'));

  /*________________________________ */

  