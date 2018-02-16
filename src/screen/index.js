import {Navigation} from 'react-native-navigation';
import Mesenvois from './mesenvoisScreen/mesenvoisScreen';
import Messsage from './messageScreen/messageScreen';
import Mesvoyages from './mesvoyagesScreen/mesvoyagesScreen';
import Keyboard from './profilScreen/keyboardScreen';
import Recherche from './rechercheScreen/rechercheScreen';
import RechercheNav from '../nav/rechercheNav';
import VoyagerModal from '../screen/voyagerScreen/voyagerModal';

export function registerScreen(){
    Navigation.registerComponent('noddier.recherche',() => Keyboard);
    Navigation.registerComponent('noddier.mesvoyages',() => Mesvoyages);
    Navigation.registerComponent('noddier.mesenvois',() => Mesenvois);
    Navigation.registerComponent('noddier.message',() => Messsage);
    Navigation.registerComponent('noddier.navbarRecherche',() => RechercheNav);
    Navigation.registerComponent('noddier.voyagerModal',() => VoyagerModal);
}

