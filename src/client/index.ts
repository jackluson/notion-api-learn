import HttpsProxyAgent from 'https-proxy-agent';

import { Client } from '@notionhq/client';

const proxy = process.env.http_proxy || 'http://127.0.0.1:1087';
console.log('using proxy server %j', proxy);
console.log('NOTION_KEY', process.env.NOTION_KEY);

const agent = HttpsProxyAgent(proxy);
//opts.agent = agent;
const notionClient = new Client({ auth: process.env.NOTION_KEY, agent });

export default notionClient;
