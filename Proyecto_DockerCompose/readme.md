# Proyecto Docker Compose.

## Comandos de ejecucion:

1. Crea imágenes de Docker a partir de un Dockerfile y un "contexto".
    - docker build -t DockerCompose .  
2. Este comando mostrará todas las imágenes de nivel superior, su repositorio y etiquetas, y su tamaño.
    - docker images 
3. Construye, (re)crea, inicia y se adjunta a contenedores para un servicio.
    - docker compose up 
## Resultado.
-   https://raw.githubusercontent.com/HectorSGO/Entregable_1/main/assets/DockerCompose.png
## Comandos de utilidad:
    - docker ps     ---> se muestra la lista de imagenes corriendo
    - docker stop "nombre o id de la imagen"
    - docker ps -a  ---> se muestra la lista de contenedores
    - docker start
    - docker restart
