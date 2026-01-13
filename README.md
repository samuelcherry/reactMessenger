# Socket.IO React Chat App

A real-time chat application built with **React**, **Socket.IO**, and **Node.js**. This project demonstrates bi-directional websocket communication between a frontend client and a backend server, including connection management, message handling, and basic state management in React.

---

## Features

* Real-time messaging using **Socket.IO**
* React frontend with hooks (`useState`, `useEffect`, `useContext`)
* Connect / disconnect websocket controls
* Centralized message state
* CORS-safe client/server communication
* Deployed frontend and backend

---

## Tech Stack

### Frontend

* React
* TypeScript / JavaScript
* Tailwind CSS
* socket.io-client

### Backend

* Node.js
* Express
* Socket.IO

### Deployment

* Frontend: Netlify
* Backend: Render

---

## Project Structure

```
root
├── client
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── data
│   │   └── App.tsx
│   └── package.json
├── server
│   ├── index.js
│   └── package.json
└── README.md
```

---

## Socket.IO Flow

1. User clicks **Connect**
2. Client opens a websocket connection to the backend
3. Backend logs the connection and assigns a socket ID
4. Messages are emitted from client → server → all connected clients
5. User can manually **Disconnect**, closing the socket cleanly

---

## Getting Started

### Prerequisites

* Node.js (v18+ recommended)
* npm or yarn

---

### Backend Setup

```bash
cd server
npm install
npm run dev
```

The server will start on the configured port (default: `3001`).

---

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

The React app will run locally and connect to the Socket.IO backend.

---

## Environment Configuration

Make sure the Socket.IO client points to the correct backend URL:

```ts
io("https://your-backend-url.onrender.com")
```

On the server, CORS must allow requests from the frontend domain:

```js
cors: {
  origin: "https://your-frontend-url.netlify.app",
  methods: ["GET", "POST"],
}
```

---

## Common Issues

### CORS Errors

If you see errors like:

```
Access-Control-Allow-Origin does not match
```

Ensure:

* The frontend URL exactly matches the allowed origin
* No trailing slashes or protocol mismatches

---

### Duplicate Messages on Load

This can happen if initial messages are added inside `useEffect` without proper state guards. Initial message state should be empty and populated only from socket events.

---

## Lessons Learned

* Managing websocket lifecycle in React is critical to avoid duplicate listeners
* CORS configuration is often the biggest blocker in deployed Socket.IO apps
* Separating socket logic into context improves maintainability
* Mobile-first Tailwind breakpoints simplify responsive chat layouts

---

## Future Improvements

* User authentication / usernames
* Typing indicators
* Message persistence (database)
* Private rooms
* Improved UI/UX animations

---

## License

This project is open source and available under the MIT License.

---

## Author

**Samuel Cherry**

Feel free to reach out or explore the code to see how real-time communication is implemented with Socket.IO.

