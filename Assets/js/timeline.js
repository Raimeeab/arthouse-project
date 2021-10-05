// ------------------------------ Global Variables ------------------------------
var listEl = document.querySelector("#orderedList");

var arrayOfTimelineItems = [
    {
        timeline: "{'date': '01/01/0400', 'customDisplay': 'Prehistortic Art'}",
        title: "Prehistortic Art",
        date: "~40,000 - 40,000 B.C.",
        content: "Prehistoric art includes a broad range of art made by illiterate cultures, including some of the earliest human artifacts. The best-known Prehistoric artworks are the large Paleolithic cave paintings that depict animals in continental Europe, particularly the ones at Lascaux in the Dordogne region of France. Several hundread decorated caves are known, spanning the Upper Paleolithic period (c. 38,000-12,000 BC). There are examples in Ukraine, Italy and Great Britain, but most of them are in France and Spain. Many theories have been suggested about the art\'s purpose, the most accepted being that it was part of religious rituals, possibly to evoke hunting success. \n\n Besides cave painting, in various parts of the world, especially in Europe, small prehistoric statuettes known as Venus figurines with exaggerated breasts and bellies were made, the famous one being Venus of Willendorf, found in Austria. Most have small heads, wide hips, and legs that taper to a point. Arms and feet are often absent, and the head is usually small and faceless. ",
        link: "https://en.wikipedia.org/wiki/Prehistoric_art",
        readMore: "Read more.",
        img: "./Assets/images/Eras/Prehistoric.jpeg"
    },
    {
       timeline: "{'date': '01/01/0300', 'customDisplay': 'Ancient Art'}",
       title: "Ancient Art",
       date: "30,000 B.C. - A.D. 400",
       content: "Ancient art refers to the many types of a art produced by the advanced cultures of ancient societies with some form of writing, such as those of ancient China, India, Mesopotamia, Persia, Palestine, Egypt, Greece, and Rome. The art of pre-literate societies is normally referred to as Prehistoric art and is not covered here. Although some Pre-Columbian cultures developed writing during the centuries before the arrival of Europeans, on grounds of dating these are covered at Pre-Columbian art, and articles such as Maya art and Aztec art.",
       link: "https://en.wikipedia.org/wiki/Ancient_art",
       readMore: "Read more.",
       img: "./Assets/images/Eras/Ancient.jpeg"
    }
];


var firstTime = true;

function render() {
    for (i = 0; i < arrayOfTimelineItems.length; i++) {
        var li = document.createElement('li');
        if(firstTime){
            li.classList='selected';
            firstTime = false;
        };

        li.setAttribute("data-horizontal-timeline", arrayOfTimelineItems[i].timeline);
    
        var titleItem = document.createElement('h4');
        var dateLabel = document.createElement('p');
        var contentContainer = document.createElement('div');
        var contentEl = document.createElement('p');
        var wikiLink = document.createElement('a');
        var imgEl = document.createElement('img');

        titleItem.textContent = arrayOfTimelineItems[i].title;
        dateLabel.textContent = arrayOfTimelineItems[i].date;
        contentEl.textContent = arrayOfTimelineItems[i].content;
        imgEl.setAttribute('src', arrayOfTimelineItems[i].img);
        wikiLink.setAttribute('href', arrayOfTimelineItems[i].link);
        wikiLink.textContent = arrayOfTimelineItems[i].readMore;

        li.appendChild(titleItem);
        li.appendChild(contentContainer);
        contentContainer.appendChild(contentEl);
        contentContainer.appendChild(imgEl);
        listEl.appendChild(li);

        
    
    };

};


// <li data-horizontal-timeline='{"date": "01/01/0300", "customDisplay": "Ancient Art"}'>
{/* <h4>Ancient Art</h4>
<p class="date">30,000 B.C. - A.D. 400</p>
<div class="content">
    <p>
Ancient art refers to the many types of a art produced by the advanced cultures of ancient societies with some form of writing, such as those of ancient China, India, Mesopotamia, Persia, Palestine, Egypt, Greece, and Rome. The art of pre-literate societies is normally referred to as Prehistoric art and is not covered here. Although some Pre-Columbian cultures developed writing during the centuries before the arrival of Europeans, on grounds of dating these are covered at Pre-Columbian art, and articles such as Maya art and Aztec art. <a href="https://en.wikipedia.org/wiki/Ancient_art" target="_blank">Read more.</a>
    </p>
    <img src="./Assets/images/Eras/Ancient.jpeg" alt="Lion hunt. Mosaic from Pella (ancient Macedonia), late 4th century BC" width="300">
</div>
</li> */}







