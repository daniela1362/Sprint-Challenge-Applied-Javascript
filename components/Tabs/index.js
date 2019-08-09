// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topic = document.querySelector('.topic');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        console.log('response', x.data.topics)
        const xTopic = x.data.topics;
        xTopic.forEach(word => {
            tabComponent(word)
        })
    })

    .catch(error => {
        console.log('Error!')
    })

function tabComponent(arr) {
    const Item = document.createElement('div');
    Item.classList.add('tab');
    Item.textContent = arr
    topicDiv.appendChild(Item)
    return Item;
}