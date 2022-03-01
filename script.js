const title = document.querySelector(".title");
const controls = document.querySelector(".controls");
controls.style.display = "none";
if (
  !sessionStorage.count ||
  !localStorage.count ||
  Number(localStorage.count) <= 0
) {
  localStorage.count = "1";
  sessionStorage.count = "1";
}
function countRenderer() {
  if (sessionStorage.count == localStorage.count) {
    title.textContent = "Master";
    document.title = "master";
    controls.style.display = "block";
  } else {
    title.textContent = "Slave";
    document.title = "slave";
    controls.style.display = "none";
  }
}
countRenderer();
function newMaster() {
  localStorage.count = Number(localStorage.count) + 1;
  countRenderer();
  let info = window.open(location);
  info.sessionStorage.count = localStorage.count;
}
window.onstorage = countRenderer;
function closeMaster() {
  window.onbeforeunload = "";
  localStorage.count = Number(localStorage.count) - 1;
  countRenderer();
  window.close();
}
window.onbeforeunload = () => {
  localStorage.count = Number(localStorage.count) - 1;
  window.close();
};
