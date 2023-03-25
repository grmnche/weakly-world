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
