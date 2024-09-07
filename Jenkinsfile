pipeline {
    agent any

    tools {
    nodejs 'NodeJS 16.x'  // Make sure this name matches exactly with your configuration in Jenkins
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
