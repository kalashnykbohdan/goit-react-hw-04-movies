import React, { Component } from 'react';
import tvAPI from "../seervices/tv-api"
import MoviesList from '../components/MoviesList';

class HomePage extends Component {
    state = { moviesTranding: [] }

    componentDidMount() {
        tvAPI.fetchTrendingMovie().then(results => this.setState({ moviesTranding: results }));
    }

    render() {
        const { moviesTranding } = this.state;
        return (
            <div>
                <h2>Trending today</h2>
                <MoviesList movies={moviesTranding} />

            </div>
        )
    }

}
export default HomePage;