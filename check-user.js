// check-user.js
const { execSync } = require('child_process');

function getCommitAuthor() {
  try {
    return execSync('git config user.name').toString().trim();
  } catch (err) {
    return '';
  }
}

const commitAuthor = getCommitAuthor();

if (commitAuthor.toLowerCase().includes("zakky") || commitAuthor.toLowerCase().includes("zakku116")) {
  console.log("\n[⚠️ Bloqueado] El usuario Zakky/zakku116 no tiene permiso para hacer commit en este proyecto.");
  process.exit(1);
} else {
  process.exit(0);
}
