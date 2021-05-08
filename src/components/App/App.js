import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup';
import AddPlacePopup from '../AddPlacePopup/AddPlacePopup';
import ImagePopup from '../ImagePopup/ImagePopup';
import api from '../../utils/api';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {useEffect, useState} from 'react';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
    .then(res => {
      setCurrentUser(res);
    })
    .catch((err) => {
      console.log('Ошибка: ', err);
    });
  }, [])

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
    const isLiked = card.likes.some(i => i._id === currentUser._id);

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

  const handleCardDelete = (card) => {
    api.deletePlaceTask(card.id).then((res) => {
      setCards((state) => state.filter((c) => c.id !== card.id))
    })
    .catch((err) => {
      console.log('Ошибка: ', err);
    });
  }

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
    setSelectedCard({});
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const handleUpdateUser = (data) => {
    api.editProfileTask(data)
    .then(res => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => {
      console.log('Ошибка: ', err);
    });
  }

  const handleUpdateAvatar = (data) => {
    api.editAvatarTask(data)
    .then(res => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => {
      console.log('Ошибка: ', err);
    });
  }

  const handleAddPlaceSubmit = (data) => {
    api.addPlaceTask(data)
    .then(newCard => {
      setCards([{
        id: newCard._id,
        name: newCard.name,
        url: newCard.link,
        likes: newCard.likes,
        owner: newCard.owner,
      },
        ...cards]);
      closeAllPopups();
    })
    .catch((err) => {
      console.log('Ошибка: ', err);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
          <PopupWithForm name="submit-delete" title="Вы уверены?" buttonTitle="Да" />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
