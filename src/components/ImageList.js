import React from 'react';

const ImageList = (props) => {
    let images = props.images.map(({ id, urls, description }) => {
        return <img key={id} src={urls.regular} alt={description} />;
    })

    return (
    <div>{images}</div>
    )
}

export default ImageList;