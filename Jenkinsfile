pipeline {
    agent any
    tools {
        nodejs 'NodeJS 16.x' // Use the NodeJS version you configured in Jenkins
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository code from Git
                git 'https://github.com/Chaitu600/Cypress_EcommTestRepo'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install Cypress and other dependencies
                sh 'npm install'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                // Run Cypress tests in headless mode
                sh './node_modules/.bin/cypress run --spec "cypress/e2e/**/*.cy.ts"'
            }
        }
    }
    post {
        always {
            // Archive test results, screenshots, and videos
            archiveArtifacts artifacts: '**/screenshots/*.*, **/videos/*.*', allowEmptyArchive: true
            junit '**/cypress/reports/*.xml' // Collect JUnit test reports
        }
    }
}
