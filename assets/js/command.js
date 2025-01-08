export async function processCommand(command) {const cmd = command.toLowerCase().trim();if (cmd === "help") {return `Available commands:
- help: Show this help message
- clear (or c): Clear the terminal
- about: About DickButt
- contract: Show contract address
- socials: Show social media links
- buy: How to buy DickButt on INK
- meme: Random dickbutt fact
- ascii: Show ASCII art`;}if (cmd === "about") {return `DickButt (DickButt on INK) - The memecoin that brings back the legendary 2006 dickbutt meme.
No founders allocation. No pre-sale. No tax. Just dickbutt.`;}if (cmd === "contract") {return `DickButt on INK Contract Address:
0x21C97338b1EA81A0b49930483C70d5B79ABcf041`;}if (cmd === "socials") {return `Follow DickButt:
Twitter: https://x.com/DickButtOnINK
Telegram: https://t.me/DickButtOnINK`;}if (cmd === "buy") {return `How to buy DickButt on INK:
1. Get $ETH
2. Bridge to INK Network
3. Connect to INK Network
4. Trade $ETH for $DBI on InkySwap`;}if (cmd === "meme") {const facts = ["DickButt was created by KC Green in 2006","The original DickButt appeared in KC Green's comic series 'Horribleville'","DickButt became a viral sensation on Reddit and 4chan","DickButt has appeared in countless memes and even some video games","The simplicity of DickButt's design is part of its charm"];return facts[Math.floor(Math.random() * facts.length)];}if (cmd === "ascii") {return `
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠾⠛⢉⣉⣉⣉⡉⠛⠷⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢀⣴⠋⣠⣴⣾⣿⣿⣿⣿⣿⣿⣦⣌⠙⣷⣄⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⡴⠋⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣌⠙⢷⡀⠀⠀⠀⠀⠀
    ⠀⠀⠀⢀⡾⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⢻⡄⠀⠀⠀⠀
    ⠀⠀⢠⡟⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⢻⡄⠀⠀⠀
    ⠀⢠⡟⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⢻⡄⠀⠀
    ⢠⡟⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⢻⡄⠀
    ⡿⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⢿⠀
    ⢧⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣼⠀
    ⠈⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀
    ⠀⠀⠀⠈⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠟⠛⠉⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠛⠛⠛⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;}if (cmd === "clear" || cmd === "c") {return "CLEAR_COMMAND";}return `Command not found: ${command}
Type 'help' for available commands.`;}
