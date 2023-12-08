function gotowhatsapp() {
    var name = document.getElementById("nomecompleto").value;
    var data = document.getElementById("calendario").value;
    var periodo = document.getElementById("periodoselect").value;

    var formattedDate = changeformat(data);

    var url = `https://wa.me/5511966776565?text=Olá+humano,+tudo+bem?+Gostaria+de+agendar+uma+visita+para+conhecer+a+Missão+Ambiental. Meu nome é ${name}, seria no dia ${formattedDate} no periodo ${periodo}`;

    window.open(url, '_blank').focus();
}

function changeformat(value) {
    const myArray = value.split("-");

    let year = myArray[0];
    let month = myArray[1];
    let day = myArray[2];

    let formatteddate = `${day}-${month}-${year}`;

    return formatteddate;
}