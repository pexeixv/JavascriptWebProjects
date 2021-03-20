var projects = [
    {
        "id": 1,
        "title": "Quote Generator",
        "link": "quoteGenerator"
    },
    {
        "id": 2,
        "title": "Infinite Scroll Gallery",
        "link": "infiniteScroll"
    },
    {
        "id": 3,
        "title": "PIP Video Streamer",
        "link": "pictureInPicture"
    },

];



var container = document.querySelector('.projects_container');

var injectProjects = () => {
    projects.forEach(project => {
        var template = document.querySelector('.project_template').content.cloneNode(true);
        var anchor = template.querySelector('a');
        var image = template.querySelector('img');
        var title = template.querySelector('h3');
        anchor.href = project.link;
        image.src = `${project.link}/img/preview.png`;
        title.innerText = project.title;
        container.appendChild(template);
    });
}
injectProjects();

// for (i = 0; i < 9; i++) injectProjects();