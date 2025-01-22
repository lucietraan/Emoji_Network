$(".startdrag").draggable();

const gotop1 = document.getElementById('top1page');
const startpage = document.getElementById('starting'); 
const page1 = document.getElementById('firstpage');
const gotop2 = document.getElementById('top2page');
const page2 = document.getElementById('secondpage'); 
const gotop3 = document.getElementById('top3page');
const page3 = document.getElementById('thirdpage'); 

const q1button = document.getElementById('q1click'); 
const q1content = document.querySelector('.q1content');
const answer1 = document.querySelector('.answer1');
const emojirun1 = document.querySelector('.emojirun1');

const closeq1 = document.getElementById("closeq1");
const closea1 = document.getElementById("closea1");
const closee1 = document.getElementById("closee1");
const closeq2 = document.getElementById("closeq2"); 
const closea2 = document.getElementById("closea2");
const closeq3 = document.getElementById('closeq3'); 
const closea3 = document.getElementById("closea3"); 
const closee3 = document.getElementById("closee3");

const closeq4 = document.getElementById("closeq4"); 
const closeq5 = document.getElementById("closeq5"); 
const closeq6 = document.getElementById("closeq6"); 
const closea4 = document.getElementById("closea4");
const closea5 = document.getElementById("closea5");
const closea6 = document.getElementById("closea6");
const closee4 = document.getElementById("closee4");
const closee5 = document.getElementById("closee5");
const closee6 = document.getElementById("closee6");

const q2button = document.getElementById('q2click'); 
const q2content = document.querySelector('.q2content');
const answer2 = document.querySelector('.answer2');
const emojirun2 = document.querySelector('.emojirun2');

const q3button = document.getElementById('q3click'); 
const q3content = document.querySelector('.q3content'); 
const answer3 = document.querySelector('.answer3');
const emojirun3 = document.querySelector('.emojirun3');

const q4button = document.getElementById('q4click'); 
const q4content = document.querySelector('.q4content'); 
const answer4 = document.querySelector('.answer4');
const emojirun4 = document.querySelector('.emojirun4');

const q5button = document.getElementById('q5click'); 
const q5content = document.querySelector('.q5content'); 
const answer5 = document.querySelector('.answer5');
const emojirun5 = document.querySelector('.emojirun5');

const q6button = document.getElementById('q6click'); 
const q6content = document.querySelector('.q6content'); 
const answer6 = document.querySelector('.answer6');
const emojirun6 = document.querySelector('.emojirun6');

// Page 2 
const p2q1button = document.getElementById('p2q1click'); 
const p2q2button = document.getElementById('p2q2click'); 
const p2q3button = document.getElementById('p2q3click'); 
const p2q4button = document.getElementById('p2q4click'); 
const p2q5button = document.getElementById('p2q5click'); 
const p2q6button = document.getElementById('p2q6click'); 

const p2q1content = document.querySelector('.p2q1content');
const p2q2content = document.querySelector('.p2q2content');
const p2q3content = document.querySelector('.p2q3content');
const p2q4content = document.querySelector('.p2q4content');
const p2q5content = document.querySelector('.p2q5content');
const p2q6content = document.querySelector('.p2q6content');

const p2closeq1 = document.getElementById("p2closeq1"); 
const p2closeq2 = document.getElementById("p2closeq2"); 
const p2closeq3 = document.getElementById("p2closeq3"); 
const p2closeq4 = document.getElementById("p2closeq4"); 
const p2closeq5 = document.getElementById("p2closeq5"); 
const p2closeq6 = document.getElementById("p2closeq6"); 
const closep2a1 = document.getElementById("closep2a1"); 
const closep2a2 = document.getElementById("closep2a2"); 
const closep2a3 = document.getElementById("closep2a3"); 
const closep2a4 = document.getElementById("closep2a4"); 
const closep2a5 = document.getElementById("closep2a5"); 
const closep2a6 = document.getElementById("closep2a6"); 
const p2closee1 = document.getElementById("p2closee1"); 
const p2closee2 = document.getElementById("p2closee2");
const p2closee3 = document.getElementById("p2closee3"); 
const p2closee4 = document.getElementById("p2closee4"); 
const p2closee5 = document.getElementById("p2closee5"); 
const p2closee6 = document.getElementById("p2closee6");  

