
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';


function App() {
  return (
    <div className="page">
      <div className="page__content">
      <Header />
      <Main />
      <Footer />

      <PopupWithForm name="update-avatar" title="Обновить аватар" buttonTitle="Сохранить">
        <input type="url" name="link" id="link-avatar-input" className="popup__input popup__input_type_link" required placeholder="Ссылка на аватар" />
        <span className="popup__input-error link-avatar-input-error"></span>
      </PopupWithForm>
      
      <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonTitle="Сохранить">
        <input type="text" name="name" id="name-input" className="popup__input popup__input_type_name" required minLength="2" maxLength="40" />
        <span className="popup__input-error name-input-error"></span>
        <input type="text" name="about" id="job-input" className="popup__input popup__input_type_job"  required minLength="2" maxLength="200" />
        <span className="popup__input-error job-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="add-place" title="Новое место" buttonTitle="Создать">
        <input type="text" name="name" id="name-mesto-input" className="popup__input popup__input_type_place" placeholder="Название" required minLength="2" maxLength="20" />
        <span className="popup__input-error name-mesto-input-error"></span>
        <input type="url" name="link" id="link-mesto-input" className="popup__input popup__input_type_link" required placeholder="Ссылка на картинку" />
        <span className="popup__input-error link-mesto-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="submit-delete" title="Вы уверены?" buttonTitle="Да">
        <button type="button" className="popup__submit popup__close-delete-card">Да</button>
      </PopupWithForm>

      <section className="popup popup_viewing-place-photo">
        <div className="popup__container-photo">
          <figure className="popup__figure">
            <img className="popup__photo-image" src="#" alt="#" />
            <figcaption className="popup__photo-caption"></figcaption>
            </figure>
          <button type="button" className="popup__close popup__close_place-photo"></button>
        </div>
      </section>

      <template className="elements__card_template">
        <li className="elements__card">
          <img className="elements__card-image" src="#" alt="#" />
          <div className="elements__card-description">
            <h2 className="elements__card-title">#</h2>
            <div className="elements__card-like-section">
              <button type="button" className="elements__card-like-button"></button>
              <p className="elements__card-like-counter">1</p>
            </div>
          </div>
          <button type="button" className="elements__card-delete-button"></button>
        </li>
      </template>
    </div>
  </div>
  );
}

export default App;
