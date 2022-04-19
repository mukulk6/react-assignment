import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SearchResult = () => ( 
    
     <div class="container">
  <div className={styles.searchOutline}>
  <div class="row">
    <div className={styles.innerDiv}>
      <span className={styles.sharingButton}>
      <FontAwesomeIcon icon={["fas", "share-nodes"]} />
      </span>
      <span className={styles.sharingButton}>
      <FontAwesomeIcon icon="fa-solid fa-heart" />
      </span>
      <h2 className={styles.headTitle}>What is PaaS</h2>
      <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon3">services</span>
  </div>
</div>
<div className={styles.tagDomain}>
  <h3>Domain <span class="label">Terms & Conditions</span></h3>
  
</div>
  </div>
  </div>
  </div>
);
SearchResult.propTypes = {};

SearchResult.defaultProps = {};

export default SearchResult;
