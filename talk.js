function sendMessage() {
  var userInput = document.getElementById('userInput').value;
  var chatWindow = document.getElementById('chatWindow');
  var userBubble = document.createElement('div');
  userBubble.classList.add('chat-bubble', 'user');
  userBubble.innerText = userInput;

  var botBubble = document.createElement('div');
  botBubble.classList.add('chat-bubble', 'bot');

  // Personal and Professional Details
  if (userInput.toLowerCase().includes("hi") || userInput.toLowerCase().includes("hello") || userInput.toLowerCase().includes("hey")) {
    botBubble.innerText = "Hello! How can I assist you today?";
  } else if (userInput.toLowerCase().includes("skills")) {
    botBubble.innerText = "I have skills in Data Structures and Algorithms (DSA), Java, Front-End and Full-Stack Development, and competitive programming.";
  } else if (userInput.toLowerCase().includes("projects")) {
    botBubble.innerText = "I am working on a gamified coding platform to help users learn and practice coding through interactive challenges. I have also worked on a full-stack web development project and a coding platform for real-time battles.";
  } else if (userInput.toLowerCase().includes("college")) {
    botBubble.innerText = "I am studying at DY Patil School of Engineering and Technology, Ambi, Pune, in my 4th year of engineering.";
  } else if (userInput.toLowerCase().includes("school")) {
    botBubble.innerText = "I completed my schooling in Pune, Maharashtra.";
  } else if (userInput.toLowerCase().includes("cgpa")) {
    botBubble.innerText = "My CGPA is 9.33, and I was awarded a scholarship for maintaining a high CGPA throughout my engineering studies.";
  } else if (userInput.toLowerCase().includes("internship")) {
    botBubble.innerText = "I completed a Java internship at InternPe from July 3, 2023, to July 30, 2023.";
  } else if (userInput.toLowerCase().includes("experience")) {
    botBubble.innerText = "I currently do not have any work experience, but I am actively preparing for placements and internships.";
  } else if (userInput.toLowerCase().includes("fellowship")) {
    botBubble.innerText = "I am applying for the MCCIA Youth Fellowship to enhance my leadership and technical skills.";
  } else if (userInput.toLowerCase().includes("resume")) {
    botBubble.innerText = "My resume highlights my skills in Java, DSA, Full-Stack Development, and includes my internship experience, academic achievements, and projects.";
  } else if (userInput.toLowerCase().includes("skills summary")) {
    botBubble.innerText = "I am proficient in Java, DSA, Front-End Development (HTML, CSS, JavaScript, React), Full-Stack Development, and competitive programming.";
  } else if (userInput.toLowerCase().includes("what's your goal")) {
    botBubble.innerText = "My goal is to pursue a career as a software engineer, contributing to innovative projects and improving my technical skills.";
  } else if (userInput.toLowerCase().includes("why this field")) {
    botBubble.innerText = "I have a passion for technology and problem-solving, which drove me to pursue a career in software engineering and full-stack development.";
  } else if (userInput.toLowerCase().includes("career")) {
    botBubble.innerText = "I want to build a career as a software engineer and work on projects that help solve real-world problems using technology.";
  } else if (userInput.toLowerCase().includes("portfolio")) {
    botBubble.innerText = "I am currently creating a personal portfolio to showcase my skills, projects, and achievements.";
  } else if (userInput.toLowerCase().includes("future plans")) {
    botBubble.innerText = "In the future, I aim to improve my coding skills, contribute to open-source projects, and start my own small institute.";
  } else if (userInput.toLowerCase().includes("projects details")) {
    botBubble.innerText = "My main project is a gamified coding platform that includes real-time coding battles, interactive mini-games, and a ranking system. I have also worked on a full-stack web development project and other small coding challenges.";
  } else if (userInput.toLowerCase().includes("what inspires you")) {
    botBubble.innerText = "I am inspired by the potential of technology to solve real-world problems and create impactful solutions. The ability to continuously learn and innovate motivates me every day.";
  } else if (userInput.toLowerCase().includes("courses")) {
    botBubble.innerText = "I have completed a Full Stack Web Development course from Apna College and Responsive Web Design from freeCodeCamp.";
  } else if (userInput.toLowerCase().includes("hobbies")) {
    botBubble.innerText = "In my free time, I enjoy solving coding problems, working on personal projects, and learning new technologies.";
  } else if (userInput.toLowerCase().includes("motivational")) {
    botBubble.innerText = "My motivation comes from the desire to build solutions that improve people's lives and make a meaningful impact in the tech industry.";
  } else {
    botBubble.innerText = "I'm sorry, I didn't understand that. Feel free to ask about my skills, projects, or anything else!";
  }

  chatWindow.appendChild(userBubble);
  chatWindow.appendChild(botBubble);

  // Scroll to the bottom of the chat window
  chatWindow.scrollTop = chatWindow.scrollHeight;
  document.getElementById('userInput').value = '';
}

document.getElementById('userInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function handleTagClick(tag) {
  var chatWindow = document.getElementById('chatWindow');
  var botBubble = document.createElement('div');
  botBubble.classList.add('chat-bubble', 'bot');

  switch (tag) {
    case 'hi':
      botBubble.innerText = "Hello! How can I assist you today?";
      break;
    case 'skills':
      botBubble.innerText = "I have skills in Data Structures and Algorithms (DSA), Java, Front-End and Full-Stack Development, and competitive programming.";
      break;
    case 'projects':
      botBubble.innerText = "I am working on a gamified coding platform to help users learn and practice coding through interactive challenges. I have also worked on a full-stack web development project and a coding platform for real-time battles.";
      break;
    case 'college':
      botBubble.innerText = "I am studying at DY Patil School of Engineering and Technology, Ambi, Pune, in my 4th year of engineering.";
      break;
    case 'cgpa':
      botBubble.innerText = "My CGPA is 9.33, and I was awarded a scholarship for maintaining a high CGPA throughout my engineering studies.";
      break;
    case 'internship':
      botBubble.innerText = "I completed a Java internship at InternPe from July 3, 2023, to July 30, 2023.";
      break;
    case 'resume':
      botBubble.innerText = "My resume highlights my skills in Java, DSA, Full-Stack Development, and includes my internship experience, academic achievements, and projects.";
      break;
    case 'future plans':
      botBubble.innerText = "In the future, I aim to improve my coding skills, contribute to open-source projects, and start my own small institute.";
      break;
    case 'portfolio':
      botBubble.innerText = "I am currently creating a personal portfolio to showcase my skills, projects, and achievements.";
      break;
    case 'email':
      botBubble.innerText = "You can reach me via email at: mayurisharma2003@gmail.com.";
      break;
    case 'hobbies':
      botBubble.innerText = "In my free time, I enjoy coding challenges, reading tech blogs, playing strategy games, and exploring new technologies.";
      break;
    case 'career':
      botBubble.innerText = "I aspire to become a software engineer, where I can build impactful solutions and contribute to technological advancements. I want to work on projects that make a difference in society.";
      break;
    case 'aspiration':
      botBubble.innerText = "My ultimate aspiration is to create innovative technology solutions, contribute to open-source projects, and eventually open my own institute to mentor the next generation of tech enthusiasts.";
      break;
    default:
      botBubble.innerText = "I'm sorry, I didn't understand that.";
}

  chatWindow.appendChild(botBubble);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
