#!/bin/bash

# Function to display the main menu
display_menu() {
    echo "Welcome to the AlgoDs Project!"
    echo "1. View Project Details"
    echo "2. List Projects"
    echo "3. Contribution Guidelines"
    echo "4. Exit"
}

# Function to view project details
view_project_details() {
    cat README.md
}

# Function to list projects
list_projects() {
    echo "List of Projects:"
    # You can add more logic here to list projects from your directory structure
    # For now, just display a placeholder message
    echo "1. Animated Search Algorithm 1"
}

# Function to display contribution guidelines
display_contribution_guidelines() {
    cat CONTRIBUTING.md
}

# Main function
main() {
    while true; do
        display_menu
        read -p "Enter your choice: " choice
        case $choice in
            1) view_project_details;;
            2) list_projects;;
            3) display_contribution_guidelines;;
            4) echo "Exiting..."; break;;
            *) echo "Invalid choice";;
        esac
    done
}

# Call the main function to start the script
main