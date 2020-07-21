import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

function Layout({title, children}){
    return (
        <section>
            {title && <h2>{title}</h2>}
            <Header/>
            {children}
            
        </section>
    );
}

Layout.defaultProps = {
    title: '',
}

Layout.propTypes = {
    title:PropTypes.string.isRequired,
}

export default Layout;
