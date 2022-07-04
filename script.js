function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    var body = window.document.querySelector('body#body')
    if (fano.value.length == 0 || Number(fano.value) == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 5) {
                //BEBE
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade >= 5 && idade < 14) {
                //CRIANCA
                img.setAttribute('src', 'criancamenino.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 45) {
                //HOMEM
                img.setAttribute('src', 'homem.png')
            } else if (idade < 70) {
                //MEIA IDADE
                img.setAttribute('src', 'homemmeiaidade.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso.png')
            }
            body.style.background = '#429EE3'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                //BEBE
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade >= 5 && idade < 14) {
                //CRIANCA
                img.setAttribute('src', 'criancamenina.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 45) {
                //MULHER
                img.setAttribute('src', 'mulher.png')
            } else if (idade < 70) {
                //MEIA IDADE
                img.setAttribute('src', 'mulhermeiaidade.png')
            } else {
                //IDOSA
                img.setAttribute('src', 'idosa.png')
            }
            body.style.background = '#F7B8B6'
        }
        res.style.textAlign = 'CENTER'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img)
        img.style.margin = '17px 0px 0px 0px'
    }
}