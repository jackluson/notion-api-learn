/*
 * Desc: 搜索相关api
 * File: /src/modules/search.ts
 * Project: notion-api-learn
 * File Created: Friday, 9th July 2021 2:02:20 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2021 Camel Lu
 */

import notionClient from '@/client/index';

type SearchHelpArgs = Parameters<typeof notionClient.search>[number];

export const searchHelp = async (
  query?: SearchHelpArgs['query'],
  sort?: SearchHelpArgs['sort'],
  filter?: SearchHelpArgs['filter'],
  start_cursor?: SearchHelpArgs['start_cursor'],
  page_size?: SearchHelpArgs['page_size'],
) => {
  console.log('🚀 ~ file: search.ts ~ line 22 ~ query', query);

  const response = await notionClient.search({
    query, // comparing the query to the page title.
    sort,
    filter,
    start_cursor,
    page_size,
  });
  console.log(response);
};
