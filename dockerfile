# Imagen base
FROM node:18

# Directorio de trabajo
WORKDIR /backend_prueba_tecnica

# Copiar archivos del backend
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando de inicio
CMD ["npm", "run", "start"]
