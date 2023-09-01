import './PhotoViewer.css';

interface PhotoViewerProps{
    imageUrl?: string;
}

export function PhotoViewer({imageUrl} : PhotoViewerProps) {    // declare and export new function called 'PhotoViewer'
    return (                
        <div>
            <img src={imageUrl} alt="Large Image Loading"/>
        </div>
    );
}
