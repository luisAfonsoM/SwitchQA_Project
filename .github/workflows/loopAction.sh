#!/bin/bash
num_users=$1

# Set the correct path to the jmeter script
JMETER_PATH="apache-jmeter-5.6.2/bin/jmeter"

while [ "$percentage_difference" -ge 75 ]; do

    echo "Running JMeter test with $num_users users."

    rm -rf "${GITHUB_WORKSPACE}/report"
    chmod +x "$JMETER_PATH"

    # Reference throughput is now obtained directly within the awk command
    reference_throughput=$(cat "${GITHUB_WORKSPACE}/throughput_value.txt")

    echo "The throughput reference value is: $reference_throughput"

    # Run JMeter test with the current number of users
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

    if [ "$(echo "$percentage_difference < 75" | bc -l)" -eq 1 ]; then
        num_users=$((num_users + 100))
    else
        echo "Throughput for $num_users users falls below 75% of the reference value."
    fi

    echo "Total throughput for $num_users users: $total_throughput"

done

     