const p2answer1 = document.querySelector('.p2answer1');
const p2answer2 = document.querySelector('.p2answer2');
const p2answer3 = document.querySelector('.p2answer3');
const p2answer4 = document.querySelector('.p2answer4');
const p2answer5 = document.querySelector('.p2answer5');
const p2answer6 = document.querySelector('.p2answer6');

const p2emojirun1 = document.querySelector('.p2emojirun1');
const p2emojirun2 = document.querySelector('.p2emojirun2');
const p2emojirun3 = document.querySelector('.p2emojirun3');
const p2emojirun4 = document.querySelector('.p2emojirun4');
const p2emojirun5 = document.querySelector('.p2emojirun5');
const p2emojirun6 = document.querySelector('.p2emojirun6');

//page3 
const p3q1button = document.getElementById('p3q1click'); 
const p3q2button = document.getElementById('p3q2click'); 
const p3q3button = document.getElementById('p3q3click'); 
const p3q4button = document.getElementById('p3q4click'); 
const p3q5button = document.getElementById('p3q5click'); 
const p3q6button = document.getElementById('p3q6click'); 

const p3q1content = document.querySelector('.p3q1content');
const p3q2content = document.querySelector('.p3q2content');
const p3q3content = document.querySelector('.p3q3content');
const p3q4content = document.querySelector('.p3q4content');
const p3q5content = document.querySelector('.p3q5content');
const p3q6content = document.querySelector('.p3q6content');

const p3answer1 = document.querySelector('.p3answer1');
const p3answer2 = document.querySelector('.p3answer2');
const p3answer3 = document.querySelector('.p3answer3');
const p3answer4 = document.querySelector('.p3answer4');
const p3answer5 = document.querySelector('.p3answer5');
const p3answer6 = document.querySelector('.p3answer6');

const p3closeq1 = document.getElementById("p3closeq1"); 
const p3closeq2 = document.getElementById("p3closeq2"); 
const p3closeq3 = document.getElementById("p3closeq3"); 
const p3closeq4 = document.getElementById("p3closeq4"); 
const p3closeq5 = document.getElementById("p3closeq5"); 
const p3closeq6 = document.getElementById("p3closeq6"); 
const closep3a1 = document.getElementById("closep3a1"); 
const closep3a2 = document.getElementById("closep3a2"); 
const closep3a3 = document.getElementById("closep3a3"); 
const closep3a4 = document.getElementById("closep3a4"); 
const closep3a5 = document.getElementById("closep3a5"); 
const closep3a6 = document.getElementById("closep3a6"); 
const p3closee1 = document.getElementById("p3closee1"); 
const p3closee2 = document.getElementById("p3closee2");
const p3closee3 = document.getElementById("p3closee3"); 
const p3closee4 = document.getElementById("p3closee4"); 
const p3closee5 = document.getElementById("p3closee5"); 
const p3closee6 = document.getElementById("p3closee6");  

const p3emojirun1 = document.querySelector('.p3emojirun1');
const p3emojirun2 = document.querySelector('.p3emojirun2');
const p3emojirun3 = document.querySelector('.p3emojirun3');
const p3emojirun4 = document.querySelector('.p3emojirun4');
const p3emojirun5 = document.querySelector('.p3emojirun5');
const p3emojirun6 = document.querySelector('.p3emojirun6');

const backtostart = document.querySelector('.backtostart');
const backtostart2 = document.querySelector('.backtostart2'); 
const backtostart3 = document.querySelector('.backtostart3'); 

gotop1.addEventListener('click', () => { 
    console.log('emoji1 clicked!'); 
    startpage.style.display = 'none'; 
    page1.style.display = 'block'; 
}); 

gotop2.addEventListener('click', () => { 
    console.log('emoji2 clicked!'); 
    startpage.style.display = 'none'; 
    page2.style.display = 'block'; 
}); 

gotop3.addEventListener('click', () => { 
    console.log('emoji3 clicked!'); 
    startpage.style.display = 'none'; 
    page3.style.display = 'block'; 
}); 

backtostart.addEventListener('click', () => { 
    console.log ('go back!'); 
    page1.style.display = 'none'; 
    startpage.style.display = 'block'; 
})

backtostart2.addEventListener('click', () => { 
    console.log ('go back 2!'); 
    page2.style.display = 'none'; 
    startpage.style.display = 'block'; 
})
backtostart3.addEventListener('click', () => { 
    console.log ('go back 3!'); 
    page3.style.display = 'none'; 
    startpage.style.display = 'block'; 
})

