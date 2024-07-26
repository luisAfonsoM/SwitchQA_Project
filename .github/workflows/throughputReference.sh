#!/bin/bash
num_users=$1

# Set the correct path to the jmeter script
JMETER_PATH="apache-jmeter-5.6.2/bin/jmeter"

# Ensure the jmeter script has executable permission
chmod +x "$JMETER_PATH"
rm -rf "${GITHUB_WORKSPACE}/report"

"$JMETER_PATH" -n -t "${GITHUB_WORKSPACE}/docs/sprintF/JmeterCollection/DDDForum.jmx" -e -o "${GITHUB_WORKSPACE}/report" -l "${GITHUB_WORKSPACE}/report/results.txt" -JnumUsers="$num_users"

statistics_file="${GITHUB_WORKSPACE}/report/statistics.json"

# Debugging: Print the contents of statistics.json
cat "$statistics_file"

# Function to get throughput from JSON
get_throughput() {
    jq -r '.["Total"].throughput' "$1"
}

total_throughput=$(get_throughput "$statistics_file")

# Save the throughput value to an environment variable file
echo "$total_throughput" > "${GITHUB_WORKSPACE}/throughput_value.txt"
echo "Total throughput for $num_users users: $total_throughput"
