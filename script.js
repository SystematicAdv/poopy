
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
        const newPost = {
            title: title,
            body: body,
            replies: []
        };
        posts.push(newPost);
        displayPosts();
        document.getElementById('post-form').reset();
        closePostForm();
    } else {
        alert("Please fill out both the title and body.");
    }
}

function displayPosts() {
    const postsList = document.getElementById('posts-list');
    postsList.innerHTML = '';

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;

        const postBody = document.createElement('p');
        postBody.textContent = post.body;

        const replyButton = document.createElement('button');
        replyButton.textContent = 'Reply';
        replyButton.onclick = function () {
            replyToPost(index);
        };

        postElement.appendChild(postTitle);
        postElement.appendChild(postBody);
        postElement.appendChild(replyButton);

        const replyList = document.createElement('div');
        post.replies.forEach(reply => {
            const replyElement = document.createElement('div');
            replyElement.textContent = reply;
            replyList.appendChild(replyElement);
        });

        postElement.appendChild(replyList);
        postsList.appendChild(postElement);
    });
}

function replyToPost(postIndex) {
    const reply = prompt("Enter your reply:");
    if (reply) {
        posts[postIndex].replies.push(reply);
        displayPosts();
    }
}

document.addEventListener('DOMContentLoaded', displayPosts);
