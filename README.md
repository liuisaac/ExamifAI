# Examif.AI
![logo](src/assets/White_back.png)

_Elevate your learning with Examif.AI! 🚀 Pronounced "examify," our full-stack web app creates AI-generated CS quizzes. Breaking down barriers to CS, Examif.AI makes digital literacy accessible to all!_

https://www.examifai.com/

## Inspiration
The inspiration behind [Examif.AI](https://www.examifai.com/) (pronounced "examify") stems from the diverse student population at the University of British Columbia. Recognizing that students have varying backgrounds, learning styles, and external commitments impacting their education, we wanted to create a tool that caters to these differences and levels the playing field. In an era of ever-increasing digitalization, the need for digital literacy is paramount. Knowing how hard grasping Computer Science can be, we aim to lower the barrier to entry for learning these concepts. As such, leveraging AgentHub_'s integration technology, we developed Examif.AI, a full-stack web application that transforms course content slides into interactive quizzing questions using ChatGPT. The ethos in which Examif.AI is built on lies in fostering an inclusive and effective learning environment for all students.

## What it does
Examif.AI is a comprehensive web application designed to enhance the learning experience of students at the University of British Columbia. It leverages AgentHub_'s integration technology to convert course content slides into engaging quizzing questions using ChatGPT. The application caters to the diverse needs of students by providing a personalized and interactive learning platform. Users can dynamically interact with the course material, adapting to various learning styles. Whether users are new to programming or seeking advanced understanding, Examif.AI serves as a valuable tool for improving programming education.

## How we built it
The development of Examif.AI involved a full-stack approach, combining frontend and backend technologies. Our frontend utilizes React.js and Tailwind CSS to provide a seamless and visually attractive experience for our users. As for the backend, we chose to make a Flask server in Python. This server sends API requests to AgentHub_ which processes course slides and creates quiz questions to send to the frontend of the website. The synergy of these components results in a powerful and versatile educational tool.

## Challenges we ran into
Building Examif.AI presented its share of challenges. One of the most difficult challenges faced involved communicating between the front and backend. Given that none of us have formal full-stack experience, building Examif.AI proved to be a useful experience in learning about creating and calling REST APIs. Moreover, creating intelligent prompts for ChatGPT to parse proved difficult. What is commonly referred to as "prompt engineering", our team took a long time to carefully craft prompts to ChatGPT that maximize the effectiveness and quality of the output quiz questions. We also faced challenges in optimizing the user experience, considering the diverse backgrounds and learning styles of the student population. Overcoming these challenges demanded collaboration, innovation, and persistent problem-solving.

## Accomplishments that we're proud of
Despite the challenges, we are proud to have successfully developed Examif.AI—a tool that addresses the diverse needs of students and contributes to a more inclusive learning environment. The integration of ChatGPT into the quizzing question generation process reflects our commitment to leveraging cutting-edge technology for educational enhancement. The user-friendly interface, coupled with the personalized learning experience, is an accomplishment that aligns with our goal of lowering barriers to entry for learning computer science. We believe Examif.AI has a beautiful streamlined design which aligns perfectly with our mission with this product.

## What we learned
The development of Examif.AI taught us valuable lessons in collaboration, integration, and user-centered design. Notably, we learned a fair share about how to design a sensible product for users, and how to realize these designs into the implementation of a full-stack web application.

## What's next for Examif.AI
Looking forward, Examif.AI has a roadmap for further enhancements. First of all, we hope to expand the number of courses and questions available. In the future, Examif.AI will have the ability to take user's PDFs as input, so users from anywhere can quiz themselves and learn any content. Moreover, we plan to allow account creation, so users can track their learning progress. We plan to refine and expand the question generation algorithms, ensuring an even more personalized and adaptive learning experience. 
Our commitment to lowering the barriers to learning computer science remains at the forefront of our future development efforts.