q1button.addEventListener('click', () => { 
    console.log('p1 q1 clicked!');
    q1content.style.display = 'block';
    answer1.style.display = 'block';
    emojirun1.style.display = 'block';
    q1button.style.display = "none"; 
}); 

closeq1.addEventListener("click", () => {
	q1content.style.display = "none";
});

closea1.addEventListener("click", () => {
	answer1.style.display = "none";
});

closee1.addEventListener("click", () => {
	emojirun1.style.display = "none";
});

closeq2.addEventListener("click", () => {
	q2content.style.display = "none";
});

closea2.addEventListener("click", () => {
	answer2.style.display = "none";
});

closee2.addEventListener("click", () => {
	emojirun2.style.display = "none";
});

closeq3.addEventListener("click", () => {
	q3content.style.display = "none";
});

closea3.addEventListener("click", () => {
	answer3.style.display = "none";
});

closee3.addEventListener("click", () => {
	emojirun3.style.display = "none";
});

closeq4.addEventListener("click", () => {
	q4content.style.display = "none";
});

closeq5.addEventListener("click", () => {
	q5content.style.display = "none";
});

closeq6.addEventListener("click", () => {
	q6content.style.display = "none";
});

closea4.addEventListener("click", () => {
	answer4.style.display = "none";
});

closea5.addEventListener("click", () => {
	answer5.style.display = "none";
});

closea6.addEventListener("click", () => {
	answer6.style.display = "none";
});

closee4.addEventListener("click", () => {
	emojirun4.style.display = "none";
});

closee5.addEventListener("click", () => {
	emojirun5.style.display = "none";
});
closee6.addEventListener("click", () => {
	emojirun6.style.display = "none";
});

q2button.addEventListener('click', () => { 
    console.log('p1 q2 clicked!');
    q2content.style.display = 'block';
    answer2.style.display = 'block';
    emojirun2.style.display = 'block';
    q2button.style.display = "none"; 
}); 


q3button.addEventListener('click', () => { 
    console.log('p1 q3 clicked!');
    q3content.style.display = 'block';
    answer3.style.display = 'block';
    emojirun3.style.display = 'block';
    q3button.style.display = "none"; 
}); 

q4button.addEventListener('click', () => { 
    console.log('p1 q4 clicked!');
    q4content.style.display = 'block';
    answer4.style.display = 'block';
    q4button.style.display = "none"; 
    emojirun4.style.display = 'block';
}); 

q5button.addEventListener('click', () => { 
    console.log('p1 q5 clicked!');
    q5content.style.display = 'block';
    answer5.style.display = 'block';
    q5button.style.display = "none"; 
    emojirun5.style.display = 'block';
}); 

q6button.addEventListener('click', () => { 
    console.log('p1 q6 clicked!');
    q6content.style.display = 'block';
    answer6.style.display = 'block';
    q6button.style.display = "none"; 
    emojirun6.style.display = 'block';
}); 

// PAGE 2

p2q1button.addEventListener('click', () => { 
    console.log('p2 q1 clicked!');
    p2q1content.style.display = 'block';
    p2answer1.style.display ='block'; 
    p2emojirun1.style.display = 'block';
    p2q1button.style.display = "none"; 
}); 

p2q2button.addEventListener('click', () => { 
    console.log('p2 q2 clicked!');
    p2q2content.style.display = 'block';
    p2answer2.style.display ='block'; 
    p2emojirun2.style.display = 'block';
    p2q2button.style.display = "none"; 
}); 

p2q3button.addEventListener('click', () => { 
    console.log('p2 q3 clicked!');
    p2q3content.style.display = 'block';
    p2answer3.style.display ='block'; 
    p2emojirun3.style.display = 'block';
    p2q3button.style.display = "none"; 
}); 

p2q4button.addEventListener('click', () => { 
    console.log('p2 q4 clicked!');
    p2q4content.style.display = 'block';
    p2answer4.style.display ='block'; 
    p2emojirun4.style.display = 'block';
    p2q4button.style.display = "none"; 
}); 

p2q5button.addEventListener('click', () => { 
    console.log('p2 q5 clicked!');
    p2q5content.style.display = 'block';
    p2answer5.style.display ='block'; 
    p2emojirun5.style.display = 'block';
    p2q5button.style.display = "none"; 
}); 

