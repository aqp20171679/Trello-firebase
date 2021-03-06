import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';
import { addCard, addList } from './actions.js';
import Form from './Form.js';
import Header from './Header.js';
import { Redirect } from 'react-router-dom';

class BoardUser extends React.Component {
  render() {
    const { userActual, successLogin, team, iTeam, board, iBoard } = this.props
    return (
      <div>
        {!successLogin && <Redirect to='/' />}
        <Header userActual={userActual} />
        <h3 className='txt-white'>{team.name}</h3>
        <h4 className='txt-white'>{board.name}</h4>
        {userActual && board && team && <div className='boards board-actual'>
          {board.lists &&
            board.lists.map((list, iList) => <div key={iList} className='board list'>
              <h4>{list.name}</h4>
              {list.cards &&
                list.cards.map((card, iCard) => <div key={iCard} className='card'>
                  <p>{card}</p>
                </div>)
              }
              <Form classN='form-cards' add={addCard} userActual={userActual} iTeam={iTeam} iBoard={iBoard} iList={iList} placeholder='Add Card...' />
            </div>)
          }
          <Form classN='form-lists' add={addList} userActual={userActual} iTeam={iTeam} iBoard={iBoard} placeholder='Add List...' />
        </div>}
      </div>
    );
  }
}
export default BoardUser;