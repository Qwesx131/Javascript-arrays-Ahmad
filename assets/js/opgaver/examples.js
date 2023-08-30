let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');

myExtrasInput.addEventListener("change", addExtra);

function addExtra() {
    const selectedExtra = myExtrasInput.value;
    if (selectedExtra && !myExtras.includes(selectedExtra)) {
        myExtras.push(selectedExtra);
        updateExtras();
    }
}

function updateExtras() {
    const extrasHTML = myExtras.map(extra => `<p>${extra}</p>`).join('');
    myExtrasListElement.innerHTML = extrasHTML;
}