p2q6button.addEventListener('click', () => { 
    console.log('p2 q6 clicked!');
    p2q6content.style.display = 'block';
    p2answer6.style.display ='block'; 
    p2emojirun6.style.display = 'block';
    p2q6button.style.display = "none"; 
}); 

p2closeq1.addEventListener("click", () => {
	p2q1content.style.display = "none";
});
p2closeq2.addEventListener("click", () => {
	p2q2content.style.display = "none";
});
p2closeq3.addEventListener("click", () => {
	p2q3content.style.display = "none";
});
p2closeq4.addEventListener("click", () => {
	p2q4content.style.display = "none";
});
p2closeq5.addEventListener("click", () => {
	p2q5content.style.display = "none";
});
p2closeq6.addEventListener("click", () => {
	p2q6content.style.display = "none";
});

closep2a1.addEventListener("click", () => {
	p2answer1.style.display = "none";
});
closep2a2.addEventListener("click", () => {
	p2answer2.style.display = "none";
});
closep2a3.addEventListener("click", () => {
	p2answer3.style.display = "none";
});
closep2a4.addEventListener("click", () => {
	p2answer4.style.display = "none";
});
closep2a5.addEventListener("click", () => {
	p2answer5.style.display = "none";
});
closep2a6.addEventListener("click", () => {
	p2answer6.style.display = "none";
});

p2closee1.addEventListener("click", () => {
	p2emojirun1.style.display = "none";
});
p2closee2.addEventListener("click", () => {
	p2emojirun2.style.display = "none";
});
p2closee3.addEventListener("click", () => {
	p2emojirun3.style.display = "none";
});
p2closee4.addEventListener("click", () => {
	p2emojirun4.style.display = "none";
});
p2closee5.addEventListener("click", () => {
	p2emojirun5.style.display = "none";
});
p2closee6.addEventListener("click", () => {
	p2emojirun6.style.display = "none";
});

//page3 

p3q1button.addEventListener('click', () => { 
    console.log('p3 q1 clicked!');
    p3q1content.style.display = 'block';
    p3answer1.style.display ='block'; 
    p3emojirun1.style.display = 'block';
    p3q1button.style.display = "none"; 
}); 

p3q2button.addEventListener('click', () => { 
    console.log('p3 q2 clicked!');
    p3q2content.style.display = 'block';
    p3answer2.style.display ='block'; 
    p3emojirun2.style.display = 'block';
    p3q2button.style.display = "none"; 
}); 

p3q3button.addEventListener('click', () => { 
    console.log('p3 q3 clicked!');
    p3q3content.style.display = 'block';
    p3answer3.style.display ='block'; 
    p3emojirun3.style.display = 'block';
    p3q3button.style.display = "none"; 
}); 

p3q4button.addEventListener('click', () => { 
    console.log('p3 q4 clicked!');
    p3q4content.style.display = 'block';
    p3answer4.style.display ='block'; 
    p3emojirun4.style.display = 'block';
    p3q4button.style.display = "none"; 
}); 

p3q5button.addEventListener('click', () => { 
    console.log('p3 q5 clicked!');
    p3q5content.style.display = 'block';
    p3answer5.style.display ='block'; 
    p3emojirun5.style.display = 'block';
    p3q5button.style.display = "none"; 
}); 

p3q6button.addEventListener('click', () => { 
    console.log('p3 q6 clicked!');
    p3q6content.style.display = 'block';
    p3answer6.style.display ='block'; 
    p3emojirun6.style.display = 'block';
    p3q6button.style.display = "none"; 
}); 

p3closeq1.addEventListener("click", () => {
	p3q1content.style.display = "none";
});
p3closeq2.addEventListener("click", () => {
	p3q2content.style.display = "none";
});
p3closeq3.addEventListener("click", () => {
	p3q3content.style.display = "none";
});
p3closeq4.addEventListener("click", () => {
	p3q4content.style.display = "none";
});
p3closeq5.addEventListener("click", () => {
	p3q5content.style.display = "none";
});
p3closeq6.addEventListener("click", () => {
	p3q6content.style.display = "none";
});

