const urlDB = "https://dev-to-1-default-rtdb.firebaseio.com/";

const postPost = (titulo, imagenPortada, contenido, fechaCreacion, tags, funcion) => {
    const url = `${urlDB}/post.json`;
    const post = {
        titulo,
        imagenPortada,
        contenido,
        fechaCreacion,
        tags
    };

    fetch(url, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((respuesta) => respuesta.json())
        .then((body) => funcion(body))
        .catch((error) => console.log(error));
}

const getPost = (funcion) => {
    const url = `${urlDB}/post.json`;
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((body) => funcion(body))
        .catch((error) => console.log(error));
}

const getPostConId = (funcion) => {
    const url = `${urlDB}/post.json`;
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((mPost) => {
            const postCreados = Object.keys(mPost).map(id => {
                const post = mPost[id];
                return {
                    fireBaseId: id,
                    titulo: post.titulo,
                    imagenPortada: post.imagenPortada,
                    contenido: post.contenido,
                    fechaCreacion: post.fechaCreacion,
                    tags: post.tags
                }
            });
            funcion(postCreados);
        })
        .catch((error) => console.log(error));
}

const deletePost = (fireBaseId, funcion) => {
    const url = `${urlDB}/post/${fireBaseId}.json`;
    fetch(url, {
            method: 'DELETE'
        })
        .then((respuesta) => respuesta.json())
        .then((body) => funcion(body))
        .catch((error) => console.log(error));
}

const putPost = (titulo, imagenPortada, contenido, fechaCreacion, tags, fireBaseId, funcion) => {
    const url = `${urlDB}/post/${fireBaseId}.json`;
    const post = {
        titulo,
        imagenPortada,
        contenido,
        fechaCreacion,
        tags
    };

    fetch(url, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((respuesta) => respuesta.json())
        .then((body) => funcion(body))
        .catch((error) => console.log(error));
}