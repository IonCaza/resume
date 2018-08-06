pipeline {
    agent {
        docker {
            image 'node:alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'yarn --version' 
                sh 'yarn install'
                sh 'yarn build' 
            }
        }
        stage('Deploy') { 
            steps {
                sh 'cd build'
                sh 'ssh -i ~/.ssh/baubau ubuntu@let.caza.in'
                sh 'sudo rm -rf /var/www/letcazain-resume/.'
                sh 'exit'
                sh 'scp -i ~/.ssh/baubau . ubuntu@let.caza.in:/var/www/letcazain-resume'
                sh 'ssh -i ~/.ssh/baubau ubuntu@let.caza.in'
                sh 'cd /var/www/letcazain-resume'
                sh 'sudo chown 0775 .'
                sh 'exit'
            }
        }
    }
}