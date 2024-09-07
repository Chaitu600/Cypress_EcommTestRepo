pipeline {
    agent any
    tools {
        nodejs 'NodeJs 20.x'
    }
    stages {
        stage('Checkout') {
            steps {
                retry(3) {
                   git url: 'https://github.com/Chaitu600/Cypress_EcommTestRepo', branch: 'main'
                }
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
