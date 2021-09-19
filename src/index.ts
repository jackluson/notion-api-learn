/*
 * Desc:
 * File: /src/index.ts
 * Project: node-typescript-template
 * File Created: Friday, 4th June 2021 10:04:34 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2021 Camel Lu
 */
import 'module-alias/register';
import dotenv from 'dotenv';

dotenv.config();

import {
  retrieveDatabase,
  queryTableDatabase,
  queryListDatabase,
  createDataBase,
  updateDataBase,
} from './modules/database';
import { retrievePage, createDataBasePage, createPage, udpatePageProperties } from './modules/page';
import { appendBlock, retrieveBlocks } from './modules/block';
import { getAllUsers, getUserById } from './modules/user';
import { searchHelp } from './modules/search';

/* 1. database 相关api */
//retrieveDatabase('8920bb8a747e4d1a9f34ebe5877aa033');

//相当于table中不同的视图
const tableDataBaseID = '8920bb8a747e4d1a9f34ebe5877aa033';
const listDataBaseID = '5885924186fd43c2888636e5c90cceb0';
//queryTableDatabase('dabbfc89e5c447ce86b4032b0db5403a');
//queryListDatabase('dabbfc89-e5c4-47ce-86b4-032b0db5403a');
// createDataBase('489015ee563242c6a04a868390773ce3');
updateDataBase('83cc8284b6cc46019a9a5c43d66b82b1');
/* 2. page 相关接口 */
const pageID = 'df88140a3014405da41c1d88ab29c39d'; // database 页面
//retrievePage(pageID);

//createDataBasePage(tableDataBaseID);
//createPage(pageID);
const updatePageId = 'bd2702e24b924d09a9e5450908725e6e'; // 普通页面

/* 3. block 相关 */

const blockId = 'df88140a3014405da41c1d88ab29c39d';
//retrieveBlocks(blockId);

const appendBlockId = '6cc433f739484b01b4932f12453dedc3';

//appendBlock(appendBlockId);

/* 4. user 相关api */
//getAllUsers();
const userId = 'f1f86ee2-639b-4f8d-8d4b-ed969c63e620';

//getUserById(userId);

/* 5. search 相关 */

const query = '你好';
// searchHelp(query);
