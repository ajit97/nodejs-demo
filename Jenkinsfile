pipeline{
    agent any
    stages{
        stage("build"){
            steps{
                echo 'Building the Application'
                nodejs('nodejs-18.12.1'){
                    echo 'Node js steps'
                    sh 'npm install'
                }
            }
        }
        stage("test"){
            steps{
                echo 'Testing the application'
                echo 'Test node js application'
            }
        }
        stage('depl'){
            steps{
                echo 'Deploying the application'
                echo 'DEPL CHANGED'
                sh 'npm --version'
            }
        }
    }
}