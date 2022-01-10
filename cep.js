const btnPesquisar = document.querySelector('[data-btn]')

btnPesquisar.addEventListener('click', (event) => {
    event.preventDefault()

    const input = document.querySelector('[data-cep]')
    const valor = input.value
    const url = `https://viacep.com.br/ws/${valor}/json/`

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            if(data.erro){
                alert('O CEP DIGITADO ESTÁ INVÁLIDO')
                return
            }
            mostrarCampos(data)
        })
})
function mostrarCampos(data){
    const rua = document.querySelector('[data-rua]')
    const complemento = document.querySelector('[data-complemento]')
    const bairro = document.querySelector('[data-bairro]')
    const cidade = document.querySelector('[data-cidade]')
    const estado = document.querySelector('[data-estado]')

    rua.value = data.logradouro
    complemento.value = data.complemento
    bairro.value = data.bairro
    cidade.value = data.localidade
    estado.value = data.uf
}