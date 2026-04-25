pipeline{
  agent any
  enviroment{
    VERCEL_TOKEN=credentials('vercel_token')
}
  stages{
    stage('Install'){ 
      steps{
         bat 'npm install'
      }
    }
    stage('Test'){ 
      steps{
         echo 'Skipping test'
      }
    }stage('Build'){ 
      steps{
         bat 'npm run build'
      }
    }stage('Deploy'){ 
      steps{
         bat 'npx vercel ---prod ---yes'
         --token=%VERCEL_TOKEN%'
      }
    }
}
}
