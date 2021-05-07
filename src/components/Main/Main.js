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

  const handleCardLike = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card.id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c.id === card.id ? {
          id: newCard._id,
          name: newCard.name,
          url: newCard.link,
          likes: newCard.likes,
          owner: newCard.owner,
        } : c));
    })
    .catch((err) => {
      console.log('Ошибка: ', err);
    });
  }


  //ИСПРАВИТЬ ПОСЛЕ ФУНКЦИИ ДОБАВЛЕНИЯ КАРТОЧКИ
  const handleCardDelete = (card) => {
    deletePlaceTask(card.id).then((res) => {
      setCards((state) => state.filter((c) => c.id !== res._id))
    })
    .catch((err) => {
      console.log('Ошибка: ', err);
    });
  }

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
          {cards.map(card => <Card key={card.id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />)}
        </ul>
      </section>
    </main>
  );
}

export default Main;
