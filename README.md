# SMM Panel Application
This project is a Social Media Marketing (SMM) panel application built with Next.js. The application allows users to purchase and manage social media services.

# Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

### Features
- User authentication and authorization
- Browsing available social media services
- Placing orders for social media services
- Viewing order history and status
- Admin dashboard for managing services and orders

### Technologies Used
- Next.js - React framework for server-rendered applications
- React - JavaScript library for building user interfaces
- MoreThanPanel API - API for managing SMM services
- Tailwind CSS - Utility-first CSS framework
- Axios - Promise-based HTTP client for making API requests
- Clerk - Clerk Authentication and User Management for secure authentication

### Getting Started
##### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

##### Installation
1) Clone the repository:

```bash
git clone https://github.com/MaFhaLish/BuzzBlasters.git
cd BuzzBlasters
```
2) Install dependencies:

```bash
npm install
# or
yarn install
```
##### Running the Application
1) Create a .env.local file in the root of the project and add your environment variables:


NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=clerk_publish_key
CLERK_SECRET_KEY=clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=url
NEXT_PUBLIC_CLERK_SIGN_UP_URL=url
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=url
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=url

2) Run the development server:

```bash
npm run dev
or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Usage
##### User Authentication
Users can sign up and log in to the application.
Authentication is handled using JWT tokens stored in cookies.

##### Browsing Services
Users can browse available social media services categorized by type (e.g., Instagram likes, YouTube views).

##### Placing Orders
Users can place orders for selected services by providing the required details (e.g., link, quantity).
Order details are sent to the MoreThanPanel API for processing.

##### Viewing Order History
Users can view their order history and track the status of each order.

##### Admin Dashboard
Admin users can manage available services and view all orders placed through the panel.

##### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

1) Fork the repository.
2) Create a new branch: `git checkout -b my-feature-branch`.
3) Make your changes and commit them: `git commit -m 'Add some feature'`.
4) Push to the branch: `git push origin my-feature-branch`.
5) Submit a pull request.

##### License
This project is licensed under the MIT License. See the LICENSE file for details.