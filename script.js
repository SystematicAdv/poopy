
let posts = [];

function githubAuth() {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID&scope=repo';
}

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

        fetch('https://api.github.com/repos/YOUR_USERNAME/YOUR_REPOSITORY/issues', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer YOUR_GITHUB_ACCESS_TOKEN',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: postData.title,
                body: postData.body
            })
        })
        .then(response => response.json())
        .then(data => {
            posts.push(data);
            displayPosts();
            closePostForm();
        })
        .catch(error => console.error('Error creating post:', error));
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
