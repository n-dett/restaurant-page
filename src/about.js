export function aboutPage() {
    const aboutContent = document.createElement('div');
    const heading = document.createElement('h2');
    const hoursList = document.createElement('ul');
    const address = document.createElement('p');
   
    for(let i = 0; i < 7; i++){
        const hoursLi = document.createElement('li');
        hoursLi.setAttribute('id', `hours-${i+1}`);
        hoursList.append(hoursLi);
    }

    heading.textContent = "About";
    address.textContent = "123 Main Street, Chicago, Illinois";

    aboutContent.append(heading);
    aboutContent.append(address);
    aboutContent.append(hoursList);

    document.getElementById('content').append(aboutContent);

    document.getElementById('hours-1').textContent = "Sunday: 7 a.m. to 2:30 p.m.";
    document.getElementById('hours-2').textContent = "Monday: Closed";
    document.getElementById('hours-3').textContent = "Tuesday: Closed";
    document.getElementById('hours-4').textContent = "Wednesday: 8 a.m. to 2:30 p.m.";
    document.getElementById('hours-5').textContent = "Thursday: 8 a.m. to 2:30 p.m.";
    document.getElementById('hours-6').textContent = "Friday: 8 a.m. to 2:30 p.m.";
    document.getElementById('hours-7').textContent = "Saturday: 7 a.m. to 2:30 p.m.";
    
}