
# HoroscopeCode

## Context
**HoroscopeCode** is a Node.js application built with TypeScript and Express that determines the zodiac sign based on a given birthdate.

---

## Installation

### Prerequisites
- **Node.js**: Version 18 or higher.
- **npm** 
- **Docker** (optional) for running the application in a container.

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/username/HoroscopeCode.git
   cd HoroscopeCode
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

---

## Running the Project

### In Development Mode
To run the project in development mode:
```bash
npm run dev
```

### In Production Mode
1. Compile the TypeScript code:
   ```bash
   npm run build
   ```

2. Start the application:
   ```bash
   npm run start
   ```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

## Running with Docker

### Build the Docker Image
To build a Docker image for the application:
```bash
docker build -t horoscopecode:latest .
```

### Run the Docker Container
To run the application in a Docker container:
```bash
docker run -d -p 3000:3000 --name horoscopecode-container horoscopecode:latest
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

### Running Tests
To run the tests:
```bash
npm run test
```

## API Endpoint

### `GET /zodiac`
- **Description**: Returns the zodiac sign for a given birthdate.
- **Parameters**:
  - `birthdate` (required): The birthdate in the format `YYYY-MM-DD`.
- **Response**:
  - **200 OK**:
    ```json
    {
      "zodiacSign": "Pisces"
    }
    ```
  - **400 Bad Request** (in case of error):
    ```json
    {
      "error": "Error message"
    }
    ```