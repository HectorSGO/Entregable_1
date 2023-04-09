const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'Baz-Kafka',
    brokers: ['localhost:9092']
})

const producer = kafka.producer()

const run = async () => {
    // Producing
    await producer.connect()

    for (let i = 0; i < 10; i++) {
        await producer.send({
            topic: 'TOPIC01-events',
            messages: [
                { value: 'Hello KafkaJS PRODUCER!' },
            ],
        })
    }
}
run().catch(console.error)