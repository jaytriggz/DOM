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
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
//headerTitle.textContent = 'hello Triggzz';
//headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.innertext);

//headerTitle.innerHTML = '<h3> AGAIN HELLO </h3>';

//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//sunday Git learning
//lets go again
//i finally made it!! 
//now lets pratices everyday and let it stick!

// const form = document.getElementById('form');

// form.addEventListener('sumbit', function (e) {
//     e.preventDefault();

//     const payload = new FormData(form);

//     console.log([...payload]);

//     fetch ('http://httpbin.org/post' , {
//     method: 'POST',
//     body: payload,
// })


// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));
// })

// //Get Element By Class Name

// const items = document.getElementsByClassName ('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2'
// items[1].getElementsByClassName.fontWeight = 'bold';
// items[2].style.backgroundColor = 'gold';

// //QuerySelector //
//  var header = document.querySelector('#main-header');
//  header.getElementsByClassName.borderBottom = 'solid 4px #ccc';

//  var input = document.querySelector('input');
//  input.value = 'Hello World';

//  var submit = document.querySelector('input[type="submit"]');
//  submit.value = "SEND"

//  var item = document.querySelector('.list-group-item');
//  item.style.color = 'red';


//ParentNodes 
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);

  

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style. backgroundColor = 'yellow';
 

const reactElement = <div>Hellooooo</div>
const domElement = document.getElementById('root')


 