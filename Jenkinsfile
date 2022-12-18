pipeline{
 agent any
  stages{
    stage("build"){
      steps{
        script{
          def test = 4 +5
          echo $test
        }
        echo 'Building this one'
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
