import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SearchResult = () => ( 
    
     <div class="container">
  <div className={styles.searchOutline}>
  <div class="row">
    <div className={styles.innerDiv}>
      <span className={styles.sharingButton}>
        <FontAwesomeIcon icon icon="share"></FontAwesomeIcon>
      </span>
  </div>
  </div>
  </div>

  </div>
);
SearchResult.propTypes = {};

SearchResult.defaultProps = {};

export default SearchResult;
