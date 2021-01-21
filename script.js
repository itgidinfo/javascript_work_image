const imageOut = document.querySelector('.image-out');
const heroName = document.querySelector('.hero-name');
const heroMovie = document.querySelector('.hero-movie');
const heroUniv = document.querySelector('.hero-univ');

for (let key in images) {
    let img = document.createElement('img');
    img.setAttribute('data-key', key);
    img.src = 'images/' + key + '.png';
    imageOut.append(img);
}

imageOut.addEventListener('click', showInfo);

function showInfo(event) {
    // console.dir(event.target);
    const key = event.target.dataset['key'];
    console.log(key);
    if (key === undefined) {
        return true;
    }
    heroName.textContent = images[key]['name'];
    heroMovie.textContent = images[key]['movie'];
    heroUniv.textContent = images[key]['universe'];

    document.querySelectorAll('.image-out img').forEach(item => {
        item.classList.remove('active');
    });

    event.target.classList.add('active');
}