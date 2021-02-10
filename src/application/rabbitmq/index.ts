import * as amqp from 'amqp-ts'
export class Worker {
  private exchange: amqp.Exchange;
  private connection: amqp.Connection;
  private queue: amqp.Queue;
  messages: string[];
  constructor () {
    this.buildConnection()
    this.startConsume()
    this.sendMessage('ola')
  }

  private buildConnection () {
    this.connection = new amqp.Connection(process.env.RABBITMQ_URL)
    this.exchange = this.connection.declareExchange('teste')
    this.queue = this.connection.declareQueue('queue_test')
  }

  private startConsume () {
    this.queue.bind(this.exchange)
    this.queue.activateConsumer(this.work)
  }

  private work (message: amqp.Message) {
    this.messages.push(message.getContent())
  }

  private sendMessage (message: string) {
    this.exchange.send(new amqp.Message(message))
  }
}
