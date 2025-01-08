document.addEventListener('DOMContentLoaded', function() {
    const Webamp = window.Webamp;
    
    if (!Webamp.browserIsSupported()) {
        alert('Webamp is not supported in this browser');
        return;
    }

    const webamp = new Webamp({
        initialTracks: [
            {
                url: "assets/music/Dick_Butt_Dance.mp3",
                duration: 120,
                metaData: {
                    title: "Dick Butt Dance",
                    artist: "DickButt"
                }
            },
            {
                url: "assets/music/FreshPrinceOfDickbuttBelAir.mp3",
                duration: 132,
                metaData: {
                    title: "Fresh Prince of Dickbutt",
                    artist: "DickButt"
                }
            },
            {
                url: "assets/music/hexidon_dickbutt.mp3",
                duration: 168,
                metaData: {
                    title: "Dong",
                    artist: "DickButt"
                }
            },
            {
                url: "assets/music/ruubz001_dickbutt.mp3",
                duration: 96,
                metaData: {
                    title: "Ruubz001",
                    artist: "DickButt"
                }
            }
        ],
        enableHotkeys: true
    });

    // Error handling for audio loading
    webamp.onClose(() => {
        webamp.dispose();
    });

    webamp.renderWhenReady(document.getElementById('webamp'))
        .then(() => {
            console.log('Webamp loaded successfully');
            
            // Add drag handling
            const webampElement = document.getElementById('webamp');
            let startX, startY, initialX, initialY;
            
            function onDragStart(e) {
                webampElement.classList.add('dragging');
                const rect = webampElement.getBoundingClientRect();
                
                if (e.type === 'touchstart') {
                    startX = e.touches[0].clientX - rect.left;
                    startY = e.touches[0].clientY - rect.top;
                } else {
                    startX = e.clientX - rect.left;
                    startY = e.clientY - rect.top;
                }
            }
            
            function onDragEnd() {
                webampElement.classList.remove('dragging');
            }
            
            // Mouse events
            webampElement.addEventListener('mousedown', onDragStart);
            document.addEventListener('mouseup', onDragEnd);
            
            // Touch events
            webampElement.addEventListener('touchstart', onDragStart);
            document.addEventListener('touchend', onDragEnd);
        })
        .catch(err => {
            console.error('Error loading Webamp:', err);
        });
}); 