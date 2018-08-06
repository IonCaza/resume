def remote = [:]
remote.name = 'letcazain'
remote.host = 'let.caza.in'
remote.user = 'ubuntu'
remote.identityFile = '~/.ssh/baubau'
remote.allowAnyHosts = true

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
        sshCommand remote: remote, command: 'cd /var/www/letcazain-resume;touch testfile;rm -rf *'
        sshPut remote: remote, from: './build/.', into: '/var/www/letcazain-resume'
        sshCommand remote: remote, command: 'cd /var/www/letcazain-resume;sudo chown 0775 .;ls -al'
      }
    }
  }
}
