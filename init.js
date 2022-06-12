
// const tidak berubah
const title = "deacourse" 

// console.log(title)
// let bisa dirubah
// let abc = "salkdf"

// func untuk ganti title web dom
function changeTitle(params)
{
    // const title = "Ah.. Mantab" ;
    // console.log('func siap gas');
    // console.log(document.title);
    // console.log('our params = ', params);
    // document.title = title;
    document.title = params;
    // console.log(window);
}


// declaring element || Variable Global
const username = document.getElementById('username')
const registerForm = document.getElementById('registerForm')
const logoutForm = document.getElementById('logoutForm')
const startSection = document.getElementById('start')
const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const rewardImage = document.getElementById('imgReward')
const urlApi = "https://zoo-animal-api.herokuapp.com/animals/rand"


const player = new Player();
// console.log(username);
// console.log(username.value);

let default_option = ['😍', '😁', '😒']
// windows + .
// cmd + ctrl + space

function dice()
{
    let gacha = []
    for(let i = 0; i<default_option.length; i++){
        const roll = default_option[~~(Math.random() * default_option.length)]
        console.log(roll)
        gacha.push(roll)
    }
    return gacha
}

function start()
{
    // Selama
    const rolling = setInterval(function(){
        const result = dice()
        console.log('acak acak gambar.....', result)
        box1.textContent = result[0]
        box2.textContent = result[1]
        box3.textContent = result[2]
        console.log(dice())
    }, 100)

    // Ketika
    setTimeout(function(){
        clearInterval(rolling)
        winner()
    }, 3000)
}


function winner()
{
    if(box1.textContent == box2.textContent && box1.textContent == box3.textContent){
        alert("win")
        console.log('win')
        reward()
        location.href = "#reward"
    }else{
        alert("lose")
        console.log('lose')
    }
}

function reward()
{
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand').then(x => x.json()).then(result =>{
        console.log('hasil reward', result)
        // set name
        let text = document.createElement('h1')
        text.textContent = result.name 

        // set gamber
        let img = new Image(200, 200)
        img.src = result.image_link

        // show element
        rewardImage.appendChild(img)
        rewardImage.appendChild(text)
    })
}


onload = function(){
    // console.log('tes onload');
    const token = sessionStorage.getItem('token')
    console.log(token);
    registerForm.style.display = "none"
    if(token && token != null){
        registerForm.style.display = "none"
        logoutForm.style.display = "block"
        box1.textContent = default_option[0]
        box2.textContent = default_option[1]
        box3.textContent = default_option[2]
    }else{
        registerForm.style.display = "block"
        logoutForm.style.display = "none"
    }
}

function register()
{
    // call setter
    player.username = username.value
    
    
    // call getter
    player.register
    // console.log(player.username)
}

function logout()
{
    player.logout
}

// ECMA SCRIPT
// const changeTitle = (params) => {
//     document.title = params
// }