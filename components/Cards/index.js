// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        cardMaker(response.data);
    })
    .catch(error => {
        console.log("this is an error", error);
    })
function component(obj, c) {
    obj.forEach(x => {
        let card = document.createElement('div');
        card.classList.add('card');
        cards.appendChild(card);

        let headline = document.createElement('div');
        headline.classList.add('headline');
        headline.textContent = x.headline;
        card.appendChild(headline);

        let name = document.createElement('div');
        name.classList.add('author');
        card.appendChild(name);

        let imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        name.appendChild(imgContainer);

        let image = document.createElement('img');
        image.src = x.authorPhoto;
        imgContainer.appendChild(image);


        let author = document.createElement('span');
        author.textContent = `by: ${x.authorName}`;
        name.appendChild(author);

    });
}


    }