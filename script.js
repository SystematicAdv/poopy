
let posts = [];

function showPostForm() {
    document.getElementById('post-form').style.display = 'block';
}

function closePostForm() {
    document.getElementById('post-form').style.display = 'none';
}

function submitPost() {
    const title = document.getElementById('post-title').value;
    const body = document.getElementById('post-body').value;

    if (title && body) {
        const postData = {
            title: title,
            body: body
        };

        posts.push(postData);
        displayPosts();
        closePostForm();
    }
}

function displayPosts() {
    const postsList = document.getElementById('posts-list');
    postsList.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;

        const postBody = document.createElement('p');
        postBody.textContent = post.body;

        postElement.appendChild(postTitle);
        postElement.appendChild(postBody);

        postsList.appendChild(postElement);
    });
}

document.addEventListener('DOMContentLoaded', displayPosts);
