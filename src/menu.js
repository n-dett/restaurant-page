export function menuPage() {
    const menuContent = document.createElement('div');
    const heading = document.createElement('h2');
    const menuList = document.createElement('ul');
    
    for(let i=0; i<10; i++){
        let menuItem = document.createElement('li');
        menuItem.setAttribute('id', `item-${i+1}`);
        menuList.append(menuItem);
    }

    heading.textContent = "Savor Menu";

    menuContent.append(heading);
    menuContent.append(menuList);
    document.getElementById('content').append(menuContent);

    document.getElementById('item-1').textContent = "French toast";
    document.getElementById('item-2').textContent = "Eggs benedict";
    document.getElementById('item-3').textContent = "Pancakes";
    document.getElementById('item-4').textContent = "Omelette";
    document.getElementById('item-5').textContent = "Belgian waffle";
    document.getElementById('item-6').textContent = "Breakfast sandwich";
    document.getElementById('item-7').textContent = "Hashbrowns";
    document.getElementById('item-8').textContent = "Toast and jam";
    document.getElementById('item-9').textContent = "Fresh fruit";
    document.getElementById('item-10').textContent = "Bacon";



}