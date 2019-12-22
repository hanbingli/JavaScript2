'use strict';

//Iterate through the array of books.
// For each book, create a <p> element with the book title and author and append it to the page.
// Use a <ul> and <li> to display the books.
// Add an <img> to each book that links to a URL of the book cover.
// Change the style of the book depending on whether you have read it (green) or not (red).

const books = [
    {
      title: 'The Voyages Of Doctor Dolittle',
      author: 'Hugh Lofting',
      alreadyRead: true,
    },
    {
      title: 'Harry Potter And The Goblet Of Fire',
      author: 'J. K. Rowling',
      alreadyRead: true,
    },
    {
        title: 'A Dance With Dragons',
        author: 'George R. R. Martin',
        alreadyRead: false,
      },
  ];

  let bookPool = Object.values(books);

  let ul = document.createElement('ul');
  document.body.appendChild(ul);

  for (let i = 0; i < bookPool.length; i++){
    let li = document.createElement('li');
    document.body.querySelector('ul').appendChild(li);
    li.innerText = `${i + 1}`;
    li.setAttribute('id', `${i}`)


    let info = document.createElement('p');
    document.getElementById(`${i}`).appendChild(info);
    info.innerText = `${bookPool[i].title} by ${bookPool[i].author}`;
    
    


    if(bookPool[i].alreadyRead == true){
      li.style.color = 'green';
    }    else{
      li.style.color = 'red';
    }

  }

  let img01 = document.createElement('img');
  img01.src = 'https://tva1.sinaimg.cn/large/006tNbRwgy1ga563ocxb1j305407lt8s.jpg';
  document.getElementById('0').appendChild(img01); 
  img01.setAttribute('class', 'photos')
  img01.style.width='150px';


 
  let img02 = document.createElement('img');
  img02.src = 'https://tva1.sinaimg.cn/large/006tNbRwgy1ga569hk7ntj309l0dvaav.jpg';
  document.getElementById('1').appendChild(img02); 
  img02.setAttribute('class', 'photos')
  img02.style.width='150px';


  let img03 = document.createElement('img');
  img03.src = 'https://tva1.sinaimg.cn/large/006tNbRwgy1ga56bxshn2j308a0cidgq.jpg';
  document.getElementById('2').appendChild(img03); 
  img03.setAttribute('class', 'photos')
  img03.style.width='150px';

  //document.getElementsByClassName('photos').height = '100 px';???????why this doesn't work



    
