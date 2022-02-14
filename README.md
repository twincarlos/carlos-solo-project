# carlos-solo-project
<br />
<div align="center">
  <a href="https://github.com/twincarlos/carlos-solo-project.git">
    <img src="frontend/src/airbnb-deluxe-assets/airbnb-deluxe-banner.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Airbnb Deluxe</h3>

  <p align="center">
    Welcome to Airbnb Deluxe, an Airbnb clone designed for those who want to experience a top-notch stay at any of the available spots.
    <br />
    <br />
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

[Airbnb Deluxe](https://airbnb-deluxe.herokuapp.com/)

### Built With

* [React.js](https://reactjs.org/)

<!-- GETTING STARTED -->
## Getting Started

1. Clone the repo
   ```sh
   git clone https://github.com/twincarlos/carlos-solo-project.git
   ```
2. Install dependencies in your backend and fronend directories.
   ```sh
   npm install
   ```
3. Create a .env file in your backend direcotry and paste the code found in your .env.example file.
4. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.
   ```sh
   CREATE USER <name> WITH CREATEDB PASSWORD <'password'>
   ```
5. Enter the username, password, and database you created into your .env file, a JWT_SECRET token, and your desired PORT (preferably 5000).
6. Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your PORT configuration found in your .env file.
   ```sh
   "proxy": "http"//localhost:5000"
   ```
7. Create Database, Migrate, and Seed models.
   ```sh
   npx dotenv sequelize db:greate
   npx dotenv sequelize db:migrate
   npx dotenv sequelize db:seed:all
8. Run npm start in your backend directory, as well as in your frontend directory.
9. You can login as a Demo user or sign up for an account to enjoy all the functionalities of **Airbnb Deluxe**

<!-- CONTACT -->
## Contact

githup: [@twincarlos](https://github.com/twincarlos) - twincarlos98@gmail.com

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#top">back to top</a>)</p>
