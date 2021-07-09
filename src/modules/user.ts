/*
 * Desc: user 相关接口
 * File: /src/modules/user.ts
 * Project: notion-api-learn
 * File Created: Friday, 9th July 2021 1:42:03 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2021 Camel Lu
 */
import notionClient from '@/client/index';

export const getAllUsers = async (start_cursor?: string, page_size?: number) => {
  const response = await notionClient.users.list({
    start_cursor,
    page_size,
  });
  console.log(response);
};

export const getUserById = async (user_id: string) => {
  const response = await notionClient.users.retrieve({ user_id });
  console.log(response);
};
