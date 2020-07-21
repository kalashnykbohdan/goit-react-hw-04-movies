import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import getQueryParams from '../utils/get-query-params';
import Searchbox from '../components/Searchbox';
import tvAPI from "../seervices/tv-api"

import MoviesList from '../components/MoviesList';

export default class Movies extends Component {
    state = { 
        movies: [],
     }

     componentDidMount(prevProps){
        const {query} = getQueryParams(this.props.location.search);

        if(query){
            this.fetchMovies(query);
        // return;
        }
        // this.fetchMovies("batman");
     }

     componentDidUpdate(prevProps){
        const {query: prevQuery} = getQueryParams(prevProps.location.search);
        const {query: nextQuery} = getQueryParams(this.props.location.search);

        if(prevQuery !== nextQuery){
            this.fetchMovies(nextQuery);
        // return;
        }
        // this.fetchMovies("batman");
     }

     fetchMovies = query => {
        tvAPI
        .fetchMoviesWithQuery(query)
        .then(movies => this.setState({movies}));
     }

     handleChangeQuery = query => {
        this.props.history.push({
            pathname: this.props.pathname,
            search: `query=${query}`,
        });
    }

    render() {
        
        const {movies} = this.state;
        const {match} = this.props;

        return (
            <>
                <h2>Movies</h2>

                <Searchbox onSubmit={this.handleChangeQuery}/>
                <MoviesList movies={movies} />
            </>
        );
    }
}

