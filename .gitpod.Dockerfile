FROM gitpod/workspace-node:latest

RUN bash -c 'VERSION="16.15.1"     && source $HOME/.nvm/nvm.sh && nvm install $VERSION     && nvm use $VERSION && nvm alias default $VERSION'

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix