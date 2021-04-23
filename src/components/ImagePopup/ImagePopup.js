function ImagePopup() {
    return (
      <section className="popup popup_viewing-place-photo">
        <div className="popup__container-photo">
          <figure className="popup__figure">
            <img className="popup__photo-image" src="#" alt="#" />
            <figcaption className="popup__photo-caption"></figcaption>
            </figure>
          <button type="button" className="popup__close popup__close_place-photo"></button>
        </div>
      </section>
    );
}

export default ImagePopup;