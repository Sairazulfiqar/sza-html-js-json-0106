var linkElement = document.getElementById('enlace');


linkElement.addEventListener('mouseover', function(){
    this.style.color = 'blue';
});

linkElement.addEventListener('mouseout', function(){
    this.style.color = 'red';
});