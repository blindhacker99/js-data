export const definitionsTests = [
  {
    description: 'valid definition',
    schema: { $ref: 'http://json-schema.org/draft-04/schema#' },
    tests: [
      {
        description: 'valid definition schema',
        data: {
          definitions: {
            foo: { type: 'integer' }
          }
        },
        valid: true
      }
    ]
  },
  {
    description: 'invalid definition',
    schema: { $ref: 'http://json-schema.org/draft-04/schema#' },
    tests: [
      {
        description: 'invalid definition schema',
        data: {
          definitions: {
            foo: { type: 1 }
          }
        },
        valid: false
      }
    ]
  }
]
