1. Implemented a Message Que for Send OTP to mobile phone

Project Structure

├── producer.js     # Produces and sends messages to the queue
├── worker.js       # Consumes and processes messages from the queue
├── package.json    # Project dependencies and scripts
└── README.md       # Project overview and instructions

Open two terminals:

Terminal 1: node worker.js

Terminal 2: node producer.js
