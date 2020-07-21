/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import styles from './moviesList.module.css';
import PropTypes from 'prop-types';

class MoviesList extends Component {
    render() {
        const { movies } = this.props
        return (
            <>
                <ul className={styles.list}>
                    {movies.map(movie => {
                        if (movie.title !== 'UNdefined') {
                            return (<li key={movie.id}>
                                <Link to={{
                                    pathname: `/movies/${movie.id}`,
                                    state: { from: this.props.location },
                                }}>{movie.title}</Link>
                            </li>)
                        }
                    })}
                </ul>
            </>
        )
    }
}

export default withRouter(MoviesList);

MoviesList.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
    }))
}
