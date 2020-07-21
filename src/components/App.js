// import React from 'react';
import {Switch, Route} from 'react-router-dom'
import React, { lazy, Suspense } from 'react';
import Home from '../views/HomePage';
import NotFound from '../views/NotFound';

import Layout from './Layout'
import routes from '../routes'

const AsyncMovieDetails = lazy(() => import('../views/MovieDetails' /* webpackChunkName: "MovieDetailsPage" */),);
const AsyncMovies= lazy(() => import('../views/Movies' /* webpackChunkName: "MoviesPage" */),);

const App = () =>
  <Layout>
    {/* <Navigation/> */}
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
          <Route path={routes.home} exact component={Home}/>
          <Route path={routes.movies} exact component={AsyncMovies}/>
          <Route path={routes.movieDetails} component={AsyncMovieDetails}/>

          
          <Route component={NotFound}/>
        </Switch>
      </Suspense>
  </Layout>;

export default App;
