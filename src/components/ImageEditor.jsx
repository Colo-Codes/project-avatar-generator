// Import the Cloudinary classes.
import { fill } from '@cloudinary/url-gen/actions/resize';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/colocodes/image/upload';

export default function ImageEditor() {
    const myImage = new CloudinaryImage('cld-sample-5', {
        cloudName: 'colocodes',
    }).resize(fill().width(300).height(250));

    const formData = new FormData();
    formData.append(
        'file',
        'https://res.cloudinary.com/colocodes/image/upload/v1629200009/cld-sample-5.jpg',
    );
    formData.append('upload_preset', 'unsigned-preset-colocodes');

    fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            console.log(response);
            return response.text();
        })
        .then(data => {
            console.log(data);
        });

    return (
        <div>
            <AdvancedImage cldImg={myImage} />
        </div>
    );
}
