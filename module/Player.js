class Player {
    constructor(){
        this._username = ""
    }

    generateToken()
    {
        const random = ~~[Math.random() * 1000]
        // const random = Math.floor(Math.random() * this.username.length)
        const generateToken = this.username + random.toString()
        // console.log(generateToken)
        return generateToken
    }

    // Setter
    set username(_username){
        return this._username = _username
    }

    // Getter
    get username() {
        return this._username
      }


    get register()
    {
    console.log('Thankyou for registration : ')
    // Session
    // sessionStorage.setItem('key', value)
    // this.generateToken()
    sessionStorage.setItem('token', this.generateToken())
    registerForm.style.display = "none"
    logoutForm.style.display = "block"
    setTimeout(function(){
        location.href="#start"
    }, 500)
    
    }

    

    get logout()
    {
        sessionStorage.removeItem('token');
        sessionStorage.clear();
        location.reload();
    }
}