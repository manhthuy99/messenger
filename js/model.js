const model = {}
model.currentUser = undefined

model.conversations = undefined
model.currentConversation = undefined

model.collectionName = 'conversations'
model.register = async (data) =>{
    try{
        await firebase.auth().createUserWithEmailAndPassword(data.email,data.password)
        firebase.auth().currentUser.updateProfile({
            displayName : data.firstName +' '+ data.lastName,
        })
        firebase.auth().currentUser.sendEmailVerification()
        alert('The email has been register,Please check your email')
        view.setActiveScreen('loginScreen')
    }
    catch(err){
        alert(err.message)
    }
}
model.login = async (dataLogin) =>{
    try{
       const respone = await firebase.auth().signInWithEmailAndPassword(dataLogin.email,dataLogin.password)
    }
    catch(err){
        console.log(err.message)
        alert(err.message)
    }
}
model.addMessage = (message) => {
    const dataToUpdate = {
      messages: firebase.firestore
        .FieldValue.arrayUnion(message)
    }
    firebase.firestore().collection(model.collectionName).doc(model.currentConversation.id).update(dataToUpdate)
  }
  

model.loadConversations = async () => {
    const response = await firebase.firestore()
      .collection(model.collectionName)
      .where('users', 'array-contains', model.currentUser.email)
      .get()
    model.conversations = getDataFromDocs(response.docs)
    if (model.conversations.length > 0) {
      model.currentConversation = model.conversations[0]
      view.showCurrrentConversation()
    }
    view.showConversations()
  }
  model.listenConversationsChange = () => {
    let isFirstRun = true
    firebase.firestore()
      .collection(model.collectionName)
      .where('users', 'array-contains', model.currentUser.email)
      .onSnapshot((res) => {
        if(isFirstRun) {
          isFirstRun = false
          return
        }
        const docChanges = res.docChanges()
        console.log(docChanges)
        for(oneChange of docChanges){
          console.log(oneChange)
          const type = oneChange.type
          if(type === 'modified') {
            const docData = getDataFromDoc(oneChange.doc)
            // update lai model.conversations
            for (let index = 0; index < model.conversations.length; index++) {
              if(model.conversations[index].id === docData.id){
                  model.conversations[index] = docData
                  
                }
            }
            if(docData.messages[docData.messages.length-1].owner !== model.currentUser.email) {
              view.showNotification(docData.id)
            }
            // update model.currentConversation
            if(docData.id === model.currentConversation.id){
              if(docData.users.length !== model.currentConversation.users.length){
                view.addUser(docData.users[docData.users.length - 1])
                view.updateNumberUsers(docData.id,docData.users.length)
              }
              else{
                const lastMessage = docData.messages[docData.messages.length - 1]
                view.addMessage(lastMessage)
                view.scrollToElement()
              }
              model.currentConversation = docData
            }
          }
          if(type==='added'){
            const docData = getDataFromDoc(oneChange.doc)
            model.conversations.push(docData)
            view.addConversation(docData)
          }
        }
      })
  }
  model.createConversation = (data) =>{
    firebase.firestore().collection(model.collectionName).add(data)
    view.setActiveScreen('chatScreen',true)
  }
  model.addUser = (user) =>{
    const dataToUpdate = {
      users : firebase.firestore.FieldValue.arrayUnion(user)
    }
    firebase.firestore().collection(model.collectionName).doc(model.currentConversation.id).update(dataToUpdate)
  }