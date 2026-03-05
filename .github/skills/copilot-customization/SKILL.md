---
name: copilot-customization
description: Agent Skills（SKILL.md）、custom agents（.agent.md）、instructions（.instructions.md / .github/copilot-instructions.md / AGENTS.md）、prompts（.prompt.md）を新規作成・編集・内容の書き換えを行う際に使用するスキル。各ファイルの正しいフォーマット・配置場所・frontmatterの書き方・コンテンツの作成と変更を公式ドキュメントに基づいて案内する。
---

# Copilot カスタマイズファイル作成ガイド

このスキルは、GitHub Copilot のカスタマイズファイルを作成・編集する際に **必ず公式ドキュメントを参照** することを義務付けます。

## 必須ルール

以下の公式ドキュメントを**作業前に必ずフェッチして**、最新のフォーマット・配置場所・frontmatter 仕様を確認してから作業を開始してください。

| 作成するファイル | 公式ドキュメント URL |
|---|---|
| Agent Skills（`SKILL.md`） | https://code.visualstudio.com/docs/copilot/customization/agent-skills |
| Custom Agents（`*.agent.md`） | https://code.visualstudio.com/docs/copilot/customization/custom-agents |
| Instructions（`*.instructions.md` / `.github/copilot-instructions.md` / `AGENTS.md`） | https://code.visualstudio.com/docs/copilot/customization/custom-instructions |
| Prompts（`*.prompt.md`） | https://code.visualstudio.com/docs/copilot/customization/prompt-files |
| カスタマイズ全般 | https://code.visualstudio.com/docs/copilot/customization/overview |

---

## 作業手順

各ファイルを作成・編集する際は、以下の手順を**必ず守ること**。

1. 上記テーブルの該当 URL を **フェッチして内容を取得する**
2. 取得した公式ドキュメントに記載されているフォーマット・frontmatter フィールド・配置場所を確認する
3. 確認した最新仕様に従ってファイルを作成・編集する

### フェッチに失敗した場合

フェッチが失敗した場合（ネットワークエラー・タイムアウト・404 等）は、以下の対応を行うこと。

1. ユーザーに対して次の形式で**警告を表示する**:

   ```
   ⚠️ 警告: 公式ドキュメントの取得に失敗しました（URL: <該当URL>）。
   最新仕様を確認できていないため、情報が古い可能性があります。作業結果を必ず確認してください。
   ```
2. 警告を表示した上で、**既知の情報をもとに作業を継続する**
3. 作業完了後も、可能なタイミングで再度フェッチを試みることを推奨する

> **重要**: このファイルに仕様の詳細は記載しない。仕様は公式ドキュメントが唯一の正となる。
