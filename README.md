

<h1>Jeevandan - Blood Donation Platform</h1>

<h2>Overview</h2>
<p>Jeevandan is a web-based platform designed to connect blood donors with individuals or hospitals in need of blood. The project aims to simplify the process of blood donation by allowing users to register as donors, find donors based on location and blood group (e.g., in Jaipur), and promote the importance of blood donation through an engaging interface.</p>


## Features
- **Home Page**: Motivates users to participate in blood donation with inspiring content.
- **Find Donors**: Search for registered donors by area (e.g., Jaipur) and blood group.
- **Donor Registration**: Users can register as donors by filling in details like name, blood group, and contact information, with a fake OTP verification system (to be upgraded to real OTP verification).
- **Donor Profile**: Registered donors can view their profile on the "Find Donors" page.
- **Secure Form Validation**: Custom middleware and built-in validators ensure accurate and secure donor data submission.

## Tech Stack
- **Frontend**:
  - React.js for dynamic UI
  - Tailwind CSS and DaisyUI for responsive and modern styling
  - React-Hook-Form for efficient form handling
- **Backend**:
  - Express.js for server-side logic
  - MongoDB for storing donor details
  - Custom middleware for form validation
  - CORS package for enabling frontend-backend communication
- **APIs**: 4-5 APIs to handle communication between frontend and backend (e.g., donor registration, donor search).
- **Other**: Fake OTP verification system (to be upgraded to real OTP).

## Requirements
To run Jeevandan locally, ensure you have the following installed:
- Node.js (v16 or higher)
- MongoDB (local or cloud instance, e.g., MongoDB Atlas)
- Git (for cloning the repository)
- A modern web browser (Chrome, Firefox, etc.)

## Installation
Follow these steps to set up and run Jeevandan on your local machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Faisal-Ali1/jeevandan.git

2. **Set Up Backend**:
   Navigate to the backend folder
   
   ```bash
   cd jeevandan/backend

 3. **Install backend dependencies**:
    ```bash
    npm install

 
- Go to backend/src/config/db.js and add your MongoDB connection string in the db file (e.g.,MONGOOSE_CONNECTION_STRING.js) to connect the backend to your database.
- Ensure CORS is configured to allow frontend communication (see "CORS Configuration" below).



4. **Set Up Frontend**:
- Navigate to the frontend folder
  ```bash
  cd jeevandan/frontend/vite-project
  
- Install frontend dependencies
  ```bash
  npm install


## Run the Application
- Start the backend server
  ```bash
  cd jeevandan/backend
  npm start

- Start the frontend server
  ```bash
  cd jeevandan/frontend/vite-project
  npm run dev

- Open http://localhost:5173 (or the port shown in the terminal) in your browser.


## CORS Configuration
- To enable communication between the frontend and backend, the project uses the cors package. During development, CORS issues were encountered when connecting the frontend to the      backend. These were resolved by installing the cors package and configuring it to allow requests from the frontend URL (e.g., http://localhost:5173).
Example CORS setup in backend/index.js
 
- Ensure the frontend URL matches the one specified in the CORS configuration when running locally.
  ```bash
  const cors = require('cors');
  app.use(cors({ origin: 'http://localhost:5173' }));


## Challenges Faced
CORS Issues: Resolved CORS errors by installing and configuring the cors package to allow frontend-backend communication. 
Implementing secure form validation to ensure accurate donor data. 
Designing a responsive UI that works seamlessly across devices using Tailwind CSS and DaisyUI. 
Setting up fake OTP verification as a placeholder for real OTP integration.

## Future Improvements
- Replace fake OTP verification with a real OTP system (e.g., using Twilio or Firebase). 
- Add support for multiple cities beyond Jaipur for donor search. 
- Implement an admin dashboard for managing donor data and blood requests.
- Enhance UI with animations and additional accessibility features.

## Contributing
- Contributions are welcome! To contribute:Fork the repository. 
- Create a new branch (git checkout -b feature-branch). 
-Make your changes and commit (git commit -m "Add feature").
- Push to the branch (git push origin feature-branch). 
-Create a Pull Request.

## Credits
- Developed by Faisal Ali 
- Thanks to the open-source communities for libraries like React, Express, Tailwind CSS, and DaisyUI. 

## Contact
- For queries or feedback, reach out at fali77616@gmail.com.

- **Disclaimer**: This project is for educational purposes only. Always verify blood donation processes through certified medical professionals or organizations. Ensure you have backups of your data before running the project locally.
