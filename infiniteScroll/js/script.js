var container = document.querySelector('#image-container');
var loader = document.querySelector('#loader');
var photosArray = [];
var ready = false;
var imagesLoaded = 0;
var totalImages = 0;
var sig = 1;
var numberOfImages = 5;


var displayPhotosWihtoutApi = () => {
    imagesLoaded = 0;
    totalImages = numberOfImages
    for (i = 0; i < numberOfImages; i++) {
        var template = document.querySelector('.image-template').content.cloneNode(true);
        anchor = template.querySelector('a')
        image = template.querySelector('img')
        anchor.href = 'https://unsplash.com';
        image.src = `https://source.unsplash.com/random?sig=${sig}`;
        image.addEventListener('load', () => {
            imagesLoaded++;
            if (imagesLoaded == totalImages) {
                ready = true;
                loader.style.display = 'none';
            }
        })
        container.appendChild(template)
        sig++;
    }
}
displayPhotosWihtoutApi()


window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        displayPhotosWihtoutApi()
    }
})