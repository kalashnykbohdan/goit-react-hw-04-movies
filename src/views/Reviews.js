import React, { Component } from 'react';
import ReviewsComponent from '../components/ReviewsComponent';
import tvAPI from '../seervices/tv-api';


const getIdFromProps = props => props.match.params.movieId;

class Reviews extends Component {

    state = {
        reviews: []
    }

    componentDidMount() {
        const id = this.props.match.params.movieId;
        tvAPI.fetchReviews(id).then(reviews => this.setState({ reviews }))
    }

    render() {
        const { reviews } = this.state;
        return (
            <>
                <ReviewsComponent onReviews={reviews} />
            </>
        )
    }
}

export default Reviews;