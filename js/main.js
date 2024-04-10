// FETCH CONTENT.JSON Function

async function fetchData(url) {
    try {
        const response = await fetch(url); 
        const data = await response.json(); 
        return data; 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// OVERVIEW
// Create overview section function 

async function populateOverview() {
    const data = await fetchData('content.json'); 
    const overviewData = data.Overview[0]; 
    
    // GET TITLE
    document.getElementById('overviewTitle').textContent = overviewData.title;

    // GET LEFT ICONS
    const leftIconsContainer = document.getElementById('leftIcons');
    overviewData.icons.forEach(icon => {

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('fill', icon.color);
        svg.setAttribute('class', `bi ${icon.icon}`);
        svg.setAttribute('viewBox', '0 0 16 16');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0');
        svg.appendChild(path);
        leftIconsContainer.appendChild(svg);

    });

    // GET USERNAME
    document.getElementById('userName').textContent = overviewData.username;
    
    // GET USER PHOTO
    document.getElementById('userPhoto').setAttribute('src', overviewData.userPhoto);
}

// Call function overview section
populateOverview();



// STATUS CARDS
// create a function
async function populateStatusCards() {
    const data = await fetchData('content.json'); 
    const statusCardsData = data.statusCards;

    // LOOP TO GET STATUS DATA
    statusCardsData.forEach(card => {

        const cardElement = document.getElementById(card.id); 
        
        // GET CARD STATUS AND COUNT
        cardElement.querySelector('.card-text').textContent = card.status;
        cardElement.querySelector('.card-title').textContent = card.count;
    });
}

// Call status cards function
populateStatusCards();



// TODAY TRENDS
// Create function for trends
async function populateTrends() {
    const data = await fetchData('content.json'); 
    const trendsData = data.todayTrends[0]; 
    
    // GET HEADING
    document.getElementById('trendsHeading').textContent = trendsData.heading;
    
    // GET LAST UPDATED 
    document.getElementById('lastUpdated').textContent = trendsData.lastUpdated;
    
    // GET TODAY AND YESTERDAY
    document.getElementById('customHR').classList.add(trendsData.customHRClass);
    document.getElementById('customHR2').classList.add(trendsData.customHR2Class);
}

// Call Trends function 
populateTrends();



// UNRESOLVED TICKETS
// Create function for unresolved tickets section
async function populateUnresolvedTickets() {
    const data = await fetchData('content.json'); 
    const unresolvedData = data.unresolvedTickets[0]; 

    // GET UNRESOLVED HEADING
    document.getElementById('unresolvedHeading').textContent = unresolvedData.heading;

    // GET VIEW DETAILS
    document.getElementById('viewDetails').textContent = unresolvedData.viewDetails;

    // GET GRUOP
    document.getElementById('group').textContent = unresolvedData.group;
}

// Call Unresolved Tickets function
populateUnresolvedTickets();



// ADDITIOINAL
// Create additional section function
async function populateAdditionalInformation() {
    const data = await fetchData('content.json'); 
    const additionalData = data.additional; 

    // GET HEADINGS AND VALUES
    additionalData.forEach(item => {
        document.getElementById(item.id + 'Heading').textContent = item.id;
        document.getElementById(item.id + 'Value').textContent = item.value;
    });
}

// Call additional section function
populateAdditionalInformation();



// TASK SECTION
// Create Task function
async function populateTasks() {
    const data = await fetchData('content.json'); 
    const tasksData = data.tasksSection[0]; 

    // GET HEADING
    document.getElementById('tasksHeading').textContent = tasksData.heading;
    
    // GET VIEW 
    document.getElementById('viewAll').textContent = tasksData.viewAllText;


}

// Call function to populate tasks section
populateTasks();

// TASK LISTS

async function populateTasksList() {
    const data = await fetchData('content.json');
    const tasksListData = data.taskList[0];ticketlist; 
    const taskListList = document.getElementById(taskListList);

    tasksListData.forEach(ticket => {

        const listItem = documetnt.createElement ('li');
        listItem.classList.add('list-group-item');

        listItem.innerHTML = `

            <div class="hstack gap-3">
                <div class="p">
                    <h5>${ticket.id}</h5> <!-- Populate task name -->
                </div>
                <div class="p-2 ms-auto">
                    <h5 class="semi">${ticket.count}</h5> <!-- Populate task count -->
                </div>
            </div>
        `

        taskListList.appendChild(listItem);

    })
}

// Call task list function
populateTasksList();