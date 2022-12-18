pipeline{
 agent any
  stages{
    stage("build"){
      steps{
        echo 'Building this one'
       nodejs('node-18.12.1'){
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
