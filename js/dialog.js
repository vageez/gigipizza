window.onload = () => {
  const dialog = document.querySelector("dialog");
  const closeButton = document.querySelector("dialog button");

  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.showModal();
};
