pipeline {
    agent any
    environment {
        HOME = '.'
        registry = 'burnedduke36/rampupfront'
        dockerImage = ''
    }
    stages {
        stage('setup') {
            steps {
                git changelog: false, credentialsId: 'github_account', url: 'https://github.com/Burnedduk3/NonaAnalyticsWebApp.git'
            }
        }

        stage('build') {
            steps {
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }

        stage('test') {
            steps {
                sh 'echo Running tests'
            }
        }

        stage('push'){
            steps{
                script {
                    docker.withRegistry('342495404680.dkr.ecr.us-east-1.amazonaws.com/life-project-front-end', 'ecr:us-east-1:AWS_Jenkins') {
                        dockerImage.push()
                        dockerImage.push('latest')
                    }
                }
            }
        }

        stage('deploy'){
            steps{
//                 sh "sudo salt 'front-*' state.apply docker-run-front"
                    sh 'echo Running deploy'
            }
        }
    }
}