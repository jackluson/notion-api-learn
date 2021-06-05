/*
 * Desc:
 * File: /src/index.ts
 * Project: node-typescript-template
 * File Created: Friday, 4th June 2021 10:04:34 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2021 Camel Lu
 */

import dotenv from 'dotenv';
import type { RequestParameters } from '@notionhq/client/build/src/Client';
import type { PaginatedList, Page } from '@notionhq/client/build/src/api-types';
import { Client } from '@notionhq/client';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_KEY });

const database_id = process.env.NOTION_DATABASE_ID;

async function getPageInfo(database_id?: string) {
  if (!database_id) return;
  const method: RequestParameters['method'] = 'post';
  const request_payload: RequestParameters = {
    path: 'databases/' + database_id + '/query',
    method,
  };

  //While there are more pages left in the query, get pages from the database.
  const current_pages = await notion.request<PaginatedList<Page>>(request_payload);
  console.log('🚀 ~ file: index.ts ~ line 31 ~ getPageInfo ~ current_pages', current_pages);
  const { results } = current_pages;
  // console.log('🚀 ~ file: index.ts ~ line 32 ~ getPageInfo ~ results', results);
  for (const result of results) {
    const { object: type, id } = result;
    if (type === 'page') {
      const page_id = id.replace(/-/g, '');
      console.log('🚀 ~ file: index.ts ~ line 36 ~ getPageInfo ~ page_id', page_id);
      getPageInfo(page_id);
    }
  }
  // console.log('🚀 ~ file: index.js ~ line 20 ~ getPageInfo ~ current_pages');
  // const title = (current_pages.results[0].properties.Name as any).title;
  // console.log('title', title);

  // for(const page of current_pages.results){
  //     issues[page.properties["Issue Number"].number] = {
  //         "page_id": page.id,
  //     }
  // }
  // if(current_pages.has_more){
  //     await getPageInfo(current_pages.next_cursor)
  // }
}
getPageInfo(database_id);
