const init = () => {
     // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAhmdgb3ECqSTtMXRYBJ7iH3nkeLmmoDs4",
    authDomain: "thuchanh-4a0f7.firebaseapp.com",
    databaseURL: "https://thuchanh-4a0f7.firebaseio.com",
    projectId: "thuchanh-4a0f7",
    storageBucket: "thuchanh-4a0f7.appspot.com",
    messagingSenderId: "263477566121",
    appId: "1:263477566121:web:cc51af295cbaa0c967e7b8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      if(user.emailVerified){
        model.currentUser ={
          displayName : user.displayName,
          email : user.email,
        }
        view.setActiveScreen('chatScreen')
      }
      else{
        alert('Please verify your email')
        view.setActiveScreen('loginScreen')
      }
    }
    else{
      view.setActiveScreen('loginScreen')
    }
  })

  // firestoreFunction()
}
window.onload = init

firestoreFunction = async () =>{
  //get document
  const documentId = 'THbhJnKNCjz7zo8MQuMe'
  const respone = await firebase.firestore().collection('users').doc(documentId).get()
  const user = getDataFromDoc(respone)
  console.log(user)
  // get many document
  const respone2 = await firebase.firestore().collection('users').get()
  const listUser = getDataFromDocs(respone2.docs)
  console.log(listUser)
  //add document

  //update document

  // delete document

}
getDataFromDoc = (doc) =>{
   const data = doc.data()
   data.id = doc.id
   return data
}
getDataFromDocs = (docs) =>{
  const  listData = []
  for (let index = 0; index < docs.length; index++) {
    const element = getDataFromDoc(docs[index])
    listData.push(element)
  }
  return listData
}