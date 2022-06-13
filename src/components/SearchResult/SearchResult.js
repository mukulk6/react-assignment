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
    <div class="input-group-prepend" className={styles.additionalCont}>
  {props.data.additionalContext&&<span class="input-group-text"  id="basic-addon3">{props.data.additionalContext}</span>}
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
{props.data.answers && props.data.answers.map((answer)=>{return(<div className={styles.answerDiv}>
  <div className={styles.expertInfo}>
<img class="rounded-circle" alt="40x40" src={require('../../images/sample.jpg')}
        data-holder-rendered="true"></img>
        <div class="row">
<div class={styles.userInfo}>
<span className={styles.userName}>
    {answer.expert.firstName}&nbsp;{answer.expert.lastName}
</span>
<div className={styles.paste}>
<span className={styles.reqImg}>
      <img src={require('../../images/help-support.jpg')} className={styles.updateIconimg}></img>
    </span>
<span> 
  <i class="fa-solid fa-paste" id="pasteIcon"></i>
    </span>

    </div>
</div>
</div>
<div class="row">
<div className={styles.answeredInfo}>
  <span className='answeredBy'>Answered</span>
  <span className='datestamp'>{moment(answer.answeredTimestamp).format('MMM DD, YYYY')}</span>

</div>
</div>
            <span className={styles.userScore}>
              <FontAwesomeIcon icon="fa-solid fa-award" />
            </span>
            <div class='row'>
              <div className={styles.answerBlock}>
      <p>{answer.answerText}</p>
  </div>
</div>
<div class="row">
  <div class="col-md-3 pull-left">
    <span className={styles.viewCount}>
    <i class="fa fa-eye" aria-hidden="true"></i>
    </span>
    <span className={styles.viewScore}>
    {answer.popularityScore}
    </span>
    <span className={styles.ratingTitle}>Rating:</span>
    <span>
      <ul className={styles.ratingStars}>
        <li><i class="fa-solid fa-star"></i></li>
        <li><i class="fa-solid fa-star"></i></li>
        <li><i class="fa-solid fa-star"></i></li>
        <li><i class="fa-solid fa-star"></i></li>
        <li><i class="fa-solid fa-star"></i></li>
      </ul>
      </span>
    </div>
    <div class="col-md-9 float-right">
    <div class="pull-right">
    <div className={styles.helpfulButton}>
    <span>Helpful<img src={require('../../images/helpful.png')}></img></span>
    </div>
  </div>
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
