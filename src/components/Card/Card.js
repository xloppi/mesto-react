function Card(props) {

  const handleClick = () => {
    props.onCardClick(props.card);
  }

  return (
    <li className="elements__card">
      <img className="elements__card-image" src={props.card.url} alt={props.card.name} onClick={handleClick} />
      <div className="elements__card-description">
        <h2 className="elements__card-title">{props.card.name}</h2>
        <div className="elements__card-like-section">
          <button type="button" className="elements__card-like-button"></button>
          <p className="elements__card-like-counter">{props.card.likes}</p>
        </div>
      </div>
      <button type="button" className="elements__card-delete-button"></button>
    </li>
  );
}

export default Card;
