function displayImage() {
    const input = document.getElementById('uploadInput');
    const displayedImage = document.getElementById('displayedImage');
    const downloadableImage = document.getElementById('downloadableImage');

    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageURL = e.target.result;
            displayedImage.style.backgroundImage = `url('${imageURL}')`;
            downloadableImage.style.backgroundImage = `url('${imageURL}')`;
        };
        reader.readAsDataURL(file);
    }
}


function downloadImage() {
    const downloadableImage = document.getElementById('downloadableImage');
    const imageURL = downloadableImage.style.backgroundImage.slice(5, -2);

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const img = new Image();

    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);

        const a = document.createElement('a');
        a.href = canvas.toDataURL('image/jpeg');
        a.download = 'downloaded_image.jpg';
        a.click();
    };

    img.src = imageURL;
}
