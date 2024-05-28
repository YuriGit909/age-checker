function Verificar() {
    var inputAno = document.getElementById('inum')
    var res = document.querySelector('div#resultado')
    var captura = new Date()
    var ano = captura.getFullYear()
    
    if (inputAno.value.length == 0 || inputAno.value > ano) {
        window.alert('[ ERRO ] Verifique os dados e tente novamente.')
    } else {
        var idade = ano - Number(inputAno.value)
        var radioSex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img') // Cria uma imagem pelo JavaScript
        img.setAttribute('id', 'foto') // Atributo id e seu valor (foto)


        if (radioSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', '../images/bebe-m.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', '../images/jovem-m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', '../images/adulto-m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', '../images/idoso-m.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', '../images/bebe-f.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', '../images/jovem-f.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', '../images/adulto-f.jpg')
            } else {
                // Idoso
                img.setAttribute('src', '../images/idoso-f.jpg')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `<p style='margin: 10px 0'>Detectamos um(a) ${genero} com ${idade} ano(s).</p>`
    res.appendChild(img) // Faz a imagem aparecer após o texto do innerHTML.
}