pipeline {
    agent any

    tools {
        // Make sure NodeJS is configured in Jenkins
        nodejs 'NodeJS 16.x'
    }

    stages {
        stage('Checkout') {
            steps {
                // Corrected the git command
                git url: 'https://github.com/Chaitu600/Cypress_EcommTestRepo', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
}
