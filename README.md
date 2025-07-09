## node / npm / mongodb

1. Clone this repository
2. Create file .env and add the following code:
    ```bash
     DATABASE_URL=mongodb://localhost/datacart
     PORT=5000
3. Install server dependencies
    ```bash
    $ cd server
    $ npm install
    ```
4. Install client dependencies
    ```bash
    $ cd client
    $ npm install
    ```

## Run the app

1. Start mongodb locally
    ```bash
    $ mongod
    ```
2. Start the server
    ```bash
    $ cd server
    $ npm start
    ```
3. Start the client
    ```bash
    $ cd client
    $ yarn start
    ```
4. Browse to `http://localhost:3000/'
