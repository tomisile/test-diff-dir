# To-do: file description

ARG baseimage="node:23-alpine"

FROM ${baseimage}

# Set default working directory
WORKDIR /home/static-deploy/

# Copy artifacts into the image/container
COPY . /home/static-deploy/

# Install dependencies from package*.json
RUN npm install

# Set container port
EXPOSE 3000

# Entrypoint command 
# To-do: add [server] script to package.json to use "npm run server"
# as entrypoint command 
CMD [ "node", "index.js" ]