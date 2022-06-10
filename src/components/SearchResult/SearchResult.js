import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import  { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import moment from 'moment';

/*const date= moment().format('MMM DD, YYYY');*/


const SearchResult = (props)=>{
  return(
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
    <h2 className={styles.headTitle}>{props.data.question}</h2>
    <div class="input-group-prepend">
  {props.data.additionalContext&&<span class="input-group-text" id="basic-addon3">{props.data.additionalContext}</span>}
</div>
</div>
<div class="row">
<div class="col-md-2">
<div className={styles.tagDomain}>
<h3>Domain<span className={styles.label}>{props.data.domain}</span></h3>
</div>
</div>
<div class="col-md-2">
<div className={styles.tagsinQue}>
<h3>Tags:<span className={styles.tagLabel}>testing</span><span className={styles.tagLabel}>selenium</span></h3>
</div>
</div>
</div>
<div class="col-md-12">
{props.data.answer && props.data.answer.map((answers)=>{return(<div className={styles.answerDiv}>
  <div className={styles.expertInfo}>
<img class="rounded-circle" alt="40x40" src={require('../../images/sample.jpg')}
        data-holder-rendered="true"></img>
        <div class="row">
<div class={styles.userInfo}>
<span className={styles.userName}>
    {answers.firstName}{props.ans.lastName}
</span>
<div className={styles.paste}>
<span className={styles.reqImg}>
      <img src={require('../../images/help-support.jpg')} className={styles.updateIconimg}></img>
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
  <span className='datestamp'>{moment(props.data.expertAnsweredTimeStamp).format('MMM DD, YYYY')}</span>

</div>
</div>
            <span className={styles.userScore}>
              <FontAwesomeIcon icon="fa-solid fa-award" />
            </span>
            <div class='row'>
              <div className={styles.answerBlock}>
      <p>{props.answer.answerText}</p>
  </div>
</div>
</div>
</div>
)})}
</div>
</div>
</div>
</div>
)}
SearchResult.propTypes = {};

SearchResult.defaultProps = {};

export default SearchResult;
