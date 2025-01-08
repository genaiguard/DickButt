document.addEventListener('DOMContentLoaded', () => {
    // Command Prompt functionality
    const commandInput = document.getElementById('commandInput');
    const output = document.getElementById('output');
    let commandHistory = [];
    let historyIndex = -1;

    async function handleCommand(command) {
        if (!command) return;
        
        // Add command to output
        output.innerHTML += `\n\nC:\\QUIRKY\\SYSTEM32>${command}`;
        
        // Process command
        const { processCommand } = await import('./command.js');
        const result = await processCommand(command);
        
        if (result === 'CLEAR_COMMAND') {
            output.innerHTML = `DickButt on INK(R) QuirkyOS
(C) Copyright DickButt Enterprises 2008-2024.

Type 'help' for a list of available commands.`;
        } else {
            output.innerHTML += `\n${result}`;
        }
        
        // Scroll to bottom
        output.scrollTop = output.scrollHeight;
        
        // Add to history
        commandHistory.push(command);
        historyIndex = commandHistory.length;
    }

    if (commandInput) {
        commandInput.addEventListener('keydown', async (e) => {
            if (e.key === 'Enter') {
                const command = commandInput.value.trim();
                commandInput.value = '';
                await handleCommand(command);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    commandInput.value = commandHistory[historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    commandInput.value = commandHistory[historyIndex];
                } else {
                    historyIndex = commandHistory.length;
                    commandInput.value = '';
                }
            }
        });

        // Focus input when clicking anywhere in the command prompt
        document.querySelector('.command-prompt').addEventListener('click', () => {
            commandInput.focus();
        });
    }

    // Game dialog handlers
    const gameLinks = document.querySelectorAll('[data-game-dialog]');
    gameLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const dialogId = link.getAttribute('data-game-dialog');
            const dialog = document.getElementById(dialogId);
            if (dialog) {
                dialog.style.display = 'block';
            }
        });
    });

    // Close buttons for dialogs
    const closeButtons = document.querySelectorAll('.title-bar-controls button[aria-label="Close"]');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const dialog = button.closest('.window');
            if (dialog) {
                dialog.style.display = 'none';
                // Handle overlay for media dialog
                if (dialog.id === 'media-dialog') {
                    document.getElementById('media-overlay').style.display = 'none';
                    // Clear content to stop video playback
                    document.getElementById('media-content').innerHTML = '';
                }
            }
        });
    });

    // Copy contract address
    window.copyToClipboard = function(elementId) {
        const element = document.getElementById(elementId);
        const text = element.textContent;
        navigator.clipboard.writeText(text).then(() => {
            alert('Contract address copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    // Media Explorer functionality
    const fileList = document.getElementById('file-list');
    const mediaDialog = document.getElementById('media-dialog');
    const mediaContent = document.getElementById('media-content');
    const mediaDialogTitle = document.getElementById('media-dialog-title');
    const overlay = document.getElementById('media-overlay');

    // Handle file clicks
    if (fileList) {
        fileList.addEventListener('click', (e) => {
            const item = e.target.closest('li');
            if (!item) return;

            const filePath = item.getAttribute('data-image');
            if (!filePath) return;

            // Show overlay
            overlay.style.display = 'block';
            
            // Update dialog content based on file type
            const isVideo = filePath.match(/\.(mp4|webm)$/i);
            mediaContent.innerHTML = isVideo
                ? `<video controls autoplay><source src="${filePath}" type="video/${isVideo[1]}">Your browser does not support video.</video>`
                : `<img src="${filePath}" alt="Media content">`;
            
            mediaDialogTitle.textContent = item.textContent.trim();
            mediaDialog.style.display = 'block';
        });
    }

    // Close media dialog with ESC key or overlay click
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mediaDialog.style.display === 'block') {
            mediaDialog.style.display = 'none';
            overlay.style.display = 'none';
            mediaContent.innerHTML = '';
        }
    });

    overlay?.addEventListener('click', () => {
        mediaDialog.style.display = 'none';
        overlay.style.display = 'none';
        mediaContent.innerHTML = '';
    });
}); 