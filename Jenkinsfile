pipeline{
 agent any
  stages{
    stage("build"){
      steps{
        echo 'Building this one'
       script {
        def test = 43 > 40 ? "43 greater than 40" : "Less than 40"
        echo test
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
