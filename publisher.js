const { Queue } = require("bullmq");

// Create a new queue
const otpQueue = new Queue("otpQueue", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
});

// Function to send OTP
async function sendOtp(phoneNumber, otp) {
  try {
    // Add a job to the queue
    await otpQueue.add("sendOtp", { phoneNumber, otp });
    console.log(`OTP job added for ${phoneNumber}`);
  } catch (error) {
    console.error("Error adding job to queue:", error);
  }
}

// Example usage
const phoneNumber = "+919742731173"; // Replace with the actual phone number
const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
sendOtp(phoneNumber, otp);
