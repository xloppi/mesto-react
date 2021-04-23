import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';
import {useState} from 'react';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }
  
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }
  
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <div className="page__content">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />

      <PopupWithForm name="update-avatar" title="Обновить аватар" buttonTitle="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input type="url" name="link" id="link-avatar-input" className="popup__input popup__input_type_link" required placeholder="Ссылка на аватар" />
        <span className="popup__input-error link-avatar-input-error"></span>
      </PopupWithForm>
      
      <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonTitle="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input type="text" name="name" id="name-input" className="popup__input popup__input_type_name" required minLength="2" maxLength="40" />
        <span className="popup__input-error name-input-error"></span>
        <input type="text" name="about" id="job-input" className="popup__input popup__input_type_job"  required minLength="2" maxLength="200" />
        <span className="popup__input-error job-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="add-place" title="Новое место" buttonTitle="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input type="text" name="name" id="name-mesto-input" className="popup__input popup__input_type_place" placeholder="Название" required minLength="2" maxLength="20" />
        <span className="popup__input-error name-mesto-input-error"></span>
        <input type="url" name="link" id="link-mesto-input" className="popup__input popup__input_type_link" required placeholder="Ссылка на картинку" />
        <span className="popup__input-error link-mesto-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="submit-delete" title="Вы уверены?" buttonTitle="Да" />

      <ImagePopup />

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