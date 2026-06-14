// script.js

const outputDiv = document.getElementById('output');
const inputTextSpan = document.getElementById('input-text');
const hiddenInput = document.getElementById('hidden-input');
const terminalContainer = document.getElementById('terminal');

// Boot Sequence
const bootText = [
    "INIT SYSTEM BOOT...",
    "LOADING KERNEL MODULES... [OK]",
    "MOUNTING FILESYSTEM... [OK]",
    "ESTABLISHING SECURE CONNECTION... [OK]",
    " ",
    "Welcome to Chaxu Patel's PortfolioOS v1.0",
    "Jr. Unity Developer building engaging mobile games",
    "Type 'help' to see available commands.",
    " "
];

let isTyping = false;

// Focus hidden input when clicking anywhere on the terminal
document.addEventListener('click', () => {
    hiddenInput.focus();
});

// Capture input
hiddenInput.addEventListener('input', (e) => {
    if (isTyping) {
        hiddenInput.value = ""; // Prevent typing while animation is running
        return;
    }
    inputTextSpan.textContent = hiddenInput.value;
});

hiddenInput.addEventListener('keydown', (e) => {
    if (isTyping) {
        e.preventDefault();
        return;
    }
    if (e.key === 'Enter') {
        const command = hiddenInput.value.trim();
        processCommand(command);
        hiddenInput.value = '';
        inputTextSpan.textContent = '';
    }
});

async function typeLines(lines, delay = 20) {
    isTyping = true;
    for (let i = 0; i < lines.length; i++) {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'output-line';
        outputDiv.appendChild(lineDiv);
        
        const line = lines[i];
        
        // Very fast typing for empty lines or brackets
        if (line.trim() === '' || line.startsWith('[')) {
            lineDiv.textContent = line;
            scrollToBottom();
            await new Promise(r => setTimeout(r, 50));
            continue;
        }

        for (let j = 0; j < line.length; j++) {
            lineDiv.textContent += line[j];
            scrollToBottom();
            
            // Randomize delay slightly for realistic typing
            const currentDelay = delay + (Math.random() * 10 - 5);
            await new Promise(r => setTimeout(r, currentDelay));
        }
        // Pause at end of line
        await new Promise(r => setTimeout(r, 100));
    }
    isTyping = false;
    hiddenInput.focus();
}

function scrollToBottom() {
    terminalContainer.scrollTop = terminalContainer.scrollHeight;
}

function processCommand(cmd) {
    // Echo command
    const echoDiv = document.createElement('div');
    echoDiv.className = 'command-echo';
    echoDiv.textContent = `chaxu@portfolio:~$ ${cmd}`;
    outputDiv.appendChild(echoDiv);
    
    if (cmd === '') {
        scrollToBottom();
        return;
    }

    const lowerCmd = cmd.toLowerCase();
    let linesToPrint = [];

    switch(lowerCmd) {
        case 'help':
            linesToPrint = [
                "Available commands:",
                "  about      - Personal information and bio",
                "  work       - Current role and experience",
                "  education  - Academic background",
                "  skills     - Technical skills and tools",
                "  projects   - Project database",
                "  contact    - Email and social links",
                "  resume     - View résumé download link",
                "  clear      - Clear terminal output",
                " "
            ];
            break;
        case 'about':
        case 'whoami':
            linesToPrint = document.getElementById('data-about').innerHTML.trim().split('\n');
            linesToPrint.push(" ");
            break;
        case 'work':
        case 'experience':
            linesToPrint = document.getElementById('data-work').innerHTML.trim().split('\n');
            linesToPrint.push(" ");
            break;
        case 'education':
            linesToPrint = document.getElementById('data-education').innerHTML.trim().split('\n');
            linesToPrint.push(" ");
            break;
        case 'skills':
            linesToPrint = document.getElementById('data-skills').innerHTML.trim().split('\n');
            linesToPrint.push(" ");
            break;
        case 'projects':
        case 'ls':
            linesToPrint = document.getElementById('data-projects').innerHTML.trim().split('\n');
            linesToPrint.push(" ");
            break;
        case 'contact':
            linesToPrint = document.getElementById('data-contact').innerHTML.trim().split('\n');
            linesToPrint.push(" ");
            break;
        case 'resume':
        case 'cv':
            linesToPrint = document.getElementById('data-resume').innerHTML.trim().split('\n');
            linesToPrint.push(" ");
            break;
        case 'clear':
            outputDiv.innerHTML = '';
            scrollToBottom();
            return;
        default:
            linesToPrint = [
                `Error: command not found: ${cmd}`,
                "Type 'help' to see available commands.",
                " "
            ];
            break;
    }

    // Faster typing for regular command output
    typeLines(linesToPrint, 10); 
}

// Start boot sequence
window.onload = () => {
    hiddenInput.focus();
    typeLines(bootText, 30);
};
