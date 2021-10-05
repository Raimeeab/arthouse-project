// // Smooth scroll disabled.
// $('#example').horizontalTimeline('goTo', '01/01/2001');

// // Smooth scroll enabled with the defaults.
// $('#example').horizontalTimeline('goTo', '01/01/2001', {smoothScroll: true});

// // Smooth scroll enabled with speed set and the rest as defaults.
// $('#example').horizontalTimeline('goTo', '01/01/2001', {smoothScroll: true, speed: 1000});

// // Smooth scroll enabled with all options set.
// $('#example').horizontalTimeline('goTo', '01/01/2001', {smoothScroll: true, speed: 1000, offset: 100, easing: "easeInQuad"});


var arrayOfTimelineItem = [
    {
        timeline: '{"date": "01/01/0400", "customDisplay": "Prehistortic Art"}',
        title: 'Prehistortic Art',
        date: '~40,000 - 40,000 B.C.',
        content: 'Prehistoric art includes a broad range of art made by illiterate cultures, including some of the earliest human artifacts. The best-known Prehistoric artworks are the large Paleolithic cave paintings that depict animals in continental Europe, particularly the ones at Lascaux in the Dordogne region of France. Several hundread decorated caves are known, spanning the Upper Paleolithic period (c. 38,000-12,000 BC). There are examples in Ukraine, Italy and Great Britain, but most of them are in France and Spain. Many theories have been suggested about the art\'s purpose, the most accepted being that it was part of religious rituals, possibly to evoke hunting success. \n\n Besides cave painting, in various parts of the world, especially in Europe, small prehistoric statuettes known as Venus figurines with exaggerated breasts and bellies were made, the famous one being Venus of Willendorf, found in Austria. Most have small heads, wide hips, and legs that taper to a point. Arms and feet are often absent, and the head is usually small and faceless. ',
        link: 'https://en.wikipedia.org/wiki/Prehistoric_art',
        readMore: 'read more.'
    },
    {
        timeline: '{"date": "01/01/0400", "customDisplay": "Prehistortic Art"}',
        title: 'Prehistortic Art',
        date: '~40,000 - 40,000 B.C.',
        content: 'Prehistoric art includes a broad range of art made by illiterate cultures, including some of the earliest human artifacts. The best-known Prehistoric artworks are the large Paleolithic cave paintings that depict animals in continental Europe, particularly the ones at Lascaux in the Dordogne region of France. Several hundread decorated caves are known, spanning the Upper Paleolithic period (c. 38,000-12,000 BC). There are examples in Ukraine, Italy and Great Britain, but most of them are in France and Spain. Many theories have been suggested about the art\'s purpose, the most accepted being that it was part of religious rituals, possibly to evoke hunting success. \n\n Besides cave painting, in various parts of the world, especially in Europe, small prehistoric statuettes known as Venus figurines with exaggerated breasts and bellies were made, the famous one being Venus of Willendorf, found in Austria. Most have small heads, wide hips, and legs that taper to a point. Arms and feet are often absent, and the head is usually small and faceless. ',
        link: 'https://en.wikipedia.org/wiki/Prehistoric_art',
        readMore: 'read more.'
    },
    {
        timeline: '{"date": "01/01/0400", "customDisplay": "Prehistortic Art"}',
        title: 'Prehistortic Art',
        date: '~40,000 - 40,000 B.C.',
        content: 'Prehistoric art includes a broad range of art made by illiterate cultures, including some of the earliest human artifacts. The best-known Prehistoric artworks are the large Paleolithic cave paintings that depict animals in continental Europe, particularly the ones at Lascaux in the Dordogne region of France. Several hundread decorated caves are known, spanning the Upper Paleolithic period (c. 38,000-12,000 BC). There are examples in Ukraine, Italy and Great Britain, but most of them are in France and Spain. Many theories have been suggested about the art\'s purpose, the most accepted being that it was part of religious rituals, possibly to evoke hunting success. \n\n Besides cave painting, in various parts of the world, especially in Europe, small prehistoric statuettes known as Venus figurines with exaggerated breasts and bellies were made, the famous one being Venus of Willendorf, found in Austria. Most have small heads, wide hips, and legs that taper to a point. Arms and feet are often absent, and the head is usually small and faceless. ',
        link: 'https://en.wikipedia.org/wiki/Prehistoric_art',
        readMore: 'read more.'
    },
    {
        timeline: '{"date": "01/01/0400", "customDisplay": "Prehistortic Art"}',
        title: 'Prehistortic Art',
        date: '~40,000 - 40,000 B.C.',
        content: 'Prehistoric art includes a broad range of art made by illiterate cultures, including some of the earliest human artifacts. The best-known Prehistoric artworks are the large Paleolithic cave paintings that depict animals in continental Europe, particularly the ones at Lascaux in the Dordogne region of France. Several hundread decorated caves are known, spanning the Upper Paleolithic period (c. 38,000-12,000 BC). There are examples in Ukraine, Italy and Great Britain, but most of them are in France and Spain. Many theories have been suggested about the art\'s purpose, the most accepted being that it was part of religious rituals, possibly to evoke hunting success. \n\n Besides cave painting, in various parts of the world, especially in Europe, small prehistoric statuettes known as Venus figurines with exaggerated breasts and bellies were made, the famous one being Venus of Willendorf, found in Austria. Most have small heads, wide hips, and legs that taper to a point. Arms and feet are often absent, and the head is usually small and faceless. ',
        link: 'https://en.wikipedia.org/wiki/Prehistoric_art',
        readMore: 'read more.'
    },
]


var firstTime = true;

function render() {
    for (i = 0; i < arrayOfTimelineItem.length; i++) {
        var p = document.createElement('li');
        if(firstTime){
            p.classList='selected';
            firstTime = false;
        }
    
        p.setAttribute('data-horizontal-timeline',arrayOfTimelineItem[i].timeline);
    
        var titleItem = document.createElement('h4');
        titleItem.textContent = arrayOfTimelineItem[i].title;
        
        p.appendChild(titleItem);
        
        // p.classList = '';
        // p.textContent = '';

    }

}


/* <li class="selected" data-horizontal-timeline='{"date": "01/01/0400", "customDisplay": "Prehistortic Art"}'>
                        <h4>Prehistortic Art</h4>
                        <p class="date"> ~40,000 - 40,000 B.C.</p>
                        <br>
                        <div class="content">
                            <p>
Prehistoric art includes a broad range of art made by illiterate cultures, including some of the earliest human artifacts. The best-known Prehistoric artworks are the large Paleolithic cave paintings that depict animals in continental Europe, particularly the ones at Lascaux in the Dordogne region of France. Several hundread decorated caves are known, spanning the Upper Paleolithic period (c. 38,000-12,000 BC). There are examples in Ukraine, Italy and Great Britain, but most of them are in France and Spain. Many theories have been suggested about the art's purpose, the most accepted being that it was part of religious rituals, possibly to evoke hunting success.

Besides cave painting, in various parts of the world, especially in Europe, small prehistoric statuettes known as Venus figurines with exaggerated breasts and bellies were made, the famous one being Venus of Willendorf, found in Austria. Most have small heads, wide hips, and legs that taper to a point. Arms and feet are often absent, and the head is usually small and faceless. <a href="https://en.wikipedia.org/wiki/Prehistoric_art" target="_blank">Read more.</a>
                            </p>
                            <img src="./Assets/images/Eras/Prehistoric.jpeg" alt="Detail in the Hall of the Bulls, 18,000-15,000 BC" width="300">
                        </div>
                    </li> */