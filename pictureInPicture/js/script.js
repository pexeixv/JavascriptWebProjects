const video = document.querySelector('#video');
const selectStream = document.querySelector('#button1');
const startPip = document.querySelector('#button2');


selectStream.addEventListener('click', async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
        };
    } catch (error) {

    }
})

startPip.addEventListener('click', async () => {
    startPip.disabled = true;
    await video.requestPictureInPicture();
    startPip.disabled = false;
});
