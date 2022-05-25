import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import  { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import moment from 'moment';

const date= moment().format('MMM DD, YYYY');
const text = '<p>Cisco and Pure Storage deliver FlashStack, a modern converged infrastructure (CI) solution that is smarter, simpler, smaller -and more efficient than ever before. FlashStack is virtual machine-aware and hybrid cloud-ready, while retaining the predictability and efficiency advantages of dedicated compute and storage tiers. With FlashStack customers can modernize their operational model, stay ahead of business demands, and protect and secure their applications and data, regardless of the deployment model on premises, at the edge, or in the cloud. THE FLASHSTACK ADVANTAGE • Simple no trade-off architecture eliminates disparate hardware silos. Proven, validated inter-operability and for confident application deployment. Infrastructure for both traditional and converged operating models so you can consolidate operations at your pace • Converged infrastructure for multi-hypervisor, bare metal or container deployments.Built for the cloud, including full integration with cloud platforms from Cisco, VMware, OpenStack and othersAnswered</p>';

const SearchResult = () => ( 
    <div class="container">
<div className={styles.searchOutline}>
<div class="row">
  <div className={styles.innerDiv}>
    <span className={styles.sharingButton}>
    <i class="fa-solid fa-share-nodes"></i>
    </span>
    <span className={styles.heartButton}>
    <i class="fa-solid fa-heart"></i>
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
<div className={styles.paste}>
<span className={styles.reqImg}>
      <img src={require('../images/help-support.jpg')}></img>
    </span>
<span> 
  <i class="fa-solid fa-paste"></i>
    </span>

    </div>
</div>
</div>
<div class="row">
<div className={styles.answeredInfo}>
  <span className='answeredBy'>Answered</span>
  <span className='datestamp'>{date}</span>

</div>
</div>
            <span className={styles.userScore}>
              <FontAwesomeIcon icon="fa-solid fa-award" />
            </span>
  
            <div class='row'>
              <div className={styles.answerBlock}>
    <p>Ans text </p>
  </div>
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
