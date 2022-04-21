const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)

const lastItem = getLastItem(window.location.href);
const withoutDash = lastItem.replace("-", "");

const words = withoutDash.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

newWords = words.join(" ");

var warning = document.getElementById('WarningText');
warning.innerHTML = `I don't know if you were looking for ${newWords}, but you're not goind to find it here!`