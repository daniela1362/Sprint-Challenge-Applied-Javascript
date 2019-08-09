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
.then(data =>{
    console.log('response', data)
    const topicData= data.data;
    const topic = document.querySelector('.topic';
    topic.appendChild(topicData));
})
.catch( err => {
    console.log('Error retrieving data',err)
});

function newTabs(object){
    const tab = document.createElement('div');
    const topic = document.createElement('div');
    const title = document.createElement('span');
}

tab.appendChild(topic);
tab.appendChild(title);

tab.classList.add('tab, topic');
topic.classList.add('title')

title.textContent = object.topic;
return tab;
}