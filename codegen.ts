import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'schema.json',
  documents: 'src/app/**/*.graphql',
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        'fragment-matcher',
        'typescript',
        'typescript-operations',
        'typescript-apollo-angular',
      ],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
