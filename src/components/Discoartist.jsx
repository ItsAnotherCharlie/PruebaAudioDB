import React, { useState } from 'react'
import './Discoartist.css'

const Discoartist = () => {

    const [artista, setArtista] = useState('');
    const [artistNewInfo, setArtistNewInfo] = useState({
        nombreArtista: '',     
        imagenArtista: ''
    });
    const [artistaAlbums, setArtistaAlbums] = useState([]);

    const handleChange = e => {
        setArtista(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        consultarAPIAudio(artista);
        consultarAPIDiscos(artista);
    }

    const consultarAPIAudio = async artistaNombre => {
        const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artistaNombre}`;
        const response = await fetch(url);
        const artistInfo = await response.json();

        setArtistNewInfo({
            nombreArtista: artistInfo.artists[0].strArtist,
            imagenArtista: artistInfo.artists[0].strArtistThumb
        });
    }

    const consultarAPIDiscos = async artistaNombre => {
        const url = `https://theaudiodb.com/api/v1/json/2/discography.php?s=${artistaNombre}`;
        const response = await fetch(url);
        const artistDisc = await response.json();

        setArtistaAlbums(artistDisc.album);
        console.log(artistDisc);
    }

    return (
        <>
            <h2>Descubre la discografía de tu artista o banda favorita</h2>

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

                <div className='contnombrediscos'>
                    <div className="infoArtista">
                        {artistNewInfo.nombreArtista === ''? null : <h2>{artistNewInfo.nombreArtista}</h2>}
                        {artistNewInfo.imagenArtista === ''? null : <img src={artistNewInfo.imagenArtista} alt="imagen artista"/>}
                    </div>

                    <div className="grid-albums">
                        {artistaAlbums.map(album => 
                            <div className="albumcard">
                                <h2>{album.strAlbum}</h2>
                                <p>{album.intYearReleased}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discoartist
