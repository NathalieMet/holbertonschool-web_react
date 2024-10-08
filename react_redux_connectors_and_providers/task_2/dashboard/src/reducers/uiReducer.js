import { Map } from 'immutable';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/uiActionTypes';

// Définir l'état initial en utilisant Immutable Map
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({}) // Utilisation de Map pour gérer l'objet user
});

// Définir le réducteur UI
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);

    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);

    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true)

    case LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false);

    case LOGOUT:
      return state.set('isUserLoggedIn', false)
        .set('user', Map({}));

    case LOGIN:
      return state
      .set('user', Map({
        email: action.user.email,
        isLoggedIn: true,
      }))
      .set('isUserLoggedIn', true);;

    default:
      return state;
  }
}

export default uiReducer;

