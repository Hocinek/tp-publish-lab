// Legit release tool (stands in for EUI's packages/release-cli): snapshot-only publishing.
const { execSync } = require('child_process');
const v = `0.0.2-snapshot.${Date.now()}`;
execSync(`npm version ${v} --no-git-tag-version`, { stdio: 'inherit' });
execSync('npm publish --tag snapshot --access public', { stdio: 'inherit' });
