# Proyecto Dockerfile.

## Comandos de ejecucion:

1. Crea imágenes de Docker a partir de un Dockerfile y un "contexto".
    - docker build -t imagen2 .
2. Este comando mostrará todas las imágenes de nivel superior, su repositorio y etiquetas, y su tamaño.
    - docker images 
3. Comando para realizar la ejecucionen un puerto especifico.
    - docker run -p 2000:3000 imagen1  

## Resultado.
-   https://raw.githubusercontent.com/HectorSGO/Entregable_1/main/assets/Dockerfile.png

## Comandos de utilidad:
    - docker ps     ---> se muestra la lista de imagenes corriendo
    - docker stop "nombre o id de la imagen"
    - docker ps -a  ---> se muestra la lista de contenedores
    - docker start
    - docker restart
    - docker rm     ---> Elimina las imagenes
