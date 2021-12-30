import React from 'react'
import './MostrarBio.css'

const MostrarBio = artistNewInfo => {

    const { nombreArtista, generoArtista, sitiowebArtista, bioArtista, imagenArtista } = artistNewInfo.artistNewInfo;

    return (
        <main>
            <h2>{nombreArtista}</h2>
            <p className="genero">{generoArtista}</p>
            <a href={`https://${sitiowebArtista}`} target="_blank">{sitiowebArtista}</a>
            <p className="bio">{bioArtista}</p>
        </main>
    )
}

export default MostrarBio
