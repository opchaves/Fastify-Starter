import plugin from 'fastify-plugin';

export default plugin(
  async (app, opts) => {
    const { prefix } = opts;

    app.register(import('~/modules/hello-world/registry'), { prefix });
    app.register(import('~/modules/auth/registry'), { prefix: prefix + '/auth' });
    app.register(import('~/modules/todos/registry'), { prefix });
    app.register(import('~/modules/file-uploads/registry'), { prefix });

    app.register(import('~/modules/sign-in'), { prefix });
  },
  { name: 'router' },
);
