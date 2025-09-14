# MERN Stack Starter Pack

This MERN (MongoDB, Express, React, Node.js) stack starter pack is a pre-configured template for full-stack web applications. It includes a connected and working backend and frontend setup, allowing you to start developing right away. It's designed to streamline your development process. Clone the repository, install the dependencies, set environment variables and get your project running in minutes!

## Usage
<p>This starter pack includes a basic preinstalled packages:</p>

### Front-end 
`@reduxjs/toolkit` `axios` `concurrently` `react-hot-toast` `react-icons` `react-router-dom`
### Backend
`bcrypt` `cookie-parser` `dotenv` `express` `mongoose` `nodemon`
<p>To start building your own components and styles, follow these steps:</p>

1. Clone the repository to your local machine.
    ```sh
    https://github.com/himanshumaharshi/mern-stack-starter-pack.git
    ```

2. Install the required packages.
    ```sh
    cd server
    npm install

    cd client
    npm install
    ```

3. Setup environment variables.
    ```sh
    cd server/.env
    PORT
    MONGODB_URL

    cd client/.env
    REACT_APP_BASE_URL
    ```

4. Start the development server.
    ```sh
    cd mern-stack-starter-pack/client/
    npm run dev
    ```
1. Open the front-end in your browser at [`http://localhost:3000`](http://localhost:3000) and access back-end in your browser at [`http://localhost:4000`](http://localhost:4000) to view your project.


## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please feel free to open an issue or a pull request.
