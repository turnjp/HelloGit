---
name: playwright
description: Playwrightブラウザを使用してWebページのスクリーンショットを撮影するスキル。ページ全体（スクロールして隠れた部分を含む）のフルページキャプチャや、特定のビューポートサイズでの撮影に使用する。URLへのナビゲーション、フルページスクリーンショット、高解像度キャプチャが必要なタスクに自動的に適用される。
---

# Playwright スクリーンショットスキル

このスキルは、Playwright ブラウザツールを使ってWebページのスクリーンショットを撮影する標準的な手順を定義します。

## 基本手順

### 1. ページへのナビゲーション

対象のURLにナビゲートします。

```javascript
await page.goto('https://example.com');
```

### 2. フルページスクリーンショット（推奨）

スクロールして隠れたコンテンツを含む、ページ全体を縦長のスクリーンショットとして撮影するには `fullPage: true` を使用します。

```javascript
await page.screenshot({
  fullPage: true,
  type: 'png',
  path: 'output/screenshot.png'
});
```

### 3. 視認性を考慮したビューポート設定

小さい文字も読み取れる高画質で撮影するには、ビューポートを広く設定してからスクリーンショットを撮影します。

```javascript
// ビューポートを広げて高画質にする
await page.setViewportSize({ width: 1920, height: 1080 });

// ページ全体をキャプチャ
await page.screenshot({
  fullPage: true,
  type: 'png',
  path: 'output/hq-screenshot.png'
});
```

## 注意事項

- `fullPage: true` を指定すると、スクロール領域を含むページ全体がキャプチャされます
- ビューポート幅を `1920px` 程度にすると横の余白が少なくなり、コンテンツが読みやすくなります
- Cookie バナーや通知バナーが表示されている場合は、撮影前にスナップショットを取得して該当要素のrefを確認し、クリックして閉じてください

## サンプル出力

`example-fullpage-screenshot.png` は `fullPage: true` + ビューポート幅 1920px で撮影したサンプルです。
ページ全体（ヒーローセクション〜フッターまで）が1枚の縦長画像に収まっています。

参照: [サンプル画像](./example-fullpage-screenshot.png)