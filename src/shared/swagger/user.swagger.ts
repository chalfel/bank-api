export const findUser = {
  tags: ['User'],
  description: 'Returns all users from the system that the user has access to',
  operationId: 'findUser',
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    200: {
      description: 'A list of users.',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'User Id',
                  example: '2'
                },
                first_name: {
                  type: 'string',
                  description: 'User Name',
                  example: 'Caio'
                }
              }
            }
          }
        }
      }
    }
  }
}
