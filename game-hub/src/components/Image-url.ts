import noimage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string | null | undefined) => {
    if (!url) {
        return noimage; // Provide a default image
    }
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;