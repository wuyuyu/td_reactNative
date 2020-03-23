import {
  EDIT_PROFIL
} from './actions'

const initialState = {

about: [
 {
 prenom: 'Tania',
 nom: 'Rojas'
 },
 {
  prenom: 'Laurent',
  nom: 'Bodin'
 },
  {
   prenom: 'Jérémy',
   nom: 'Gautier'
  },
   {
    prenom: 'Yuyuan',
    nom: 'Wu'
   },
 ]


};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case EDIT_PROFIL:
            return { ...state, profil: action.profil };

        default:
            return state;
    }
}