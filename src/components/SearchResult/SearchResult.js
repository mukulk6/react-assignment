import React, { Component ,useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import Trending from '../Trending/Trending';
import moment from 'moment';
import {  BrowserRouter, Link} from "react-router-dom";
import Modal from '../Modal/Modal';
import Button from 'react-bootstrap/Button';
import ModalReusable from '../Modal/Modal';

const dateformat = (props) =>{
  moment(props.data.answers.answeredTimestamp).fromNow();
}

function EpochToDate(epoch){
  if (epoch < 10000000000)
      epoch *= 1000; // convert to milliseconds (Epoch is usually expressed in seconds, but Javascript uses Milliseconds)
  var epoch = epoch + (new Date().getTimezoneOffset() * -1); //for timeZone        
  return new Date(epoch);
}

const SearchResult = (props)=>{
  return(
<div class="container">
<nav class="navbar navbar-default navbar-light bg-light navbar-expand-lg fixed-top">
  <div class="container" className={styles.containerNav}>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#" className={styles.brandImg}><img src={require('../../images/vizerto.png')}></img>
    </a>
    <ul class="navbar-nav ms-auto" className={styles.navigationBar}>
      <li class="nav-item active">
      <i class="fa fa-search" aria-hidden="true"></i>
        <a class="nav-link" href="#">Ask a Question <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <div class="dropdown show" role="button">
        <div data-toggle="dropdown" class="dropdown-toggle" id="dropdownMenuLink" 
         aria-haspopup="true" aria-expanded="false">
      <i class="fa fa-fire" aria-hidden="true" data-bs-target="#dropdownMenuLink"></i>
        <Link to = "/trending" element={<Trending />} />Trending
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
        </div>
        </div>
      </li>
      <li class="nav-item">
      <i class="fa fa-question-circle-o"></i>
        <a class="nav-link" href="#">My Searches</a>
      </li>
      <li class="nav-item">
        <div class={styles.fireIcon}>
        <i class="fa fa-fire"></i>
      <span>2/3</span>
      </div>
      </li>
      <li class="nav-item">
        <div className={styles.dropNotification}>
        <i class="fa fa-bell"></i>
        </div>
      </li>
      <li class="nav-item">
        <div class="dropdown dropdown-right">
          <div className={styles.userinfo}>
            <div class="clearfix">
            <span>Mukul Kale</span>
            <img src={require('../../images/profile.jpg')}></img>
            <select class="form-select form-select-sm" aria-label=".form-select-lg example">
  <option value="1">Admin</option>
  <option value="2">CM</option>
  <option value="3">Expert</option>
  <option selected value="4">Seeker</option>
</select>          
            </div>
            </div>
        </div>
      </li>
      <li class="nav-item">
        <div className={styles.username}>
          <span>Group</span>
          <select class="form-select form-select-sm" aria-label=".form-select-lg example">
  <option value="1">Alpha</option>
  <option value="2">GTech</option>
  </select>
        </div>
      </li>
    </ul>
    </div>
  </div>
</nav>
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
  {(props.data.tags).length!=null && <h3>Tags:<span className={styles.tagLabel}>{props.data.tags}</span></h3>}
</div>
</div>
</div>
<div class="col-md-12">
{props.data.answers && props.data.answers.map((answer)=>{return(
<div className={styles.answerDiv}>
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
  <span className='datestamp'>{dateformat}</span>

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
  <ModalReusable question={answer.answerText} />
      </div>
  </div>
</div>
</div>
)})}
</div>
</div>
</div>
<div class="row">

</div>
</div>
)}
SearchResult.propTypes = {};

SearchResult.defaultProps = {};

export default SearchResult;
