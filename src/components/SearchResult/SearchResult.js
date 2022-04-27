import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import  { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import moment from 'moment';

const date= moment().format('MMM DD, YYYY');

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
<div class="row">
  <div class="col-md-2">
<div className={styles.tagDomain}>
  <h3>Domain<span className={styles.label}>Terms & Conditions</span></h3>
</div>
</div>
<div class="col-md-2">
<div className={styles.tagsinQue}>
  <h3>Tags:<span className={styles.tagLabel}>testing</span><span className={styles.tagLabel}>black-box</span></h3>
</div>
</div>
</div>
<div class="col-md-12">
  <div className={styles.answerDiv}>
    <div className={styles.expertInfo}>
  <img class="rounded-circle" alt="40x40" src={'../../images/sample.jpg'}
          data-holder-rendered="true"></img>
          <div class="row">
  <div class={styles.userInfo}>
  <span className={styles.userName}>
      Tejal Kunjir
  </span>
  </div>
  </div>
  <div class="row">
  <div className={styles.answeredInfo}>
  
    <span>Answered</span>
    <span>{date}</span>
   
  </div>
  </div>
  <span className={styles.userScore}>
  <FontAwesomeIcon icon="fa-solid fa-award" />
  </span>
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
