const inputEl = document.querySelector(".form input");
const contentEl = document.querySelector(".content");

function sendMessage() {
  let value = inputEl.value;
  if (!value.trim()) return null;

  const divEl = document.createElement("div");
  divEl.classList = "message me";
  divEl.innerHTML = value;
  contentEl.appendChild(divEl);
    inputEl.value = "";
    setTimeout(() => {
        reply();
        
    } , 2000)
}
const DATA = [
  "ha",
  "nma gap",
  "qettasz",

  "👍👍👍👍",
  "qachon",
  "kasalmisz",
  " 🤣 🤣 🤣",
  "yogee",
  "hmm",
  "szi sevaman🫶♥️♥️♥️♥️♥️",
  "ovqatlandizmi🥰",
  "szni korgm keldi🥰",
  "szi yaxshi koraamnn♥️♥️♥️♥️",
  "szi sogindm♥️♥️",
];
function reply() {
    let value = DATA[Math.floor(Math.random() * DATA.length)]
    const divEl = document.createElement("div");
    divEl.classList = "message ";
    divEl.innerHTML = value;
    contentEl.appendChild(divEl);
   
}
