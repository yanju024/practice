const { Worker } = require("bullmq");

const connection = {
  host: "127.0.0.1",
  port: 6379,
};

const worker = new Worker(
  "otpQueue",
  async (job) => {
    const { phoneNumber, otp } = job.data;
    console.log(`Sending OTP ${otp} to ${phoneNumber}`);
    // Simulate sending OTP (e.g., via SMS)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(`OTP sent to ${phoneNumber}`);
  },
  { connection }
);
worker.on("completed", (job) => {
  console.log(`Job ${job.id} completed successfully`);
});
worker.on("failed", (job, err) => {
  console.error(`Job ${job.id} failed with error: ${err.message}`);
});
worker.on("error", (error) => {
  console.error("Worker error:", error);
});
worker.on("stalled", (job) => {
  console.warn(`Job ${job.id} stalled`);
});
worker.on("progress", (job, progress) => {
  console.log(`Job ${job.id} progress: ${progress}%`);
});
worker.on("active", (job) => {
  console.log(`Job ${job.id} is now active`);
});
worker.on("paused", () => {
  console.log("Worker paused");
});
worker.on("resumed", () => {
  console.log("Worker resumed");
});
worker.on("drained", () => {
  console.log("All jobs have been processed");
});
worker.on("removed", (job) => {
  console.log(`Job ${job.id} removed`);
});
worker.on("waiting", (jobId) => {
  console.log(`Job ${jobId} is waiting`);
});
worker.on("error", (error) => {
  console.error("Worker error:", error);
});
worker.on("close", () => {
  console.log("Worker closed");
});
