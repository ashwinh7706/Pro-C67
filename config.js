import firebase from 'firebase';

// add SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyA9m0kHzs82wF71bYD0Rc-37H4t6ntvaP8",
        authDomain: "pro-c67-b3cd2.firebaseapp.com",
        projectId: "pro-c67-b3cd2",
        storageBucket: "pro-c67-b3cd2.appspot.com",
        messagingSenderId: "167848069176",
        appId: "1:167848069176:web:c424a790a889f549897ecd"
      };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();