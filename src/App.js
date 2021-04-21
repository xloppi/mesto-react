import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page__content">
    <header className="header">
      <img className="header__logo" src="./images/logo.svg" alt="логотип страницы Место" />
    </header>
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src="#" alt="аватарка" />
          <button className="profile__avatar-button"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Имя</h1>
          <button type="button" className="profile__edit-button"></button>
          <p className="profile__subtitle">О себе</p>
        </div>
        <button type="button" className="profile__add-button">
        </button>
      </section>

      <section classNameName="elements content__elements">
        <ul className="elements__cards">

        </ul>
      </section>

    </main>
    <footer className="footer">
      <p className="footer__copyrigth">&copy; 2020 Mesto Russia</p>
    </footer>

    <section className="popup popup_edit-profile">
      <div className="popup__container">
        <h2 className="popup__title">Редактировать профиль</h2>
        <form name="profile-edit" className="popup__form popup__form_profile-edit" novalidate>
          <fieldset className="popup__fieldset">
            <input type="text" name="name" id="name-input" className="popup__input popup__input_type_name" required minlength="2" maxlength="40" />
            <span className="popup__input-error name-input-error"></span>
            <input type="text" name="about" id="job-input" className="popup__input popup__input_type_job"  required minlength="2" maxlength="200" />
            <span className="popup__input-error job-input-error"></span>
          </fieldset>
          <button type="submit" className="popup__submit popup__submit-edit-profile">Сохранить</button>
        </form>
        <button type="button" className="popup__close popup__close_edit-profile"></button>
      </div>
    </section>

    <section className="popup popup_add-place">
      <div className="popup__container">
        <h2 className="popup__title">Новое место</h2>
        <form name="add-place" className="popup__form popup__form_add-place" novalidate>
          <fieldset className="popup__fieldset">
            <input type="text" name="name" id="name-mesto-input" className="popup__input popup__input_type_place" placeholder="Название" required minlength="2" maxlength="20" />
            <span className="popup__input-error name-mesto-input-error"></span>
            <input type="url" name="link" id="link-mesto-input" className="popup__input popup__input_type_link" required placeholder="Ссылка на картинку" />
            <span className="popup__input-error link-mesto-input-error"></span>
          </fieldset>
          <button type="submit" className="popup__submit popup__submit-add-place">Создать</button>
        </form>
        <button type="button" className="popup__close popup__close_add-place"></button>
      </div>
    </section>

    <section className="popup popup_viewing-place-photo">
      <div className="popup__container-photo">
        <figure className="popup__figure">
          <img className="popup__photo-image" src="#" alt="#" />
          <figcaption className="popup__photo-caption"></figcaption>
          </figure>
        <button type="button" className="popup__close popup__close_place-photo"></button>
      </div>
    </section>

    <section className="popup popup_submit-delete">
      <div className="popup__container">
        <h2 className="popup__title">Вы уверены?</h2>
        <button type="button" className="popup__submit popup__close-delete-card">Да</button>
        <button type="button" className="popup__close"></button>
      </div>
    </section>

    <section className="popup popup_update-avatar">
      <div className="popup__container">
        <h2 className="popup__title">Обновить аватар</h2>
        <form name="add-place" className="popup__form popup__form_edit-avatar" novalidate>
          <fieldset className="popup__fieldset">
            <input type="url" name="link" id="link-avatar-input" className="popup__input popup__input_type_link" required placeholder="Ссылка на аватар" />
            <span className="popup__input-error link-avatar-input-error"></span>
          </fieldset>
          <button type="submit" className="popup__submit popup__submit-edit-avatar">Сохранить</button>
        </form>
        <button type="button" className="popup__close popup__close_add-place"></button>
      </div>
    </section>

    <template className="elements__card_template">
      <li className="elements__card">
        <img className="elements__card-image" src="#" alt="#" />
        <div className="elements__card-description">
          <h2 className="elements__card-title"></h2>
          <div className="elements__card-like-section">
            <button type="button" className="elements__card-like-button"></button>
            <p className="elements__card-like-counter">1</p>
          </div>
        </div>
        <button type="button" className="elements__card-delete-button"></button>
      </li>
    </template>

  </div>
  );
}

export default App;
