
const getCroppedImageUrl = (url: string | null | undefined) => {
    if (!url) {
        return 'default-image-url'; // Provide a default image URL or handle the case as needed
    }
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;