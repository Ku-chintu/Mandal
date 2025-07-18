pipeline {
    agent any

    environment {
        BUILD_DIR = 'dist'
        DEPLOY_DIR = '/var/www/mandal'
        NGINX_CONF = '/etc/nginx/sites-available/mandal'
        NGINX_LINK = '/etc/nginx/sites-enabled/mandal'
    }

    options {
        skipDefaultCheckout(true)
        timestamps()
    }

    stages {
        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Clone Repository') {
            steps {
                git branch: 'dev', url: 'https://github.com/Ku-chintu/Mandal.git'
            }
        }

        stage('Install Node.js v20') {
            steps {
                sh '''
                    set -e
                    if ! command -v node >/dev/null || [ "$(node -v | sed 's/v//; s/\\..*//')" -lt 20 ]; then
                      echo "Installing Node.js v20..."
                      curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
                      sudo apt-get install -y nodejs
                    else
                      echo "Node.js is already at $(node -v)"
                    fi
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Ensure Nginx') {
            steps {
                sh '''
                    set -e
                    if ! command -v nginx >/dev/null; then
                      echo "Installing Nginx..."
                      sudo apt-get update -y
                      sudo apt-get install -y nginx
                    else
                      echo "Nginx already installed."
                    fi

                    sudo rm -f /etc/nginx/sites-enabled/default
                    sudo rm -f /etc/nginx/sites-available/default
                    sudo systemctl enable nginx || true
                    sudo systemctl start nginx || true
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    set -e
                    sudo mkdir -p "$DEPLOY_DIR"

                    # Copy build files
                    if command -v rsync >/dev/null; then
                      sudo rsync -a --delete "$BUILD_DIR"/ "$DEPLOY_DIR"/
                    else
                      sudo rm -rf "$DEPLOY_DIR"/* || true
                      sudo cp -r "$BUILD_DIR"/* "$DEPLOY_DIR"/
                    fi

                    # Create Nginx config
                    sudo tee "$NGINX_CONF" > /dev/null <<'NGINXCONF'
server {
    listen 80;
    server_name _;
    root __DEPLOY_DIR__;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
NGINXCONF

                    sudo sed -i "s|__DEPLOY_DIR__|$DEPLOY_DIR|g" "$NGINX_CONF"

                    sudo ln -sf "$NGINX_CONF" "$NGINX_LINK"
                    sudo nginx -t
                    sudo systemctl reload nginx
                '''
            }
        }
    }

    post {
        failure { echo "❌ Pipeline failed." }
        success { echo "✅ Deployment successful!" }
    }
}
