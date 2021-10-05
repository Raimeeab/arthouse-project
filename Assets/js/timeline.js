// ------------------------------ jsdilvr CDN Settings --------------------------
$("#era-timeline-container").horizontalTimeline({
  /* New object options... */
  // If object doesn't exist in the user options, then default to the individual options,
  // otherwise use the object.

  // Can not use in conjunction with the single options...
  // If both single and object options are set in the options, the object will take precedence.

  dateIntervals: {
    desktop: 200,
    tablet: 150,
    mobile: 120,
    minimal: true,
  },
  /* End new object options */

  dateDisplay: "year", // dateTime, date, time, dayMonth, monthYear, year
  dateOrder: "normal", // normal, reverse

  autoplay: false,
  autoplaySpeed: 8,
  autoplayPause_onHover: false,

  useScrollWheel: false,
  useTouchSwipe: true,
  useKeyboardKeys: false,
  addRequiredFile: true,
  useFontAwesomeIcons: true,
  useNavBtns: true,
  useScrollBtns: true,

  /* New object options... */
  // If object doesn't exist in the user options, then default to the individual options,
  // otherwise use the object.

  // Can not use in conjunction with the single options...
  // If both single and object options are set in the options, the object will take precedence.

  iconClass: {
    base: "fas fa-3x", // Space separated class names
    scrollLeft: "fa-chevron-circle-left",
    scrollRight: "fa-chevron-circle-right",
    prev: "fa-arrow-circle-left",
    next: "fa-arrow-circle-right",
    pause: "fa-pause-circle",
    play: "fa-play-circle",
  },
  animationClass: {
    base: "animationSpeed", // Space separated class names
    enter: {
      left: "enter-left",
      right: "enter-right",
    },
    exit: {
      left: "exit-left",
      right: "exit-right",
    },
  },
});

// ------------------------------ Global Variables ------------------------------
var listEl = document.querySelector("#orderedList");

var arrayOfTimelineItems = [
    {
        timeline: "{'date': '01/01/0400', 'customDisplay': 'Ancient Art'}",
        title: "Ancient Art",
        date: "30,000 B.C. - A.D. 400",
        content: 
            "Ancient art refers to the many types of a art produced by the advanced cultures of ancient societies with some form of writing, such as those of ancient China, India, Mesopotamia, Persia, Palestine, Egypt, Greece, and Rome. The art of pre-literate societies is normally referred to as Prehistoric art and is not covered here. Although some Pre-Columbian cultures developed writing during the centuries before the arrival of Europeans, on grounds of dating these are covered at Pre-Columbian art, and articles such as Maya art and Aztec art.",
        link: "https://en.wikipedia.org/wiki/Ancient_art",
        readMore: "Read more.",
        img: "./Assets/images/Eras/Ancient.jpeg",
        alt: " Lion hunt. Mosaic from Pella (ancient Macedonia), late 4th century BC"
    },
    {
        timeline: "{'date': '01/01/0500', 'customDisplay': 'Medieval'}",
        title: "Medieval",
        date: "A.D 500 - A.D. 1400",
        content: 
            "The medieval art of the Western world covers a vast scope of time and place, over 1000 years of art in Europe, and at certain periods in Western Asia and Northern Africa. It includes major art movements and periods, national and regional art, genres, revivals, the artists' crafts, and the artists themselves.\n Art historians attempt to classify medieval art into major periods and styles, often with some difficulty. A generally accepted scheme includes the later phases of Early Christian art, Migration Period art, Byzantine art, Insular art, Pre-Romanesque, Romanesque art, and Gothic art, as well as many other periods within these central styles. In addition each region, mostly during the period in the process of becoming nations or cultures, had its own distinct artistic style, such as Anglo-Saxon art or Viking art.\n Medieval art was produced in many media, and works survive in large numbers in sculpture, illuminated manuscripts, stained glass, metalwork and mosaics, all of which have had a higher survival rate than other media such as fresco wall-paintings, work in precious metals or textiles, including tapestry. Especially in the early part of the period, works in the so-called \"minor arts\" or decorative arts, such as metalwork, ivory carving, enamel and embroidery using precious metals, were probably more highly valued than paintings or monumental sculpture.",
        link: "https://en.wikipedia.org/wiki/Medieval_art",
        readMore: "Read more.",
        img: "./Assets/images/Eras/Medieval.jpg",
        alt: "Detail of The Effects of Good Government, a fresco in the City Hall of Siena by Ambrogio Lorenzetti, 1338."
    }
];

function timedRenderer() {
    var idx = 0;
    var afterDate = "01/01/0030";
  
    return function render2() {
      if (idx >= arrayOfTimelineItems.length) {
          return;
        };
  
      const { timeline, title, date, content, readMore, img, link, alt } = arrayOfTimelineItems[idx];
  
      var html = `<li data-horizontal-timeline='${timeline}'>
                <h4>${title}</h4>
                <p class="date">${date}</p>
                <div class="content"><p>${content}
                <a href="${link}" target="_blank">${readMore}</a>
                 </p><img src="${img}" alt="${alt}"/></div>
                </li>`;
  
      $("#era-timeline-container").horizontalTimeline("addEvent", html, "after", afterDate);
      afterDate = JSON.parse(timeline).date;
      idx++;
  
      setTimeout(render2, 350);
    };
};
  
setTimeout(timedRenderer(), 350);
