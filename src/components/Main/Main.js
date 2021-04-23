function Main(props) {

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src="#" alt="аватарка" />
          <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Имя</h1>
          <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">О себе</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}>
        </button>
      </section>

      <section className="elements content__elements">
        <ul className="elements__cards">

        </ul>
      </section>
    </main>
  );
}

export default Main;