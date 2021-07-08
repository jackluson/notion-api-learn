/*
 * Desc: database相关接口
 * File: /src/modules/database.ts
 * Project: node-typescript-template
 * File Created: Thursday, 8th July 2021 10:02:33 am
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2021 Camel Lu
 */

import notionClient from '@/client/index';

// https://developers.notion.com/reference/get-database
export const retrieveDatabase = async (databaseId: string) => {
  const response = await notionClient.databases.retrieve({ database_id: databaseId });
  console.log(response);
};

//https://developers.notion.com/reference/post-database-query
// 可以进行过滤，排序，分页，相当于查看不同视图
export const queryTableDatabase = async (databaseId: string) => {
  const response = await notionClient.databases.query({
    database_id: databaseId,
    //filter: {
    //  or: [
    //    //{
    //    //  property: 'checkbox',
    //    //  checkbox: {
    //    //    equals: true,
    //    //  },
    //    //},
    //    {
    //      property: 'Name',
    //      text: {
    //        //is_not_empty: true,
    //        contains: 'Page 1',
    //      },
    //    },
    //  ],
    //},
    //sorts: [
    //{
    //  property: 'Last ordered',
    //  direction: 'ascending',
    //},
    //],
    //start_cursor: '1c90a2a8-13ba-4c70-b0eb-cbbc893828e9',
    //page_size: 1,
  });
  console.log(response);
};

// https://developers.notion.com/reference/get-databases
// NOTE: deprecated api 上面的database-query可以满足此功能
export const queryListDatabase = async (databaseId?: string) => {
  const response = await notionClient.databases.list({
    start_cursor: databaseId,
    //page_size: 1,
  });
  console.log(response.results);
};
