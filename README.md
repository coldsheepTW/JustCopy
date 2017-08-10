## 記者快抄
由PTT熱門看板選取熱門文章，自動節錄生成模擬新聞。

此github為網頁生成部分。

## 網頁生成
使用[Jekyll](https://jekyllrb.com/)套件生成網頁

版面配置目前暫時基於[webjeda](http://webjeda.com/cards)修改

於gh-pages分支中有 `_posts` 資料夾以供測試，此資料夾不會更新。

## 安裝執行
相關套件安裝方式請參閱官網：[Jekyll](https://jekyllrb.com/), [Bundler](http://bundler.io/)

基礎執行指令如下：
```sh
bundle exec jekyll build # 生成網頁於_site資料夾
bundle exec jekyll serve --watch # 於local端(http://127.0.0.1:4000)架設網站
bundle exec jekyll serve --host your_server --watch # 於你的機器上(your_server:4000)架設網站
```


## CopyNews
Auto-generate news articles from popular posts in PTT forum.

This github is the website-generation part.

## Website Page Generation

Powered by [Jekyll](https://jekyllrb.com/)

Layout based on [webjeda](http://webjeda.com/cards)

In branch gh-pages we got `_posts` folder for you to test layouts, the examples in that folder will not update.

## Install and run
To install the related toolkits, please follow the guide in:[Jekyll](https://jekyllrb.com/), [Bundler](http://bundler.io/)

Basic running commands are:
```sh
bundle exec jekyll build # generate _site
bundle exec jekyll serve --watch # active a website server in http://127.0.0.1:4000
bundle exec jekyll serve --host your_server --watch # active a website server in your_server:4000
```
