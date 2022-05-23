const originalBody = document.body.innerHTML;
const originalHead = document.head.innerHTML;

function checkEdit() {
  try {
  if (document.body.innerHTML == originalBody) {
    // Everything is alright
  } else {
    document.body.innerHTML = originalBody;
  }
  }
  catch {
    document.body.innerHTML = originalBody;
  }
  try {
  if (document.head.innerHTML == originalHead) {
    // Everything is alright
  } else {
    document.head.innerHTML = originalHead;
  }
  }
  catch {
    document.head.innerHTML = originalHead;
  }
}

window.setInterval(checkEdit, 0005);
