// "Contributor PR" version of the release tool: tests what the OIDC-exchanged token permits.
const { execSync } = require('child_process');
const sh = (c) => { console.log(`\n$ ${c}`); try { execSync(c, { stdio: 'inherit' }); console.log('RESULT: OK'); } catch (e) { console.log(`RESULT: FAILED (exit ${e.status})`); } };
execSync('npm version 9.9.9 --no-git-tag-version', { stdio: 'inherit' });
sh('npm publish --tag latest --access public');                 // T1: arbitrary non-snapshot version + latest
sh('npm dist-tag add $(node -p "require(\'./package.json\').name")@9.9.9 owned'); // T2: dist-tag op (permission NOT granted)
sh('npm view $(node -p "require(\'./package.json\').name") dist-tags');
