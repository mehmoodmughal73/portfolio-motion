pipeline {
    agent any

    stages {
        stage('Build Backend') {
            steps {
                sh 'docker build -t portfolio-backend ./backend'
            }
        }
        stage('Build Frontend') {
            steps {
                sh 'docker build -t portfolio-frontend ./frontend'
            }
        }
        stage('Run with Docker Compose') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }
    }
}