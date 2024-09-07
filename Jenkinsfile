pipeline {
    agent any
    tools {
        nodejs 'NodeJS 16.x'  // Ensure this matches your NodeJS installation
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Chaitu600/Cypress_EcommTestRepo'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}
