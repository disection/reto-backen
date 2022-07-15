let editor2 = new Editor({
    element: document.getElementById('postBodyEdit'),
    status: []
});

editor2.render();

var imagenUrl = '';
const addCoverImage = (e) => {
    e.preventDefault();
    imagenUrl = prompt('Image URL:');
}

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');



const updatePost = (e) => {
    e.preventDefault();

    let post = {};
    post['titulo'] = document.getElementById('postTitle').value;
    post['imagenPortada'] = imagenUrl;
    post['contenido'] = editor2.codemirror.getValue();
    post['fechaCreacion'] = document.getElementById('postDate').value;
    post['tags'] = document.getElementById('postTags').value.split(',');
    post['fireBaseId'] = id;

    putPost(
        post.titulo,
        post.imagenPortada,
        post.contenido,
        post.fechaCreacion,
        post.tags,
        post.fireBaseId,
        (body) => {
            alert('Post updated successfully!');

            const delay = setTimeout(reload, 1000);

            function reload() {
                document.getElementById("home").click();
            }
        }
    )
}