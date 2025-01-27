class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidados = this.isValid();
        const senhaValidada = this.isValidPassword();

        if (camposValidados && senhaValidada){
            alert('Formulário enviado');
            this.formulario.submit();
        } else {
            alert('Formulário não enviado');
        }
    }

    isValid() {
        let valido = true;

        for(let text of this.formulario.querySelectorAll('.error-text')){
            text.remove();
        }

        for(let campo of this.formulario.querySelectorAll('input')){
            const label = campo.previousElementSibling.innerText;
            if(!campo.value){
                this.criaError(campo, `Campo "${label}" não pode estar em branco`)
                valido = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valido = false;
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valido = false;
            }

        }

        return valido;
    }

    isValidPassword() {
        let valido = true;

        const senha = this.formulario.querySelector('.password')
        const senhaRepete = this.formulario.querySelector('.password2')
        
        if (senha.value.length > 12 || senha.value.length < 6){
            this.criaError(senha, 'Senha precisa ter entre 6 e 12 caracteres');
            this.criaError(senhaRepete, 'Senha precisa ter entre 6 e 12 caracteres');
            valido = false;
        }

        if (senha.value !== senhaRepete.value) {
            this.criaError(senha, 'As senhas precisam ser iguais')
            this.criaError(senhaRepete, 'As senhas precisam ser iguais')
            valido = false
        } 

        return valido;
    }

    criaError(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg;
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }

    validaCPF(campo) {
        const confirmaCpf = new ValidaCPF(campo.value)

        if (!confirmaCpf.valida()) {
            this.criaError(campo, 'CPF inválido')
            return false;
        }
        return true;
    }

    validaUsuario(campo) {
        const text = campo.value;
        let valid = true

        if (text.length < 3 || text.length > 12 ) {
            this.criaError(campo, 'Usuário deverá ter entre 3 e 12 caracteres')
            console.log('teste')
            valid = false;
        }

        if (!text.match(/^[a-zA-z0-9]+$/g)) {
            this.criaError(campo, 'Nome de usuário precisar conter apenas letras e números')
            valid = false;
        }

        return valid;
    }

}

const valida = new ValidaFormulario();
