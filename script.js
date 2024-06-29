function changeContent() {
    const dropdown = document.getElementById('content-dropdown');
    const contentDisplay = document.getElementById('content-display');
    const selectedValue = dropdown.value;

    let content = '';

    switch (selectedValue) {
        case 'home':
            content = '<p>Welcome to the Home page created by Dilli Kumari Valleti!</p>';
            break;
        case 'about':
            content = '<p>This is the About page. i am fresher graduate.</p>';
            break;
        case 'skills':
            content = '<p>These are the skills. I have in webpages creation.</p>';
            break;
        case 'contact':
            content = '<p>This is the Contact page. please let me know the status of my application, thank you.</p>';
            break;
        default:
            content = '<p>Welcome to our website!</p>';
    }

    contentDisplay.innerHTML = content;
}
