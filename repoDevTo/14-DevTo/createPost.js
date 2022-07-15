let editor = new Editor({
    element: document.getElementById('postBody'),
    status: []
});
editor.render();

var imagenUrl = '';
const addCoverImage = (e) => {
    e.preventDefault();
    imagenUrl = prompt('Image URL:');
}

const crearPost = (e) => {
    e.preventDefault();
    let post = {};
    post['titulo'] = document.getElementById('postTitle').value;
    post['imagenPortada'] = imagenUrl;
    post['contenido'] = editor.codemirror.getValue();
    post['fechaCreacion'] = document.getElementById('postDate').value;
    post['tags'] = document.getElementById('postTags').value.split(',');

    postPost(
        post.titulo,
        post.imagenPortada,
        post.contenido,
        post.fechaCreacion,
        post.tags,
        (body) => {
            alert('Post published successfully!');

            const delay = setTimeout(reload, 1000);

            function reload() {
                document.getElementById("home").click();
            }
        }
    )
}

const delay = setTimeout(reload, 3000);

function reload() {
    document.getElementById("avatar").click();
}