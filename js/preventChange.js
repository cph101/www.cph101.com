const originalContents = document.body.innerHTML;
const originalHead = document.head.innerHTML;

function checkEdit() {
  if (document.body.innerHTML == originalContents) {
    // Everything is alright
  } else {
    document.body.innerHTML = originalContents;
  }
  if (document.head.innerHTML == originalHead) {
    // Everything is alright
  } else {
    document.head.innerHTML = originalHead;
  }
}

window.setInterval(checkEdit, 0005);
