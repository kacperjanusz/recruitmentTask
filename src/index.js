const button1 = document
  .querySelector("#b1")
  .addEventListener("click", () => this.renderMainContent());

const button2 = document
  .querySelector("#b2")
  .addEventListener("click", () => this.renderMainButton());

function renderMainContent() {
  document.querySelector(".main").innerHTML = `<div>New main content</div>`;
}

function renderMainButton() {
  document.querySelector(
    ".main"
  ).innerHTML = `<div class = "button" id = "b3">button 3</div>`;

  const button3 = document
    .querySelector("#b3")
    .addEventListener("click", () => {
      this.callService();
    });
}
async function callService() {
  const res = {
    item2: {
      button: [{ clicked: "clicked" }, { unclicked: "bunclicked" }],
    },
  };
  this.response = JSON.stringify(res);
  await setTimeout(() => {
    this.handlePopup();
  }, 3000);
}
function handlePopup() {
  const popupBg = document.querySelector(".popup-bg");
  popupBg.classList.add("bg-active");
  this.renderPopupContent();
  const hideTriggers = document.querySelectorAll(".hide");
  const popup = document.querySelector(".popup");

  popup.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
  });

  hideTriggers.forEach((trigger) =>
    trigger.addEventListener("click", () => {
      popupBg.classList.remove("bg-active");
    })
  );
}

function renderPopupContent() {
  document.querySelector(".popup-text").innerHTML = `
  Button 1 was ${JSON.parse(this.response).item2.button[0].clicked}`;
}
