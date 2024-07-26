# Performance Pipeline

**Create a Test Scenario:**

[Jmeter-SQL](https://github.com/Departamento-de-Engenharia-Informatica/switch-qa-23-project-switch-qa-23-2/blob/3799d77a69b0f3ade47d0ebc38d0c93eb240adb1/src/api_test/Bootstrap/Jmeter/jmeterScenerio.sql)

[Jmeter-Bootstrap](https://github.com/Departamento-de-Engenharia-Informatica/switch-qa-23-project-switch-qa-23-2/blob/3799d77a69b0f3ade47d0ebc38d0c93eb240adb1/src/api_test/Bootstrap/Jmeter/boostrapjmeter.spec.ts)

**Create The test Plan on Jmeter and generate a .jmx File**

[DDDForum.jmx](https://github.com/Departamento-de-Engenharia-Informatica/switch-qa-23-project-switch-qa-23-2/blob/8e61b52af07aa13e4e913d03c88bf924f4787c4d/docs/sprintF/JmeterCollection/DDDForum.jmx)

**Creating an Action on GitHub Workflows** 

[Jmeter-Pipeline](https://github.com/Departamento-de-Engenharia-Informatica/switch-qa-23-project-switch-qa-23-2/blob/57bc4ccade8ede90ca9da842a974f305966a9585/.github/workflows/jmeterpipe.yml)

### Let's BreakDown the code:

**Setting up the enviromment:**

```yaml
name: JMeter Test

on:
  workflow_dispatch:
  schedule:
    - cron: '0 0 * * *'  # Run daily at midnight

jobs:
  jmeter-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v1

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install jq
        run: sudo apt-get install jq

      - name: Set environment
        run: cp .env.template .env

      - name: Start containers
        run: docker-compose up --detach

      - name: Setup dev
        run: npm run setup:dev

      - name: Setup public
        run: |
          export CI=false
          npm run build:public

      - name: Start backend
        run: npm run start:dev &

      - name: Start frontend
        run: BROWSER=none npm run start:public &

      - name: Wait a little
        run: sleep 10

      - name: Setup JMeter
        run: npm run setup:jmeter
```

**Runing, Checking Success Rate and uploading Artifacts of Tests for 10, 50, 100, 150, 200 Users:**

```yaml

    - name: Run tests for 10 users and Check Success Rate
        run: |
          chmod +x ./.github/workflows/testUsers.sh
          ./.github/workflows/testUsers.sh 10

      - name: Upload JMeter Results
        uses: actions/upload-artifact@v2
        with:
          name: jmeter-results-10Users-${{ github.run_number }}-${{ github.run_id }}
          path: /home/runner/work/switch-qa-23-project-switch-qa-23-2/switch-qa-23-project-switch-qa-23-2/report
          if-no-files-found: warn

      - name: Run tests for 50 users and Check Success Rate
        run: |
          chmod +x ./.github/workflows/testUsers.sh
          ./.github/workflows/testUsers.sh 50

      - name: Upload JMeter Results
        uses: actions/upload-artifact@v2
        with:
          name: jmeter-results-50Users-${{ github.run_number }}-${{ github.run_id }}
          path: /home/runner/work/switch-qa-23-project-switch-qa-23-2/switch-qa-23-project-switch-qa-23-2/report
          if-no-files-found: warn

      - name: Run tests for 100 users and Check Success Rate
        run: |
          chmod +x ./.github/workflows/testUsers.sh
          ./.github/workflows/testUsers.sh 100

      - name: Upload JMeter Results
        uses: actions/upload-artifact@v2
        with:
          name: jmeter-results-100Users-${{ github.run_number }}-${{ github.run_id }}
          path: /home/runner/work/switch-qa-23-project-switch-qa-23-2/switch-qa-23-project-switch-qa-23-2/report
          if-no-files-found: warn

      - name: Run tests for 150 users and Check Success Rate
        run: |
          chmod +x ./.github/workflows/testUsers.sh
          ./.github/workflows/testUsers.sh 150

      - name: Upload JMeter Results
        uses: actions/upload-artifact@v2
        with:
          name: jmeter-results-150Users-${{ github.run_number }}-${{ github.run_id }}
          path: /home/runner/work/switch-qa-23-project-switch-qa-23-2/switch-qa-23-project-switch-qa-23-2/report
          if-no-files-found: warn

      - name: Run tests for 200 users and Check Success Rate
        run: |
          chmod +x ./.github/workflows/testUsers.sh
          ./.github/workflows/testUsers.sh 200

      - name: Upload JMeter Results
        uses: actions/upload-artifact@v2
        with:
          name: jmeter-results-200Users-${{ github.run_number }}-${{ github.run_id }}
          path: /home/runner/work/switch-qa-23-project-switch-qa-23-2/switch-qa-23-project-switch-qa-23-2/report
```
**The testUsers.sh file :**

[testUsers](https://github.com/Departamento-de-Engenharia-Informatica/switch-qa-23-project-switch-qa-23-2/blob/e02bfb6b62622f2134a181eaf86113379b4394f0/.github/workflows/testUsers.sh)

```shell
    #!/bin/bash
    num_users=$1

    # Set the correct path to the jmeter script

    JMETER_PATH="apache-jmeter-5.6.2/bin/jmeter"

    # Ensure the jmeter script has executable permission
    chmod +x "$JMETER_PATH"
    rm -rf "${GITHUB_WORKSPACE}/report"

    "$JMETER_PATH" -n -t "${GITHUB_WORKSPACE}/docs/sprintF/JmeterCollection/DDDForum.jmx" -e -o "${GITHUB_WORKSPACE}/report" -l "${GITHUB_WORKSPACE}/report/results.txt" -JnumUsers="$num_users"

    results_file="${GITHUB_WORKSPACE}/report/results.txt"
    total_requests=$(awk '/HTTP Request/ {total++} END {print total}' "$results_file")
    successful_requests=$(awk '/HTTP Request.*200,OK/ {success++} END {print success}' "$results_file")

    if [ "$total_requests" -eq 0 ]; then
    success_rate=100
    else
    success_rate=$((successful_requests * 100 / total_requests))
    fi


    echo "Success rate for $num_users users: $success_rate%"
```

**The Dynamic Users Loop - Increasing the number of Users until the Success Rate falls bellows 75%**

```yaml
      - name: Dynamic Users Loop
        run: |
          chmod +x ./.github/workflows/loopAction.sh
          ./.github/workflows/loopAction.sh 1000

      - name: Upload JMeter Results
        uses: actions/upload-artifact@v2
        with:
          name: jmeter-results-DynamicUsersLoopResults-${{ github.run_number }}-${{ github.run_id }}
          path: /home/runner/work/switch-qa-23-project-switch-qa-23-2/switch-qa-23-project-switch-qa-23-2/report
```

**The loopAction.sh file:**

[loopAction](https://github.com/Departamento-de-Engenharia-Informatica/switch-qa-23-project-switch-qa-23-2/blob/e02bfb6b62622f2134a181eaf86113379b4394f0/.github/workflows/loopAction.sh)

```shell
#!/bin/bash
success_rate=100
num_users=$1

# Set the correct path to the jmeter script

JMETER_PATH="apache-jmeter-5.6.2/bin/jmeter"

          while [ "$success_rate" -ge 75 ]; do

            echo "Running JMeter test with $num_users users."

            rm -rf $GITHUB_WORKSPACE/report
            chmod +x "$JMETER_PATH"
            # Run JMeter test with the current number of users
            "$JMETER_PATH" -n -t "${GITHUB_WORKSPACE}/docs/sprintF/JmeterCollection/DDDForum.jmx" -e -o "${GITHUB_WORKSPACE}/report" -l "${GITHUB_WORKSPACE}/report/results.txt" -JnumUsers="$num_users"
                 
            sleep 400

            # Calculate success rate
            results_file="${GITHUB_WORKSPACE}/report/results.txt"
            total_requests=$(awk '/HTTP Request/ {total++} END {print total}' "$results_file")
            successful_requests=$(awk '/HTTP Request.*200,OK/ {success++} END {print success}' "$results_file")

            if [ "$total_requests" -eq 0 ]; then
            success_rate=100
            else
            success_rate=$(printf "%.2f" "$(bc -l <<< "$successful_requests * 100 / $total_requests")")
            fi

            echo "Success rate for $num_users users: $success_rate%"

            # Increase numUsers by 1000 if success rate is still above or equal to 75%

            if [ "$success_rate" -ge 75 ]; then
              num_users=$((num_users + 1000))
            fi
          done
```