
const btn = document.getElementById('btn')
const corpo = document.getElementById('corpo')
const carta = document.getElementById('carta2')
const coracao = document.getElementById('coracao')


btn.addEventListener('click', ()=>{
    
    const div = document.createElement("div")
    div.className = "flex flex-col items-center gap-3 p-3 "
    carta.appendChild(div)

    async function delay(){
        
            for(let i = 0; i < 100; i++){
                setTimeout(()=> {
        
                const p = document.createElement("p")
                    p.innerHTML = "Eu te amo "
                    p.className = "font-serif text-2xl text-black " 
                
                div.append(p)   
                    }, i * 300)
            }
    }
    delay()

})