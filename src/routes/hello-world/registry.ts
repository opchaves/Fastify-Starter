import type { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { Type } from '@sinclair/typebox';
import { defineI18n, useI18n } from 'fastify-i18n';

import enUS from './_locales/en-US';
import jaJP from './_locales/ja-JP';
import koKR from './_locales/ko-KR';
import zhTW from './_locales/zh-TW';

export default (async (app) => {
  defineI18n(app, {
    'en-US': enUS,
    'ja-JP': jaJP,
    'ko-KR': koKR,
    'zh-TW': zhTW,
  });

  /*
  curl --request GET \
    --url http://127.0.0.1:3000/api/hello-world \
    --header 'Accept-Language: ja-JP'
  */
  app.get(
    '',
    {
      schema: {
        response: {
          200: Type.Object({
            hello: Type.String(),
            text: Type.String(),
          }),
        },
      },
    },
    async (req, reply) => {
      const i18n = useI18n(req);

      return reply.send({
        hello: i18n.t('hello'),
        text: req.i18n.t('text'),
      });
    },
  );
}) as FastifyPluginAsyncTypebox;
