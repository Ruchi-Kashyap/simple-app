app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 CI/CD Pipeline Demo</h1>
    <p><b>Hello from Ruchi’s App!</b></p>

    <p>This app is deployed using:</p>
    <ul>
      <li>Docker 🐳</li>
      <li>GitHub Actions ⚙️</li>
      <li>AWS EC2 ☁️</li>
    </ul>

    <p><b>Status:</b> Running successfully ✅</p>
  `);
});
