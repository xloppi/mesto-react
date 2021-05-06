import React from 'react';
import {useState, useEffect } from 'react';
import api from '../../utils/api';
import Card from '../Card/Card';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards()
    .then(data => {
      const dataCards = data.map((item) => ({
        id: item._id,
        name: item.name,
        url: item.link,
        likes: item.likes,
        owner: item.owner,
      }));
      setCards(dataCards);
    })
    .catch((err) => {
      console.log('Ошибка: ', err);
    });
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={currentUser.avatar} alt="аватарка" />
          <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}>
        </button>
      </section>

      <section className="elements content__elements">
        <ul className="elements__cards">
          {cards.map(card => <Card key={card.id} card={card} onCardClick={props.onCardClick} />)}
        </ul>
      </section>
    </main>
  );
}

export default Main;
