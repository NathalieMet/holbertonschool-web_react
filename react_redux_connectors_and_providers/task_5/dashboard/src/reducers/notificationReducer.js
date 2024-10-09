import { Map, List } from 'immutable';
import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

const initialState = Map({
  loading: false,
  notifications: List(),
});

const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
	  case SET_LOADING_STATE :
		return state.set('loading', action.boolean);

	  case FETCH_NOTIFICATIONS_SUCCESS:
		return state.mergeDeep({
			notifications: List(action.data), // Mise à jour de l'état notifications avec les données de l'API
		  });

	  default:
		return state;
	}
  }

  export default notificationReducer;

