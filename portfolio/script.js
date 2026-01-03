const blogList = document.querySelector('.blog-list');
const modal = document.getElementById('blog-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalAuthor = document.getElementById('modal-author');
const closeButton = document.querySelector('.close-button');

const blogPosts = [
    {
        title: 'The Future of Artificial Intelligence',
        content: 'Artificial Intelligence is rapidly changing the world as we know it. From self-driving cars to personalized medicine, the possibilities are endless. In this blog post, we will explore the future of AI and its potential impact on society.'
    },
    {
        title: 'The Importance of Cybersecurity',
        content: 'In todays digital age, cybersecurity is more important than ever. With the increasing number of cyber threats, it is crucial for individuals and organizations to take steps to protect themselves. In this post, we will discuss the importance of cybersecurity and provide tips for staying safe online.'
    },
    {
        title: 'The Rise of Remote Work',
        content: 'The COVID-19 pandemic has accelerated the trend of remote work. While working from home has its benefits, it also presents challenges. In this blog post, we will explore the rise of remote work and its implications for the future of work.'
    },
    {
        title: 'The Power of Positive Thinking',
        content: 'Your mindset has a profound impact on your life. Positive thinking can lead to improved well-being, better relationships, and increased success. In this post, we will discuss the power of positive thinking and how to cultivate a more optimistic outlook.'
    },
    {
        title: 'The Benefits of Mindfulness Meditation',
        content: 'Mindfulness meditation is a practice that involves focusing on the present moment. It has been shown to have numerous benefits, including stress reduction, improved focus, and increased self-awareness. In this blog post, we will explore the benefits of mindfulness meditation and provide guidance for getting started.'
    },
    {
        title: 'The Art of Storytelling',
        content: 'Storytelling is a powerful tool for communication and connection. Whether you are writing a novel, giving a presentation, or simply sharing a personal experience, the ability to tell a good story is essential. In this post, we will discuss the art of storytelling and provide tips for crafting compelling narratives.'
    },
    {
        title: 'The Science of Happiness',
        content: 'What makes people happy? This is a question that has been debated by philosophers and scientists for centuries. In this blog post, we will explore the science of happiness and discuss practical strategies for increasing your own well-being.'
    },
    {
        title: 'The Future of Space Exploration',
        content: 'Humans have always been fascinated by the cosmos. With advancements in technology, we are now able to explore the universe in ways that were previously unimaginable. In this post, we will discuss the future of space exploration and the exciting discoveries that lie ahead.'
    }
];

function displayBlogPosts() {
    blogPosts.forEach((post, index) => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('blog-item');
        blogItem.innerHTML = `<h3>Blog ${index + 1}</h3>`;
        blogItem.addEventListener('click', () => openModal(post));
        blogList.appendChild(blogItem);
    });
}

function openModal(post) {
    modalTitle.textContent = post.title;
    modalBody.textContent = post.content;
    modalAuthor.textContent = 'Written by Om Dubey';
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

closeButton.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

displayBlogPosts();
