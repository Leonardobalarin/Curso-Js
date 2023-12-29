function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-homem.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto-homem.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-mulher.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}