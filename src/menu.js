export function menuPage() {
    const menuContent = document.createElement('div');
    const heading = document.createElement('h2');
    const menuDiv = document.createElement('div');
    
    for(let i=0; i<3; i++){
        let menuItemDiv = document.createElement('div');
        
        menuItemDiv.textContent = `Item ${i+1}`;
        menuDiv.append(menuItemDiv);
    }

    menuContent.append(heading);
    menuContent.append(menuDiv);
    document.getElementById('content').append(menuContent);
}