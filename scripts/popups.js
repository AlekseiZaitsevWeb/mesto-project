const popups = {
  profileEdit: {
    name:   'profile-edit',
    title:  'Редактировать профиль',
    input:  [
              {
                type: 'text',
                name: 'profile-name',
                class: 'popup__input-text popup__input_profile_name',
                placeholder: 'Имя',
                value: '.profile__name',
                required: 'required'
              },
              {
                type: 'text',
                name: 'profile-description',
                class: 'popup__input-text popup__input_profile_description',
                placeholder: 'О себе',
                value: '.profile__description',
                required: 'required'
              }
            ],
    button: 'Сохранить'
  },
  placeAdd: {
    name:   'place-add',
    title:  'Новое место',
    input:  [
              {
                type: 'text',
                name: 'place-name',
                class: 'popup__input-text popup__inpu_place_name',
                placeholder: 'Название',
                required: 'required'
              },
              {
                type: 'text',
                name: 'place-link',
                class: 'popup__input-text popup__inpu_place_link',
                placeholder: 'Ссылка на картинку',
                required: 'required'
              },
            ],
    button: 'Создать'
  }
}
