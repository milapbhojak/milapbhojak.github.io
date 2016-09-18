let each = (selector, callback) => {
  let list = Array.from(document.querySelectorAll(selector));
  list.forEach((el, i) => {
    callback(el, i);
  });
};

let random = (...items) => {
  return items[Math.floor(Math.random() * items.length)];
};

function randomize() {
  each("li", (el) => {
    el.className = "";
    el.classList.add(random("light", "dark"));
  });

  each(".circle", (el) => {
    el.className = "";
    el.classList.add("circle", random("tl", "tr", "br", "bl"), random("light", "dark"));
  });
}

randomize();
let timer = setInterval(randomize, 5000);
