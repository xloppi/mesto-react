import {useState, useEffect } from 'react';
import api from '../../utils/api';
import Card from '../Card/Card';

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(data => {
      setUserName(data[0].name);
      setUserDescription(data[0].about);
      setUserAvatar(data[0].avatar);
      console.log(data[1]);
      const dataCards = data[1].map((item) => ({
        id: item._id,
        name: item.name,
        url: item.link,
        likes: item.likes.length
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
          <img className="profile__avatar" src={userAvatar} alt="аватарка" />
          <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
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
