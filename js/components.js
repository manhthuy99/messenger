const components = {}
components.registerScreen = `
<div class="register-container">
    <div class="aside-right">
           <div class="header">
               <h2>Messenger</h2>
           </div>
       <form id="register-form">
           <div class="input-name-wrapper">
               <div class="input-wrapper">
                    <input type="text" placeholder="First name..." name="firstName">
                    <div id="first-name-error" class="error"></div>
               </div>
               <div class="input-wrapper">
                    <input type="text" placeholder="Last name..." name="lastName">
                    <div id="last-name-error" class="error"></div>
                </div>
           </div>
           <div class="input-wrapper">
                <input type="text" placeholder="Email..." name="email">
                <div id="email-error" class="error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Password..." name="password">
                <div id="password-error" class="error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Confirm password" name="confirmPassword">
                <div id="confirm-password-error" class="error"></div>
            </div>
            <div class="form-action">
                <span class="cursor-pointer" id="redirect-to-login">
                    Already have an account ? Login
                </span>
                <button class="btn" type="submit"> Register</button>
            </div>
       </form>
   </div>
</div>
`
components.loginScreen = `
<div class="login-container">
    <div class="aside-right">
           <div class="header">
               <h2>Messenger</h2>
           </div>
       <form id="login-form">
           <div class="input-wrapper">
                <input type="text" placeholder="Email" name="email">
                <div id="email-error" class="error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Password" name="password">
                <div id="password-error" class="error"></div>
            </div>
            <div class="form-action">
                <span class="cursor-pointer" id="redirect-to-register">
                    Already have an account ? Register
                </span>
                <button class="btn" type="submit"> Login</button>
            </div>
       </form>
   </div>
</div>
`
components.chatScreen = ` 
<div class="chat-container">
<div class="chat-header">
    <span>Messenger</span>
</div>
<div class="main">
    <div class="aside-left">
        <div class="create-conversation">
            <button class="btn"> + New conversation </button>
        </div>
        <div class="list-conversations">
        </div>
    </div>
    <div class="conversation-detail">
        <div class="conversation-header">MindX Chat</div>
        <div class="list-message"></div>
        <form id="send-message-form">
            <input type="text" autocomplete="off" class="input" name="message" placeholder="Type a message ...">
            <button class="btn" type="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
        </form>
    </div>
    <div class="aside-right">
        <div class="list-user">
        </div>
        <form  id="add-user-form">
            <div class="input-wrapper">
                <input type="text" placeholder="Input friend email" name="email">
                <div class="error" id="add-user-email-error"></div>
            </div>
            <button class="btn" type="submit"> <i class="fa fa-user-plus" aria-hidden="true"></i> Add </button>
        </form>
    </div>
</div>
</div>
`
components.createConversation = `
<div class="create-conversation-container">
<div class="header">MindX chat</div>
<div class="main" style="padding: 50px 20%;">
    <form id="create-conversation-form">
        <span style="font-size: 22px; margin-bottom:10px; display: block;">Create a new converastion</span>
        <div class="input-wrapper">
            <input type="text" placeholder="Conversation name ...." name="conversationTitle" autocomplete="off">
            <div class="error" id="conversation-name-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="text" placeholder="Email friend ...." name="converastionEmail">
            <div class="error" id="conversation-email-error"></div>
        </div>
        <button class="btn" type="submit">Save</button>
        <button class="btn btn-light" type="button" id="back-to-chat">Cancle</button>
    </form>
</div>
</div>
`