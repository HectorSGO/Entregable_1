# Proyecto Kafka.

## Requerimientos:

1. Descarga del archivo docker-compose:
    - curl -sSL https://raw.githubusercontent.com/bitnami/containers/main/bitnami/kafka/docker-compose.yml > docker-compose.yml

2. URLs:
    - https://kafka.apache.org/
    - https://hub.docker.com/r/bitnami/kafka/
---
## Comandos de ejecucion:

1. Construye, (re)crea, inicia y se adjunta a contenedores para un servicio.
    - docker-compose up

2. Crear Topic
    - kafka-topics.sh --create --topic TOPIC01-events --bootstrap-server localhost:9092

3. Eliminar Topic:
    - kafka-topics.sh --delete --topic TOPIC_1-events --bootstrap-server localhost:9092

4. Listar Topics
    - kafka-topics.sh --list --bootstrap-server localhost:9092

5. Particiones
    - kafka-topics.sh --create --topic TOPIC01-events --partitions 3 --bootstrap-server localhost:9092

6. Descripciones de Topicos
     - kafka-topics.sh --describe --topic TOPIC01-events --bootstrap-server localhost:9092

7. Escribir a un topico desde linea de comandos:
    - kafka-console-producer.sh --topic TOPIC01-events --bootstrap-server localhost:9092

8. Consumir un topico desde linea de comandos:
    - kafka-console-consumer.sh --topic TOPIC01-events --from-beginning --bootstrap-server localhost:9092
    - kafka-console-consumer.sh --topic TOPIC01-events --bootstrap-server localhost:9092
## Resultado.
- https://raw.githubusercontent.com/HectorSGO/Entregable_1/main/assets/kafka/partitions_kafka.png
- https://raw.githubusercontent.com/HectorSGO/Entregable_1/main/assets/kafka/producer.png
- https://raw.githubusercontent.com/HectorSGO/Entregable_1/main/assets/kafka/consumer.png