window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    document.querySelector('.blob-1').style.transform = `translateY(${scrollY * 0.2}px)`;
    document.querySelector('.blob-2').style.transform = `translateY(${scrollY * -0.1}px)`;
  });