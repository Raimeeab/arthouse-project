// ------------------------------ Global Variables ------------------------------
$('#era-timeline-container').horizontalTimeline({
    /* New object options... */
// If object doesn't exist in the user options, then default to the individual options,
// otherwise use the object.

// Can not use in conjunction with the single options...
// If both single and object options are set in the options, the object will take precedence.

dateIntervals: {
        "desktop": 200,
        "tablet": 150,
        "mobile": 120,
        "minimal": true
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
        "base": "fas fa-3x", // Space separated class names
        "scrollLeft": "fa-chevron-circle-left",
        "scrollRight": "fa-chevron-circle-right",
        "prev": "fa-arrow-circle-left",
        "next": "fa-arrow-circle-right",
        "pause": "fa-pause-circle",
        "play": "fa-play-circle"
    },
    animationClass: {
        "base": "animationSpeed", // Space separated class names
        "enter": {
            "left": "enter-left",
            "right": "enter-right"
        },
        "exit": {
            "left": "exit-left",
            "right": "exit-right"
        }
    }
});
