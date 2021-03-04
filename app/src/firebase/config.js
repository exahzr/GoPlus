import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCyeXT-YENC2FgBlTey82MeuzpBgELUwKc',
  authDomain: 'goplus-e1664.firebaseapp.com',
  databaseURL: 'https://goplus-e1664.firebaseio.com',
  projectId: 'goplus-e1664',
  storageBucket: 'goplus-e1664.appspot.com',
  messagingSenderId: '500309450926',
  appId: '1:500309450926:ios:4f8d697f2f8085b7730d3f',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };