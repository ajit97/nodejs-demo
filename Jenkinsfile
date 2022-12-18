pipeline{
 agent any
  stages{
    stage("build"){
      steps{
        echo 'Building this one'
       nodejs('nodejs-19.3.0'){
         sh 'npm install'
       }
      }
    }
    stage("test"){
      steps{
        echo 'Testing this one'
      }
    }
    
    stage("deploy"){
      steps{
        echo 'Deploying this one'
      }
    }
    
  }
}
