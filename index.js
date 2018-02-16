import {Navigation} from 'react-native-navigation';
import {registerScreen} from './src/screen/index';

registerScreen();

Navigation.startTabBasedApp({
    tabs:[
        {
            label:'Keyboard',
            screen:'noddier.recherche',
            icon:require('./icon/tabic_search_gray.png'),
            selectedIcon:require('./icon/tabic_search.png'),
            title:'Keyboard'
        },
        {
            label:'Mes voyages',
            screen:'noddier.mesvoyages',
            icon:require('./icon/tabic_sign_gray.png'),
            selectedIcon:require('./icon/tabic_sign.png'),
            title:'Mes voyages'
        },
        {
            label:'Mes envois',
            screen:'noddier.mesenvois',
            icon:require('./icon/tabic_package_gray.png'),
            selectedIcon:require('./icon/tabic_package.png'),
            title:'Mes envois'
        },
        {
            label:'Message',
            screen:'noddier.message',
            icon:require('./icon/tabic_message_gray.png'),
            selectedIcon:require('./icon/tabic_message.png'),
            title:'Message'
        }
    ]
})