closep3a1.addEventListener("click", () => {
	p3answer1.style.display = "none";
});
closep3a2.addEventListener("click", () => {
	p3answer2.style.display = "none";
});
closep3a3.addEventListener("click", () => {
	p3answer3.style.display = "none";
});
closep3a4.addEventListener("click", () => {
	p3answer4.style.display = "none";
});
closep3a5.addEventListener("click", () => {
	p3answer5.style.display = "none";
});
closep3a6.addEventListener("click", () => {
	p3answer6.style.display = "none";
});
p3closee1.addEventListener("click", () => {
	p3emojirun1.style.display = "none";
});
p3closee2.addEventListener("click", () => {
	p3emojirun2.style.display = "none";
});
p3closee3.addEventListener("click", () => {
	p3emojirun3.style.display = "none";
});
p3closee4.addEventListener("click", () => {
	p3emojirun4.style.display = "none";
});
p3closee5.addEventListener("click", () => {
	p3emojirun5.style.display = "none";
});
p3closee6.addEventListener("click", () => {
	p3emojirun6.style.display = "none";
});

const p1runemojis = ["👋", "😉", "😌", "😅"];  
const p1runemojis2 = ['🤔', '🤭', '🥲']; 
const p1runemojis3 = ['🤔', '✨', '😅', '😉', '😈', '😃', '🧐', '💭', '🍑', '🍆', '👀', '☝️', '🌎', '🙅‍♀️']
const p1runemojis4 = ['🤨', '❓', '🤖', '📲', '💻', '🇨🇳', '🧐', '👩‍💻', '😄', '👍']; 
const p1runemojis5 = ['🧐', '💬', '❗️', '🧏🏻‍♀️', '🫖', '🍵', '🥟', '🍵', '🌸', '⏰', '😉', '🫖', '🍵', '🆓', '🧘‍♀️', '😎', '🤣', '👆', '🧏🏻‍♀️']; 
const p1runemojis6 = ['🧐', '🤨', '👧🏻', '💬', '🤨', '🤔', '😬', '😳', '🤨', '🤯', '😲', '❤️', '😯', '😂']; 

const p2runemojis1 = ["🙋‍♀️", "🥲", "❤️", "😌"];  
const p2runemojis2 = ['😄', '😎']; 
const p2runemojis3 = ['🤔', '🤌', '💀', '👻', '😂', '🤨', '🌎'];
const p2runemojis4 = ['🤔', '😑', '👶', '👴', '😊']; 
const p2runemojis5 = ['🧐', '👋', '🙌', '😆', '🤔', '👌', '😎', '👍']; 
const p2runemojis6 = ['😅', '👌', '🤨', '😎', '😗', '😬', '🤔', '🥲']; 

const p3runemojis1 = ['🤔', '🤨', '💖', '👌', '🤨', '👩‍🌾', '👶', '🔥'];  
const p3runemojis2 = ['💅', '✨', '😉']; 
const p3runemojis3 = ['🤔', '🌚', '✌️', '❤️', '😂'];
const p3runemojis4 = ['🤨', '🧐', '🤏', '🙂', '❓', '😄', '⭐️', '👀']; 
const p3runemojis5 = ['😅', '🤔', '🤷‍♂️', '❓', '🙉', '👍', '🤣']; 
const p3runemojis6 = ['🤔', '🤓', '😹', '😅', '😂', '🤣', '🔄', '❓', '😅', '😈', '💀', '😅']; 

const p1emojiDisplay1 = document.getElementById("emoji-display1");
const p1emojiDisplay2 = document.getElementById("emoji-display2");
const p1emojiDisplay3 = document.getElementById("emoji-display3"); 
const p1emojiDisplay4 = document.getElementById("emoji-display4");
const p1emojiDisplay5 = document.getElementById("emoji-display5");
const p1emojiDisplay6 = document.getElementById("emoji-display6");   

const p2emojiDisplay1 = document.getElementById("p2emoji-display1");
const p2emojiDisplay2 = document.getElementById("p2emoji-display2");
const p2emojiDisplay3 = document.getElementById("p2emoji-display3"); 
const p2emojiDisplay4 = document.getElementById("p2emoji-display4");
const p2emojiDisplay5 = document.getElementById("p2emoji-display5");
const p2emojiDisplay6 = document.getElementById("p2emoji-display6");   

const p3emojiDisplay1 = document.getElementById("p3emoji-display1");
const p3emojiDisplay2 = document.getElementById("p3emoji-display2");
const p3emojiDisplay3 = document.getElementById("p3emoji-display3"); 
const p3emojiDisplay4 = document.getElementById("p3emoji-display4");
const p3emojiDisplay5 = document.getElementById("p3emoji-display5");
const p3emojiDisplay6 = document.getElementById("p3emoji-display6");   

