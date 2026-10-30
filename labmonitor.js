const fs = require('fs');
const path = require('path');

// 1. Construct platform-independent paths
const workspaceDir = path.join(process.cwd(), 'la workspace');
const logsDir = path.join(workspaceDir, 'logs');
const reportsDir = path.join(workspaceDir, 'reports');
const configDir = path.join(workspaceDir, 'config');
const logFilePath = path.join(logsDir, 'session.log');

try {
  fs.mkdirSync(logsDir, { recursive: true });
  fs.mkdirSync(reportsDir, { recursive: true });
  fs.mkdirSync(configDir, { recursive: true });
  console.log('Workspace created successfully.');
} catch (err) {
  console.error('Error creating directories:', err);
}

console.log('Log file:', path.resolve(logFilePath));
console.log('Extension:', path.extname(logFilePath));

 console.log('System Information.');
const os = require('os');

// Basic system information
console.log(`OS Platform: ${os.platform()}`);
console.log(`Hostname: ${os.hostname()}`);

// Memory information
const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`);








