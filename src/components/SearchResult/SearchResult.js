import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

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
  <h3>Domain<span className={styles.label}>Terms & Conditions</span></h3>
</div>
<div class="col-md-12">
  <div className={styles.answerDiv}>
    <div className={styles.expertInfo}>
  <img class="rounded-circle" alt="40x40" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
          data-holder-rendered="true"></img>
  <div class={styles.userInfo}>
  <span className={styles.userName}>
      Tejal Kunjir
  </span>
  </div>
  </div>
  </div>
</div>
  </div>
  </div>
  </div>
);
SearchResult.propTypes = {};

SearchResult.defaultProps = {};

export default SearchResult;
