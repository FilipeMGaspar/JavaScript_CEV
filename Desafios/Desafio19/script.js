let CxA = document.querySelector('input#CxA')
let CxB = document.querySelector('input#CxB')
let CxC = document.querySelector('input#CxC')

function iniciar(){
    CxA.focus()
    CxA.value = ''
}

function reseolver(){
    if(CxA.vaalue.length==0){
        alert('!! [ERRO] !! Equação incompleta!')
        iniciar()
    }
}