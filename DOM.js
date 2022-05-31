//examine the document object //
//console.log(document.URL);
//console.log(document.title);

//console.log(document.forms);

//console.log(document.getElementById('header-title'));

//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'world';

//console.log("Hello world");
//console.log(document.links);

//GetElementById //
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//sunday Git learning
//lets go again
//i finally made it!! 
//now lets pratices everyday and let it stick!

const form = document.getElementById('form');

form.addEventListener('sumbit', function (e) {
    e.preventDefault();

    const payload = new FormData(form);

    console.log(...payload);
})

