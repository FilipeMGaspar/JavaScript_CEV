let CxAnoNasc = document.querySelector('input#CxAnoNasc')
let GenSelecionado = document.getElementsByName('Genero')
anoAtual = new Date
let estouNoAno = anoAtual.getFullYear()

function inicar(){
    CxAnoNasc.focus()
    CxAnoNasc.value=''
}

function FcAdicionar(){
    if(CxAnoNasc.value.length == 0){
        alert('!!! [ERRO] !!! Ano de nascimento não foi informado!')
        inicar()
    }else{
        if (verificaAno(Number(CxAnoNasc.value))){
            if(RadioGeneroSelecionado()){
                alert('Tudo ok podemos continuar!')
            }else{
                alert('!! [ERRO] !! Género não foi indicado! Por favor Selecione (Feminino ou Masculino)')
            }
        }else{
            alert(`!! [ERRO] !! O Ano de ${Number(CxAnoNasc.value)} não é válido! Voce teria ${estouNoAno - Number(CxAnoNasc.value)} Anos`)
        }
        
    }

}

function verificaAno(AnoNascimento){
    if((estouNoAno - AnoNascimento > 0)  && (estouNoAno - AnoNascimento < 130)){
        return true
    }else{
        return false
    }
}

function RadioGeneroSelecionado(){
    //let GenSelecionado = document.getElementsByName('Genero')
    //let Genero = ''  
    if ((GenSelecionado[0].checked==true) && (GenSelecionado[1].checked==true)){
       return true
   }else{
        return false
   }
}