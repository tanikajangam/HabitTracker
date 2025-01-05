# HabitTracker – Monitoring and Reducing Stress-Induced Habits  

HabitTracker is a web and mobile application designed to help users monitor and reduce stress-related habits. By leveraging machine learning and real-time hand detection, HabitTracker brings awareness to unconscious actions and encourages self-regulation to improve mental health.  

🔗 **[Devpost Project Page](https://devpost.com/software/habittracker-gsn3do)**  

---  

## Description  
**Website:**  
HabitTracker records stress symptoms or "bad habits" like nail-biting, hair-pulling, or any repetitive action triggered by mental strain. Using real-time hand detection directly from the browser, HabitTracker relies on a neural network (Tensorflow Object Detection API) to locate and track hands in an image. A bounding box appears around the hand with a confidence threshold that adjusts as the detection proceeds.  

Whenever stress-related symptoms occur, HabitTracker increases the "number of bad habits" counter and plays motivational audio (featuring Michael Jordan) to prompt the user to stop. Users can submit session reports and track progress over time in their profile.  

**Mobile App:**  
The app complements the website by allowing users to manually record and track habits. Users can log:  
- The specific habit they performed.  
- The date and frequency of the habit.  
- Their stress levels (rated from 1 to 5).  
- Photos representing the habit or calming images.  

This journal-like feature enhances self-awareness and mindfulness, reducing emotional strain. The app focuses on conscious recognition of habits, while the website tracks unconscious actions. Comparing both datasets allows users to measure mindfulness and evaluate improvement over time.  

---  

## How We Built It  
- **Backend:** Express.js and Node.js  
- **Frontend (Website):** HTML, CSS, and vanilla JavaScript  
- **Templating:** EJS (Embedded JavaScript)  
- **Machine Learning:** Tensorflow Object Detection API  
- **Mobile App:** Built using Swift  
- **Database:** MongoDB for session storage and habit logs  

---  

## Tech Stack  
- **Backend:** Express.js, Node.js  
- **Frontend:** HTML, CSS, JavaScript, EJS  
- **Database:** MongoDB  
- **Mobile App:** Swift  
- **AI/ML:** Tensorflow Object Detection API  

---  

## Key Features  
- **Real-Time Hand Detection:** Tracks hand movements directly in the browser.  
- **Habit Monitoring:** Tracks and counts stress-induced habits during sessions.  
- **Audio Cues:** Plays motivational prompts when habits are detected.  
- **Session Logging:** Users can track sessions over time in their profiles.  
- **Mobile Integration:** Record habits manually through the mobile app, adding logs and photos.  

---  

## Challenges We Faced  
- **Neural Network Optimization:** Fine-tuning the Tensorflow Object Detection API to track hand movement accurately.  
- **User Engagement:** Creating an intuitive interface for users to log habits and track progress effectively.  
- **Cross-Platform Sync:** Ensuring the web and app versions complement each other for a holistic habit tracking experience.  

---  

## Accomplishments We're Proud Of  
- Successfully integrating real-time machine learning into a web application.  
- Combining both passive (unconscious) and active (conscious) tracking of habits through a dual-platform system.  
- Providing a tool that directly benefits mental health and self-improvement.  

---  

## What's Next for HabitTracker  
- **Automated Reporting:** Generate weekly/monthly reports analyzing users' habit patterns.  
- **Community Sharing:** Allow users to share progress anonymously and connect with others facing similar challenges.  
- **Enhanced AI Model:** Expand the detection model to recognize more habits and gestures beyond hand movements.  

---  

## Demo  
Interested in HabitTracker?  
🔗 **[Devpost Link](https://devpost.com/software/habittracker-gsn3do)**  

---  

## How to Run It Locally  
```bash
# Clone the repository
git clone https://github.com/tanikajangam/habittracker

# Navigate to the project directory
cd habittracker

# Install dependencies
npm install

# Start the server
node app.js
