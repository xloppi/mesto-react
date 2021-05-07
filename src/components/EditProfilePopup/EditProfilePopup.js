import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if(currentUser.name !== undefined && currentUser.about !== undefined) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonTitle="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleNameChange} name="name" id="name-input" className="popup__input popup__input_type_name" required minLength="2" maxLength="40" />
      <span className="popup__input-error name-input-error"></span>
      <input type="text" value={description} onChange={handleDescriptionChange} name="about" id="job-input" className="popup__input popup__input_type_job"  required minLength="2" maxLength="200" />
      <span className="popup__input-error job-input-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
