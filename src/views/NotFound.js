import React from 'react';
import imagePath from '../images/404.jpg';
import {Link} from 'react-router-dom';

const styles = {
    container: { textAlign: 'center'},
};

const NotFound = () =>(
    <div style={styles.container}>
        <img src={imagePath}></img>
        <p>Упс, кажется Вы потерялись. Вот <Link to="/">ссылка на главную страницу</Link></p>
    </div>
)

export default NotFound;