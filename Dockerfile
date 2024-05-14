# Utiliser une image de node.js en tant que base
FROM node:14-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers de l'application dans le répertoire de travail
COPY . .

# Construire l'application React
RUN npm run build

# Commande à exécuter lorsque le conteneur démarre
CMD ["npm", "start"]
 