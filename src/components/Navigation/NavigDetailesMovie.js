import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Navigation.module.css';
// import '../index.css';


class NavigDetailesMovie extends Component {
    
    render(){

    return(
        <div className={styles.wrapperLinkDetailsMove}>
            <ul>
            <li>
                <Link to={{
                    pathname: `${this.props.match.url}/cast`, 
                    state: { from: this.props.location }
            }}>Cast</Link>
            </li>
            <li>
                <Link to={{
                        pathname: `${this.props.match.url}/reviews`, 
                        state: { from: this.props.location }
                }}>Reviews</Link>
            </li>
            </ul>
        </div>
    )
    }
}


export default withRouter (NavigDetailesMovie);



