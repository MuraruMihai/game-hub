// Get optmized image from url
// We add /crop/width/height afiter media/
// take the position where we start insert our update
// take all characters between 0 and media/ including media/
//  add our update 'crop/600/400' and add the rest of chars 
import NoImg from '../assets/no-image-placeholder-6f3882e0.webp';
 

const getCroppedImageUrl = (url: string) => {
    if(!url) return NoImg;

    const target = 'media/';
    const index = url.indexOf(target) + target.length; 
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}

export default getCroppedImageUrl;