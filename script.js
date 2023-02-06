var open = false;

function navBar() {
  if (!open) {
    document.getElementsByClassName("menu")[0].classList.add("open");
    open = true;
  } else {
    document.getElementsByClassName("menu")[0].classList.remove("open");
    open = false;
  }
}

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function(entry) {
      if (entry.isIntersecting) {
          // make image visible
          var imgUrl = entry.target.getAttribute("data-src");

          // remove data-src and lazy class
          entry.target.setAttribute("src", imgUrl);
          entry.target.classList.remove("lazy");

          // unobserve image
          observer.unobserve(entry.target);
      }
  });
}, {
  threshold: 0,
  margin: 0,
});

const imgs = document.querySelectorAll('img.lazy');
imgs.forEach((img) => {
  observer.observe(img);
});