let colorChanger = () =>{
    let color = "0123456789ABCDEF"
    let constHash = "#"
    for(let i = 0;i<6;i++){
        constHash = constHash+color[Math.floor(Math.random() * 16)]
    }
    return constHash
}

let rndmColorChanger = () => document.body.style.backgroundColor = colorChanger()

const btn = document.getElementById("button")
btn.addEventListener("click", rndmColorChanger)


