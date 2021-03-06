import React, { Component, useState, useEffect, Link } from 'react';
import SearchResult from '../SearchResult/SearchResult';
import styles from '../Trending/SearchResult.module.css';
import moment from 'moment';
import Trend from '../Trending/trending.json';
import PropTypes from 'prop-types';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavigationBar from '../NavigationBar/NavigationBar';

function TrendData(props) {
  Trend.map((trendingData, ind) => {
    return (
      <div key={ind}>
        <Trending renderData={trendingData} />
      </div>
    )
  })
}

const regex = /(<([^>]+)>)/ig;

const questionsPerPage = 6;
let arrayForHoldingQuestions = [];

const Button = () => {
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(6);

  const loopWithSlice = (start, end) => {
    const slicedPosts = Trend.slice(start, end);
    arrayForHoldingQuestions = [...arrayForHoldingQuestions, ...slicedPosts];
    setPostsToShow(arrayForHoldingQuestions);
  };
}

const Trending = ({ renderData }) => {
  const [showContent, hideContent] = useState(false);
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => {
    setShowShow(!showShow)
    return (<div className={styles.expandDivContent}></div>)
  };

  const hideSearchIcon = () => { return <i class="fa-solid fa-magnifying-glass" id={styles.searchIcon} style={{ display: 'none' }} ></i> };

  const dateformat = () => { return (moment(Trend.answeredTimestamp).fromNow()) };

  const [visibleQuestions, setVisibleQuestions] = useState(6);
  const handleClick = () => {
    setVisibleQuestions(prevVisibleQuestions => prevVisibleQuestions + 4)
  }


  return (
  <div class="container">
      <NavigationBar />
      <div class="container-fluid">
      <div className={styles.searchbar}>
        <div className={styles.midcontainer}>
          <div class="container">
            <div class="row">
              <div class="input-group mb-3" className={styles.buttonAns}>
                <div class="input-group mb-3" className={styles.buttonAns}>
                  <input maxLength="200" type="text" class="form-control" placeholder="Ask a Question" aria-label="Ask a Question" aria-describedby="basic-addon2" />
                  <span class="input-group-text" id="basic-addon2">Get Answers</span>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <span className={styles.domains}>Domain covered: VSP 5000, E Series (E990,E790,E590), Ops Center, HNAS 5000</span>
                  </div>
                  <div class="col-md-4">
                    <span className={styles.characters}>
                      Characters: </span>
                    <span className={styles.charAt}>200/200</span>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
      </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <h3 className={styles.TrendingText}>
            Trending Questions
          </h3>

        </div>

        <div class="col-md-3">

          <label for="inputPassword2" class="visually-hidden">Password</label>
          <input class="form-control " id={styles.inputPassword2} placeholder="Search..." onKeyDown={hideSearchIcon} />
          <i class="fa-solid fa-magnifying-glass" id={styles.searchIcon}></i>
        </div>
        <div class="col-md-3">
          <span id={styles.sortBy}>Sort by:</span>
          <select class="form-select" className={styles.sortDropbox} aria-label="Default select example">
            <option selected>Recently Answered</option>
            <option value="1">Oldest (Answered)</option>
            <option value="2">Recently Asked</option>
            <option value="3">Oldest asked</option>
            <option value="4">Most Viewed</option>
          </select>
        </div>
        <div class="col-md-3">
          <span id={styles.domain}>Domain:</span>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="row">
        {Trend.slice(0, visibleQuestions).map((question) =>
          <div class="row">
            <div class="col-md-12" className={styles.questionList}>
              <div className={styles.innerDiv}>
                <span className={styles.sharingButton}>
                  <i class="fa-solid fa-share-nodes"></i>
                </span>
                <span className={styles.heartButton}>
                  <i class="fa-solid fa-heart"></i>
                </span>
                <h2 className={styles.headTitle}>{question.text}</h2>
                <div class="row">
                  <div class="input-group-prepend" className={styles.additionalCont}>
                    {question.additionalContext && <span class="input-group-text" id="basic-addon3">{question.additionalContext}</span>}
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2">
                    <div className={styles.tagDomain}>
                      <h3>Domain<span className={styles.label}>{question.domain}</span></h3>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div className={styles.tagDomain}>
                      {question.relatedCount > 0 && <h3 className={styles.relatedQuestions}>Related Questions: <span className={styles.relatedCountNumber}>{question.relatedCount}</span></h3>}
                    </div>
                  </div>


                </div>
                <div class="row">
                  <div class="col-md-10">
                    <div className={styles.tagsinQue}>
                      {(question.tags).length > 0 && <h3>Tags: {question.tags.map((tag) => { return (<span className={styles.tagLabel}>{tag}</span>) })}</h3>}
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    {question.answersList && question.answersList.map((que) => {
                      const result = que.answer.replace(regex, ''); return (
                        <div className={styles.answerDiv}>
                          <div className={styles.expertInfo}>
                            <img class="rounded-circle" alt="40x40" src={require('../../images/sample.jpg')}
                              data-holder-rendered="true"></img>
                            <div class="row">
                              <div class={styles.userInfo}>
                                <span className={styles.userName}>
                                  {que.expertFirstName}&nbsp;{que.expertLastName}
                                </span>
                                <div className={styles.paste}>
                                  <span className={styles.reqImg}>
                                    <img src={require('../../images/help-support.jpg')} className={styles.updateIconimg}></img>
                                  </span>
                                  <span>
                                  </span>

                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div className={styles.answeredInfo}>
                                <span className='answeredBy'>Answered</span>
                                <span className='datestamp'>{moment(que.answeredTimestamp).fromNow()}</span>

                              </div>
                            </div>
                            <span className={styles.userScore}>
                              {/* /* <FontAwesomeIcon icon="fa-solid fa-award" /> */}
                            </span>
                            <div class='row'>
                              <div className={styles.answerBlock}>
                                <p>{((que.answer).length >= 550 && <div className={styles.fader} show={showShow} ><div className={styles.contentVar} ><p>{result}</p></div></div>)}{(que.answer).length < 550 && <p>{que.answer}</p>}</p>
                                <div class="row">
                                  {(que.answer).length >= 550 && <span className={styles.showMore} role="button" type="button" onClick={toggleShow}><i class="fa-solid fa-angle-down"></i>Show More</span>}
                                </div>
                                <span className='datestamp'>{dateformat}</span>

                              </div>
                            </div>
                            <span className={styles.userScore}>
                              {/* /* <FontAwesomeIcon icon="fa-solid fa-award" /> */}
                            </span>
                            <div class='row'>
                              <div className={styles.answerBlock}>
                                <p>{(que.answer).length >= 550 && <div className={styles.fader}><div className={styles.contentVar}><p>{que.answer}</p></div></div>}</p>
                                <div class="row">
                                  {(que.answer).length >= 550 && <span className={styles.showMore} role="button" type="button"><i class="fa-solid fa-angle-down"></i>Show More</span>}
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-3 pull-left">
                                <span className={styles.viewCount}>
                                  <i class="fa fa-eye" aria-hidden="true"></i>
                                </span>
                                <span className={styles.viewScore}>
                                  {que.popularityScore}
                                </span>
                              </div>
                              <div class="col-md-9 float-right">
                                <div class="pull-right">
                                  <div>
                                    {que.voteInfo.upvoteCount > 0 ? <span className={styles.upvoteButton}><i class="fa-solid fa-thumbs-up"></i><span className={styles.upvoteLikeText}> Like</span></span> : <span className={styles.upvoteButton}><i class="fa-solid fa-thumbs-up"></i><span className={styles.upvoteLikeText}>{que.voteInfo.upvoteCount}</span></span>}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div class="row">
        <button type="button" class="btn btn-success" className={styles.loadMoreButton} onClick={handleClick}>Load More</button>
      </div>
      </div>
  )
}

Trending.propTypes = {};

Trending.defaultProps = {};

export default Trending;
