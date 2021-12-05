# FIRE SHOOTER SAN

シンプルなシューティングゲーム

[ゲームを表示する](https://hasegawa-campfire.github.io/fire-shooter-san/)

## 動作環境

- モダンブラウザ（スマホ含む）

RIP Internet Explorer

## ローカル実行

- 開発環境はありません
- 直接 src/index.html を開きます
- 要ローカルサーバー＆Chrome

## ビルド

そのままでも src/index.html が動きますが、
ビルドすれば dist/index.html も動きます

```
yarn build
```

## デプロイ

dist の内容が github pages にアップロードされます
予めビルドしておくこと

```
yarn deploy
```

## テクスチャアトラスの更新

src/image 内の画像を 1 つにまとめます

```
yarn packing
```

## 使用素材

### 日本語フォント

#### PixelMplus

http://itouhiro.hatenablog.com/entry/20130602/font

#### DotGothic16

https://fonts.google.com/specimen/DotGothic16

### アイコン

#### Bootstrap Icons

https://icons.getbootstrap.com/

### 効果音

#### PANICPUMPKIN

http://pansound.com/panicpumpkin/

#### FC 音工房

https://fc.sitefactory.info/

#### seadenden 8bit freeBGM

http://seadenden-8bit.com

### 音楽

#### Audiostock

https://audiostock.jp
