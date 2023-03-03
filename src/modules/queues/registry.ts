import type { FastifyInstance } from 'fastify';
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { Type } from '@sinclair/typebox';

import useQueue from '~/composables/useQueue';
import useWorker from '~/composables/useWorker';

const paintQueue = useQueue('Paint');

export default async (app: FastifyInstance) => {
  const router = app.withTypeProvider<TypeBoxTypeProvider>();

  router.get(
    '/',
    {
      schema: {
        querystring: Type.Object({ color: Type.String() }),
        response: { 200: Type.Object({ message: Type.String() }) },
      },
    },
    async (req, reply) => {
      await paintQueue.add('wall', { color: req.query.color });

      return reply.send({ message: 'Hi!' });
    },
  );
};

useWorker('Paint', async (job) => {
  console.log(job.id, job.name);
});
