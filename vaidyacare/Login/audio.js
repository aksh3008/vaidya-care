/* Customize the size of the audio control */
#audioPlayer {
    width: 200px; /* Adjust the width as needed */
}

/* Customize the appearance of the audio control buttons */
#audioPlayer::-webkit-media-controls-panel {
    width: inherit;
    height: 30px; /* Adjust the height as needed */
}

#audioPlayer::-webkit-media-controls-play-button,
#audioPlayer::-webkit-media-controls-timeline,
#audioPlayer::-webkit-media-controls-volume-slider {
    display: none; /* Hide certain controls if needed */
}

/* You can add similar rules for other browser engines like Gecko (Firefox) and Edge */
