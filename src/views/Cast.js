
import React, { Component } from 'react';
import CastComponent from '../components/CastComponent';
import tvAPI from '../seervices/tv-api';


const getIdFromProps = props => props.match.params.movieId;

class Cast extends Component {

    state = {
        credits: null,
    }

    componentDidMount() {
        const id = this.props.match.params.movieId;
        tvAPI.fetchCredits(id).then(credits => this.setState({ credits }))
    }

    render() {
        const { credits } = this.state;

        const baseUrlForImage = 'https://image.tmdb.org/t/p/w92'

        return (
            <>
                <CastComponent {...credits} />          
            </>
        )
    }
}

export default Cast;
