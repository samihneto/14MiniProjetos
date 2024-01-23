/*
Eu quero que você crie neste exercício um objeto de postagem de blog que vai conter as seguinte propriedades.
Postagem
*
Título
Mensagem
Autor
Visualizações
Comentários
    (autor, mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizações: 10,
    comentarios : [
        { autor: 'a',mensagem: 'b' },
        { autor: 'a',mensagem: 'b' }
    ],
    estaAoVivo : true
}
console.log(postagem);