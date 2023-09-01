

const brokenImages = [
    1, 24, 32, 36, 44, 47
];

function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/150/100.jpg`)
        }
    }

    return urls;
}

export const imageUrls = getImageUrls();

export function ImageSelector() {    // declare and export new function called ImageSelector
    return (                
        <div>
            <h2 className="SelectPhotoTitle">Select your photo</h2>
            <p className="ImageThumbnails">
                {imageUrls.map((imageUrl) => <img src={imageUrl} alt="Image Thumbnail"  />)}            
            </p>
        </div>
    );
}