let currentIndexp1q1 = 0;
let currentIndexp1q2 = 0; 
let currentIndexp1q3 = 0; 
let currentIndexp1q4 = 0; 
let currentIndexp1q5 = 0; 
let currentIndexp1q6 = 0; 

let currentIndexp2q1 = 0; 
let currentIndexp2q2 = 0; 
let currentIndexp2q3 = 0; 
let currentIndexp2q4 = 0; 
let currentIndexp2q5 = 0; 
let currentIndexp2q6 = 0; 

let currentIndexp3q1 = 0; 
let currentIndexp3q2 = 0; 
let currentIndexp3q3 = 0; 
let currentIndexp3q4 = 0; 
let currentIndexp3q5 = 0; 
let currentIndexp3q6 = 0; 

function updateEmoji() {
    currentIndexp1q1 = (currentIndexp1q1 + 1) % p1runemojis.length; 
    p1emojiDisplay1.textContent = p1runemojis[currentIndexp1q1]; 

    currentIndexp1q2 = (currentIndexp1q2 + 1) % p1runemojis2.length; 
    p1emojiDisplay2.textContent = p1runemojis2[currentIndexp1q2]; 

    currentIndexp1q3 = (currentIndexp1q3 + 1) % p1runemojis3.length; 
    p1emojiDisplay3.textContent = p1runemojis3[currentIndexp1q3]; 

    currentIndexp1q4 = (currentIndexp1q4 + 1) % p1runemojis4.length; 
    p1emojiDisplay4.textContent = p1runemojis4[currentIndexp1q4]; 

    currentIndexp1q5 = (currentIndexp1q5 + 1) % p1runemojis5.length; 
    p1emojiDisplay5.textContent = p1runemojis5[currentIndexp1q5];

    currentIndexp1q6 = (currentIndexp1q6 + 1) % p1runemojis6.length; 
    p1emojiDisplay6.textContent = p1runemojis6[currentIndexp1q6]; 

    currentIndexp2q1 = (currentIndexp2q1 + 1) % p2runemojis1.length; 
    p2emojiDisplay1.textContent = p2runemojis1[currentIndexp2q1]; 

    currentIndexp2q2 = (currentIndexp2q2 + 1) % p2runemojis2.length; 
    p2emojiDisplay2.textContent = p2runemojis2[currentIndexp2q2]; 

    currentIndexp2q3 = (currentIndexp2q3 + 1) % p2runemojis3.length; 
    p2emojiDisplay3.textContent = p2runemojis3[currentIndexp2q3]; 

    currentIndexp2q4 = (currentIndexp2q4 + 1) % p2runemojis4.length; 
    p2emojiDisplay4.textContent = p2runemojis4[currentIndexp2q4]; 

    currentIndexp2q5 = (currentIndexp2q5 + 1) % p2runemojis5.length; 
    p2emojiDisplay5.textContent = p2runemojis5[currentIndexp2q5]; 

    currentIndexp2q6 = (currentIndexp2q6 + 1) % p2runemojis6.length; 
    p2emojiDisplay6.textContent = p2runemojis6[currentIndexp2q6]; 

    

    currentIndexp3q1 = (currentIndexp3q1 + 1) % p3runemojis1.length; 
    p3emojiDisplay1.textContent = p3runemojis1[currentIndexp3q1]; 

    currentIndexp3q2 = (currentIndexp3q2 + 1) % p3runemojis2.length; 
    p3emojiDisplay2.textContent = p3runemojis2[currentIndexp3q2]; 

    currentIndexp3q3 = (currentIndexp3q3 + 1) % p3runemojis3.length; 
    p3emojiDisplay3.textContent = p3runemojis3[currentIndexp3q3]; 

    currentIndexp3q4 = (currentIndexp3q4 + 1) % p3runemojis4.length; 
    p3emojiDisplay4.textContent = p3runemojis4[currentIndexp3q4]; 

    currentIndexp3q5 = (currentIndexp3q5 + 1) % p3runemojis5.length; 
    p3emojiDisplay5.textContent = p3runemojis5[currentIndexp3q5]; 

    currentIndexp3q6 = (currentIndexp3q6 + 1) % p3runemojis6.length; 
    p3emojiDisplay6.textContent = p3runemojis6[currentIndexp3q6]; 
}

// Change emoji every second
setInterval(updateEmoji, 1000);
