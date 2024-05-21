
const tokenLength = 20;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let Token = '';  

for (let i = 0; i < tokenLength; i++) {  
    const randomIndex = Math.floor(Math.random() * characters.length);
    Token += characters[randomIndex];
}

export default Token