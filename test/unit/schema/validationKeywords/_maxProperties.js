export const maxPropertiesTests = [
  {
    'description': 'maxProperties validation',
    'schema': { 'maxProperties': 2 },
    'tests': [
      {
        'description': 'shorter is valid',
        'data': { 'foo': 1 },
        'valid': true
      },
      {
        'description': 'exact length is valid',
        'data': { 'foo': 1, 'bar': 2 },
        'valid': true
      },
      {
        'description': 'too long is invalid',
        'data': { 'foo': 1, 'bar': 2, 'baz': 3 },
        'valid': false
      },
      {
        'description': 'ignores non-objects',
        'data': 'foobar',
        'valid': true
      }
    ]
  }
]
