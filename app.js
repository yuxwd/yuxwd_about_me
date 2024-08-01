const express = require('express');
const fs = require('fs');
const marked = require('marked');

const app = express();

// 设置Markdown文件路径
const markdownPath = './app/page.md';

// 创建一个GET路由处理程序
app.get('/', (req, res) => {
  // 读取Markdown文件内容
  fs.readFile(markdownPath, 'utf8', (err, data) => {
    if (err) {
      // 发生错误时返回错误信息
      res.status(500).send('Error reading the Markdown file');
    } else {
      // 使用marked解析Markdown内容为HTML
      const htmlContent = marked(data);
      res.send(htmlContent);
    }
  });
});

// 启动服务器
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
