function Main() {

const handleEditAvatarClick = () => {
  document.querySelector('.popup_type_update-avatar').classList.add('popup_display_flex')
}

const handleEditProfileClick = () => {
  document.querySelector('.popup_type_edit-profile').classList.add('popup_display_flex')
}

const handleAddPlaceClick = () => {
  document.querySelector('.popup_type_add-place').classList.add('popup_display_flex')
}

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src="#" alt="аватарка" />
          <button className="profile__avatar-button" onClick={handleEditAvatarClick}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Имя</h1>
          <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
          <p className="profile__subtitle">О себе</p>
        </div>
        <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}>
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