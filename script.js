if (!localStorage.count || Number(localStorage.count) < 0)
  localStorage.count = "0";
window.onload = () => {
  if (!sessionStorage.visited) {
    sessionStorage.visited = "true";
    localStorage.count = Number(localStorage.count) + 1;
    sessionStorage.count = localStorage.count;
    countRenderer();
  }
};
function countRenderer() {
  document.querySelector("div").className = sessionStorage.count;
  if (localStorage.count == sessionStorage.count) {
    document.querySelector("div").textContent = "Master";
  }
}

window.onstorage = () => {
  if (localStorage.count == document.querySelector("div").className) {
    document.querySelector("div").textContent = "Master";
  } else {
    document.querySelector("div").textContent = "Slave";
  }
};
countRenderer();
window.onunload = (e) => {
  e.preventDefault();
  localStorage.count = Number(localStorage.count) - 1;
};
