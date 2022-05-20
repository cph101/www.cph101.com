const originalContents = document.body.innerHTML;

function checkEdit() {
  if (document.body.innerHTML == originalContents) {
    // Everything is alright
  } else {
    document.body.innerHTML = originalContents;
  }
}

window.setInterval(checkEdit, 0005);
