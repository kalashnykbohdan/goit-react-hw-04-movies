
import React from 'react';
import styles from './cast.module.css';
import PropTypes from 'prop-types';

const baseUrlForImage = 'https://image.tmdb.org/t/p/w92'

const CastComponent = ({ cast }) => {
    console.log('cast:', cast)
    return (
        <>
            <ul className={styles.list}>
                {cast && cast.map(iteam => (<li key={iteam.id} >
                    <img className={styles.img} src={`${baseUrlForImage}${iteam.profile_path}`} alt={iteam.name}></img>
                    <p>{iteam.name}</p>
                    <p>Character: {iteam.character}</p>
                </li>))}
            </ul>
        </>
    )
}

export default CastComponent;

CastComponent.propTypes = {

    cast: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_path: PropTypes.string,
        name: PropTypes.string.isRequired,
    }))
}