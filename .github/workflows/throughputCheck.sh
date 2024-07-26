#!/bin/bash
num_users=$1

# Set the correct path to the jmeter script
JMETER_PATH="apache-jmeter-5.6.2/bin/jmeter"

# Ensure the jmeter script has executable permission
chmod +x "$JMETER_PATH"
rm -rf "${GITHUB_WORKSPACE}/report"

# Reference throughput is now obtained directly within the awk command
reference_throughput=$(cat "${GITHUB_WORKSPACE}/throughput_value.txt")

echo "The throughput reference value is: $reference_throughput"

"$JMETER_PATH" -n -t "${GITHUB_WORKSPACE}/docs/sprintF/JmeterCollection/DDDForum.jmx" -e -o "${GITHUB_WORKSPACE}/report" -l "${GITHUB_WORKSPACE}/report/results.txt" -JnumUsers="$num_users"

statistics_file="${GITHUB_WORKSPACE}/report/statistics.json"

# Function to get throughput from JSON
get_throughput() {
    jq -r '.["Total"].throughput' "$1"
}

total_throughput=$(get_throughput "$statistics_file")

echo "Total throughput for $num_users users: $total_throughput"

# Calculate the percentage difference
percentage_difference=$(awk -v ref="$reference_throughput" -v current="$total_throughput" 'BEGIN { print (current / ref * 100) }')

echo "Percentage difference: $percentage_difference%"

# Check if throughput falls below 75%
if [ "$(echo "$percentage_difference < 75" | bc -l)" -eq 1 ]; then
  echo "Throughput for $num_users users falls below 75% of the reference value."
  # Add actions or commands to handle the situation
else
  echo "Throughput for $num_users users is within acceptable range."
fi


