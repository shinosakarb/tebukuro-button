## Tebukuro button
The English README is available at [README_EN.md](README_EN.md)!

### What's this? 
[Tebukuro](https://tebukuro.shinosakarb.org/) で作成したイベントへの参加ボタンを、イベントのランディングページなどに埋め込むスクリプトです。

### How to use

以下の３ステップでサイトに参加ボタンを埋め込むことができます！

- [Tebukuro](https://tebukuro.shinosakarb.org/) でイベントを作成
  - ブラウザのアドレスバーでTebukuro内でのイベントIDを確認してください

- id属性が`tebukuro-leash` の`<div/>` タグ をサイトの好きな場所に追加
  - `data-event-id` 属性をTebukuro内でのIDに書き換えてください
  
![tebukuro-leash-sample](https://user-images.githubusercontent.com/10824691/46779241-ddadcc80-cd51-11e8-9502-2cd1a21ced13.png)
  
  
- 参加ボタンのbundleをダウンロードするための`<script>`タグを、`<body>`タグの最後に追加

![bundle-script-sample](https://user-images.githubusercontent.com/10824691/46779285-0209a900-cd52-11e8-8c58-09aa836ea109.png)


このボタンの使用例はこちら:

- Webサイト: https://neyagawarb.tk

- リポジトリ: https://github.com/shinosakarb/tebukuro-demo
