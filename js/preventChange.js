var originalHTML = document.getElementByID("mainApp").innerHTML;

function checkEdit() {
  try {
  if (document.getElementByID("mainApp").innerHTML == originalHTML) {
    // Everything is alright
  } else {
    document.getElementByID("mainApp").innerHTML = originalHTML;
  }
  }
  catch {
    window.location.reload();
  }
}

window.setInterval(checkEdit, 0005);
