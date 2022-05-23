var originalBody = document.body.innerHTML;
var originalHead = document.head.innerHTML;

function checkEdit() {
  try {
  if (document.body.innerHTML == originalBody) {
    // Everything is alright
  } else {
    document.body.innerHTML = originalBody;
  }
  }
  catch {
    window.location.reload();
  }
  try {
  if (document.head.innerHTML == originalHead) {
    // Everything is alright
  } else {
    document.head.innerHTML = originalHead;
  }
  }
  catch {
    window.location.reload();
  }
}

window.setInterval(checkEdit, 0005);
