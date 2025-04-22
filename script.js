const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

const encontrarPareja = (listaInvitados) => {
    
    let _left = 0;
    let _right = 1;

    while(_right < listaInvitados.length){
        let inicialLeft = (listaInvitados[_left])[0];
        let inicialRight = (listaInvitados[_right])[0];

        if(inicialLeft === inicialRight){
            console.log(`La primera pareja encontrada es ${listaInvitados[_left]} y ${listaInvitados[_right]}`);
            console.log(`Busqueda finalizada`);
            return;  //Finaliza el while
        }
        _left++;
        _right++;
    }

    if (_right === listaInvitados.length) {
        console.log('No se hayaron parejas');
        return;
    }
}

encontrarPareja(invitados);

