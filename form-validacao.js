//exibir dados na tela após envio do formulário
function exibirDados(){
    var nome = $("#nome").val();
    var cpf = $("#cpf").val();
    var telefone = $("#telefone").val();
    var endereco = $("#endereco").val();
    var email = $("#email").val();

    $("#dados").html(`
        <div class="container mt-4">
            <div class="row">
                <div class="col">
                    <h4>Dados Enviados:</h4>
                    <p><strong>Nome:</strong> ${nome}</p>
                    <p><strong>CPF:</strong> ${cpf}</p>
                    <p><strong>Telefone:</strong> ${telefone}</p>
                    <p><strong>Endereço:</strong> ${endereco}</p>
                    <p><strong>Email:</strong> ${email}</p>
                </div>
            </div>
        </div>
    `);
};

$(document).ready(function(){
    //máscaras dos campos telefone e cpf
    $("#telefone").mask("(00) 00000-0000");

    $('#cpf').mask('000.000.000-00');

    $("#cpf").on("input", function() {
        if ($(this).val().length >= 13) {
            $(this).mask("00.000.000/0000-00");
        } else {
            $(this).mask("000.000.000-00");
        }
    });

    $("input").on("input blur", function(){
        $(this).valid();
    })

}); 

//validar se todos os campos "required" estão preenchidos e atendendo seus requisitos
 $("#cadastro").validate({
    submitHandler: function(form, event){
        event.preventDefault();
        exibirDados();
    },
    errorPlacement: function(error, element){
        element.css({"border-color" : "#F00"});
        error.css({"margin-left": "10px"});
        error.insertAfter(element);
    },
    success: function(label, element){
        $(element).css({"border-color": "#0F0"});
        label.addClass("valid").text("Ok!")
    },
    onkeyup: function(element) {
        if (!$(element).valid()) {
            $(element).css({"border-color": "#F00"}); // Se houver erro, borda vermelha
        } else {
            $(element).css({"border-color": "#0F0"}); // Se passar nos requisitos, borda verde
        }
    },
    onfocusout: function(element) {
        if (!$(element).valid()) {
            $(element).css({"border-color": "#F00"}); // Se houver erro, borda vermelha
        } else {
            $(element).css({"border-color": "#0F0"}); // Se passar nos requisitos, borda verde
        }
    },
    messages: {
        nome: {
            required: "Este campo é obrigatório"
        },
        cpf: {
            required: "Este campo é obrigatório",
            minlength: "Informe um CPF/CNPJ válido"
        },
        telefone: {
            required: "Este campo é obrigatório",
            minlength: "Informe um telefone válido"
        },
        endereco: {
            required: "Este campo é obrigatório"
        },
        email: {
            required: "Este campo é obrigatório",
            email: "Informe um e-mail válido"
        }
    }
 });

