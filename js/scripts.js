
        var togo = window.document.getElementById('togo')
        togo.addEventListener('mouseenter', entrar)
        togo.addEventListener('mouseout', sair)
        togo.addEventListener('mouseclick', clicar)
        
        function entrar() {togo.innerText='Went'}
        function sair() {togo.innerText='To Go'}
        function clicar() {togo.innerText= 'Went'}
