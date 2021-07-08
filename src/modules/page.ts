/*
 * Desc: page 相关接口
 * File: /src/modules/page.ts
 * Project: node-typescript-template
 * File Created: Thursday, 8th July 2021 10:28:17 am
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2021 Camel Lu
 */

import notionClient from '@/client/index';

// https://developers.notion.com/reference/get-page
export const retrievePage = async (pageId: string) => {
  const response = await notionClient.pages.retrieve({ page_id: pageId });
  console.log('response', response);
};

// https://developers.notion.com/reference/post-page
export const createDataBasePage = async (parentDatabaseId: string) => {
  const response = await notionClient.pages.create({
    parent: {
      database_id: parentDatabaseId,
      //page_id: parentDatabaseId,
    },
    properties: {
      Name: {
        title: [
          {
            //''
            type: 'text',
            text: {
              content: 'Tuscan Kale',
            },
          },
        ],
        type: 'title',
      },
      //Description: {
      //  text: [
      //    {
      //      text: {
      //        content: 'A dark green leafy vegetable',
      //      },
      //    },
      //  ],
      //},
      'select-key': {
        type: 'select',
        select: {
          //id: '',
          name: 'graph',
          color: 'red',
        } as any,
      },
      number: {
        type: 'number',
        number: 2.5,
      },
    },
    //children: [
    //  {
    //    object: 'block',
    //    type: 'heading_2',
    //    heading_2: {
    //      text: [
    //        {
    //          type: 'text',
    //          text: {
    //            content: 'Lacinato kale',
    //          },
    //        },
    //      ],
    //    },
    //  },
    //  {
    //    object: 'block',
    //    type: 'paragraph',
    //    paragraph: {
    //      text: [
    //        {
    //          type: 'text',
    //          text: {
    //            content:
    //              'Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.',
    //            link: {
    //              url: 'https://en.wikipedia.org/wiki/Lacinato_kale',
    //            },
    //          },
    //        },
    //      ],
    //    },
    //  },
    //],
  });
  console.log('response', response);
};

// https://developers.notion.com/reference/post-page -- page_id

export const createPage = async (parentId: string) => {
  const response = await notionClient.pages.create({
    parent: {
      page_id: parentId,
    },
    properties: {
      title: {
        title: [
          {
            type: 'text',
            text: {
              content: 'Tuscan Kale',
            },
          },
        ],
        //type: 'title',
        type: [] as any, // notion sdk bug
      },
    },
  });
  console.log('response', response);
};

export const udpatePageProperties = async (pageId: string) => {
  console.log('🚀 ~ file: page.ts ~ line 125 ~ udpatePageProperties ~ pageId', pageId);
  const response = await notionClient.pages.update({
    page_id: pageId,
    properties: {
      //title: {
      //  title: [
      //    {
      //      type: 'text',
      //      text: {
      //        content: 'jisdfitetitle',
      //      },
      //    },
      //  ],
      //  type: 'title',
      //},
      data: {
        date: {
          start: '2020-12-08T12:00:00Z',
        },
        type: 'date',
      },
    },
  });
  console.log(response);
};
