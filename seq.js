const { spawnSync } = require('child_process');

const testScripts = [
  `jest src/api_test/US010/us010-ssd.api.test.ts`, 
  `jest src/api_test/US009/us009-ssd.api.test.ts`,
];

testScripts.forEach((testScript) => {
  console.log(`Running: ${testScript}`);
  try {
    const result = spawnSync(testScript, { stdio: 'inherit', shell: true });

    if (result.status !== 0) {
      console.error(`Test script failed: ${testScript}`);
    }
  } catch (error) {
    console.error(`Error running test script: ${testScript}`);
    console.error(error);
  }
});
