import React, { useState } from 'react'
import MostrarBio from './MostrarBio';
import MostrarImagen from './MostrarImagen';
import './Inforartist.css'

const Inforartist = () => {

    const [artista, setArtista] = useState('');
    const [artistNewInfo, setArtistNewInfo] = useState({
        nombreArtista: '',
        generoArtista: '',
        sitiowebArtista: '',
        bioArtista: '',        
        imagenArtista: ''
    });

    const handleChange = e => {
        setArtista(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        consultarAPIAudio(artista);
    }

    const consultarAPIAudio = async artistaNombre => {
        const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artistaNombre}`;
        const response = await fetch(url);
        const artistInfo = await response.json();

        setArtistNewInfo({
            nombreArtista: artistInfo.artists[0].strArtist,
            generoArtista: artistInfo.artists[0].strGenre,
            sitiowebArtista: artistInfo.artists[0].strWebsite,
            bioArtista: artistInfo.artists[0].strBiographyES,
            imagenArtista: artistInfo.artists[0].strArtistThumb
        });
    }


    return (

        <>
        <h2>Descubre la historia de tu artista o banda favorita</h2>

        <div>
            <form
                onSubmit={ handleSubmit }
            >
                <label htmlFor="artist">Ingresa el nombre del artista a buscar</label>
                <input 
                    onChange={ handleChange }
                    type="text" 
                    name="artist" 
                    id="artist"
                    placeholder='Ingresa el nombre del artista, banda, etc' 
                />

                <input 
                    type="submit" 
                    value="Buscar" 
                />
            </form>

            <div className="contenedor-informacion informacion">
                <MostrarBio artistNewInfo={artistNewInfo} />

                <div className="imagen">
                    <MostrarImagen artistNewInfo={artistNewInfo} />
                </div>
            </div>

            
        </div>
        </>
    )
}

export default Inforartist
