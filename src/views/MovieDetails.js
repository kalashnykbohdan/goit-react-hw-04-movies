  
import React, { Component, lazy, Suspense } from 'react';
import tvAPI from "../seervices/tv-api"
import routes from '../routes'
import '../index.css'

import NavigDetailesMovie from '../components/Navigation/NavigDetailesMovie';
import {Switch, Route} from 'react-router-dom'

const AsyncCast = lazy(() => import('./Cast' /* webpackChunkName: "Cast" */),);

const AsyncReviews = lazy(() => import('../views/Reviews' /* webpackChunkName: "Reviews" */),);

export default class MovieDetails extends Component {
    state = { movie: null }

    componentDidMount(){
        tvAPI.fetchMovieDetails(this.props.match.params.movieId).then(movie => this.setState({movie}));
    }

    handleGoBack = () => {

        const {state} = this.props.location;

        if(state && state.from){

            return this.props.history.push(state.from);
        }
        this.props.history.push(routes.movies);
    }
 
    render() {
        const baseUrlForImage = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
        const movieId = this.props.match.params.movieId;
        return (
            <>

                <button type="button" onClick={this.handleGoBack}>←Go back</button>

                {this.state.movie && (
                
                <div>
                    <img 
                        src={`${baseUrlForImage}${this.state.movie.backdrop_path}`} 
                        alt={this.state.movie.original_title} 
                        className="imgMovieDrtails"
                    />
                    <h1>{this.state.movie.title}</h1>
                </div>)}
                <hr/>
                <NavigDetailesMovie/>

                <hr/>
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Switch>
                            <Route path={`${this.props.match.path}/cast`} component={AsyncCast} />
                            <Route path={`${this.props.match.path}/reviews`} component={AsyncReviews} />
                    </Switch>
                </Suspense>
            </>
        );
    }
}
