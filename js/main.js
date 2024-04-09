
// Create a function to fetch data content.json
async function fetchData(url) {

    const response = await fetch("data/content.json");
    const data = await response.json ();
    return data;

}


// OVERVIEW

async function populateOverSection() {
    try {
        const jsonData = await fetchData ('data/content.json');

        document.querySelector('#overviewsection h2').textContent =jsonData.title; 

        const leftIconsContainer = document.querySelector('#left icons');
        leftIconsContainer.innerHTML = ''; // Clear existing content
        jsonData.icons.forEach(iconData => {
            const iconElement = document.createElement('div');
            iconElement.classList.add('p-2', 'pt-3');
            const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            svgElement.setAttribute('width', '16');
            svgElement.setAttribute('height', '16');
            svgElement.setAttribute('fill', iconData.color);
            svgElement.classList.add('bi', iconData.icon);
            svgElement.setAttribute('viewBox', '0 0 16 16');
            svgElement.innerHTML = `<path d="${getIconPath(iconData.icon)}"/>`;
            iconElement.appendChild(svgElement);
            leftIconsContainer.appendChild(iconElement);

    });

    // Populate username
    document.querySelector('#overviewsection .pt-2').textContent = jsonData.username;

    // Populate user photo
    document.querySelector('#overviewsection .accountphoto img').setAttribute('src', jsonData.userPhoto);
    } catch (error) {
        console.error('Error populating overview section:', error);
    }   
}

// Call function to populate overview section
populateOverviewSection();

// STATUS CARDS


// TODDAY TRENDS

// UNRESOLVED TICKETS

// ADDITIOINAL

// TASK SECTION