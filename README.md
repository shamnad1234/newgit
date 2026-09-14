🚕 TaxiCar

A simple, responsive taxi booking website built with HTML, CSS, and JavaScript.

TaxiCar allows users to enter pickup and destination locations, select a taxi type, enter the travel distance, select the number of passengers, and calculate an estimated fare.

✨ Features
🚕 Taxi booking interface
📍 Pickup and destination location
🛣️ Distance-based fare calculation
🚘 Multiple taxi types
👥 Passenger selection
💰 Automatic fare calculation
✅ Booking confirmation
📱 Responsive design
🍔 Mobile navigation menu
💾 Local storage for booking information
🎨 Modern taxi-themed user interface
🛠️ Technologies Used
HTML5 – Website structure
CSS3 – Styling and responsive design
JavaScript – Booking and fare calculation
Git – Version control
GitHub – Source code hosting
GitHub Actions – Automated deployment
📁 Project Structure
TaxiCar/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── .github/
    └── workflows/
        └── deploy.yml

🚖 Taxi Pricing
Taxi Type	Price
🚕 Sedan	₹15/km
🚙 SUV	₹20/km
🚘 Premium	₹30/km
Base Fare

The application uses a base fare of ₹50.

For more than 4 passengers, an additional ₹100 is added.

Fare Formula
Fare = Base Fare + (Distance × Taxi Rate)


For more than 4 passengers:

Fare = Base Fare + (Distance × Taxi Rate) + ₹100

💻 Example

Suppose the user selects:

Taxi Type: Sedan
Distance: 10 KM
Base Fare: ₹50
Rate: ₹15/km


The fare will be:

₹50 + (10 × ₹15)

= ₹200

🚀 Run the Project Locally
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/TaxiCar.git

2. Navigate to the project
cd TaxiCar

3. Open the website

Open the following file in your browser:

index.html


You can also use VS Code Live Server to run the project locally.

💾 Local Storage

TaxiCar uses browser localStorage to temporarily store the latest booking information.

Example:

localStorage.setItem(
    "taxiBooking",
    JSON.stringify(booking)
);


The stored data is available only in the user's browser.

📱 Responsive Design

The website is designed to work on:

💻 Desktop
💻 Laptop
📱 Mobile
📱 Tablet
⚙️ GitHub Actions

The project includes a GitHub Actions workflow for automatically deploying the website to GitHub Pages.

Workflow location:

.github/workflows/deploy.yml


The workflow runs whenever code is pushed to the main branch.

GitHub Actions Workflow
name: Deploy TaxiCar Website

on:
  push:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    name: Deploy to GitHub Pages

    runs-on: ubuntu-latest

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload website
        uses: actions/upload-pages-artifact@v3
        with:
          path: .

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

📤 Push Project to GitHub

Initialize Git:

git init


Add the files:

git add .


Commit the project:

git commit -m "Initial TaxiCar website"


Rename the branch:

git branch -M main


Add your GitHub repository:

git remote add origin https://github.com/YOUR_USERNAME/TaxiCar.git


Push the project:

git push -u origin main

🌐 GitHub Pages Deployment

After pushing the project:

Open your GitHub repository.
Go to Settings.
Select Pages.
Select GitHub Actions as the deployment source.
Push changes to the main branch.
GitHub Actions will automatically deploy the website.
🔮 Future Improvements

The following features can be added in the future:

👤 User registration and login
🚖 Driver registration
🗺️ Google Maps integration
📍 Live driver tracking
📊 Admin dashboard
💳 Online payment
📋 Booking history
🔔 Email/SMS notifications
🗄️ Database integration
🔐 User authentication
🚦 Real-time ride status
🌐 Backend REST API
🤝 Contributing

Contributions are welcome!

Fork the repository

Create a new branch:

git checkout -b feature/new-feature


Make your changes and commit them:

git add .
git commit -m "Add new feature"


Push the branch:

git push origin feature/new-feature


Then create a Pull Request on GitHub.

📄 License

This project is open source and available under the MIT License.

👨‍💻 Author

TaxiCar Project

Built with ❤️ using:

HTML + CSS + JavaScript


⭐ If you like this project, consider giving it a star on GitHub!
