import React from 'react'
import './MostrarImagen.css'

const MostrarImagen = artistNewInfo => {

    const { imagenArtista } = artistNewInfo.artistNewInfo;

    console.log(imagenArtista);

    return (
        <>
            { imagenArtista !== ''? <img src={imagenArtista} alt="imagen artista"/> : null }
        </>
    )
}

export default MostrarImagen
