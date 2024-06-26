function toggleDetails(detailsId) {
    var details = document.getElementById(detailsId);
    var listItem = details.previousElementSibling;  

    if (details.style.display === 'block') {
        details.style.display = 'none';
        listItem.classList.remove('active'); 
    } else {
        details.style.display = 'block';
        listItem.classList.add('active');  
    }
}