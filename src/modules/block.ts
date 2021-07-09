/*
 * Desc: block 相关接口
 * File: /src/modules/block.ts
 * Project: notion-api-learn
 * File Created: Friday, 9th July 2021 10:59:22 am
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2021 Camel Lu
 */

import notionClient from '@/client/index';

export const retrieveBlocks = async (blockId: string) => {
  const response = await notionClient.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  const { object, results } = response;
  if (object === 'list') {
    for (const block of results) {
      const { type } = block;
      if (type !== 'unsupported') {
        type BlockKey = keyof typeof block;
        console.log('🚀 ~ file: block.ts ~ line 21 ~ retrieveBlocks ~ block', block);
        console.log('🚀 ~ file: block.ts ~ line 21 ~ retrieveBlocks ~ block', (block[type as BlockKey] as any).text);
      } else {
        console.log('block', block);
      }
    }
  }
};

export const appendBlock = async (blockId: string) => {
  const response = await notionClient.blocks.children.append({
    block_id: blockId,
    children: [
      //{
      //  object: 'block',
      //  type: 'heading_2',
      //  heading_2: {
      //    text: [
      //      {
      //        type: 'text',
      //        text: {
      //          content: 'Lacinato kale',
      //        },
      //      },
      //    ] ,
      //  },
      //},
      {
        object: 'block',
        type: 'paragraph',
        paragraph: {
          text: [
            {
              type: 'text',
              //plain_text: 'jiji',
              //annotations: {
              //  italic: true,
              //  code: true,
              //  color: 'blue',
              //  bold: true,
              //  strikethrough: true,
              //  underline: true,
              //},
              text: {
                content: 'appendblock',
              },
              //text: {
              //  content:
              //    'Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.',
              //  link: {
              //    type: 'url',
              //    url: 'https://en.wikipedia.org/wiki/Lacinato_kale',
              //  },
              //},
            },
          ],
          children: [],
        },
      },
    ] as any,
  });
  console.log(response);
};
