import React from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function Card(props) {

  //{key, card, onCardClick, onCardLike}

  const currentUser = React.useContext(CurrentUserContext);
  //console.log(card.owner._id);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardDeleteButtonClassName = (
    `elements__card-delete-button ${isOwn && 'elements__card-delete-button_visible'}`
  );
  const cardLikeButtonClassName = (
    `elements__card-like-button ${isLiked && 'elements__card-like-button_active'}`
  );

  const handleClick = () => {
    props.onCardClick(props.card);
  }

  const handleLikeClick = () => {
    props.onCardLike(props.card);
  }

  return (
    <li className="elements__card">
      <img className="elements__card-image" src={props.card.url} alt={props.card.name} onClick={handleClick} />
      <div className="elements__card-description">
        <h2 className="elements__card-title">{props.card.name}</h2>
        <div className="elements__card-like-section">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <p className="elements__card-like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button type="button" className={cardDeleteButtonClassName}></button>
    </li>
  );
}

export default Card;
