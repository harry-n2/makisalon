# 引継書（OpenAI Codex 向け）— マキ引渡しセッション

> 本ファイルは **2026-05-26 のマキ向けLP共有運用マニュアル作成セッション** を、次の Codex エージェントが引き継ぐための引継書である。
> プロジェクト全体（mainブランチ作業）の引継書は `handoff/_handoff_codex.md` を参照。
> Claude Code 用: `_handoff_claude_code.md` / Antigravity 用: `_handoff_antigravity.md`

**最終更新**: 2026-05-26 / commit `33a36c6` (feature/maki-onboarding-docs)

---

## 0. 最初に必ず読むこと（絶対ルール）

1. **ユーザーグローバル**: `~/AGENTS.md`
   - 全AI開発エージェント共通・虚偽報告防止ルール
   - §「📐 絶対ルール: マンガ制作の標準読み順（全プロジェクト適用）」
2. **プロジェクトルート**: `C:\Users\naoya\myproject\エステサロン_改善版\AGENTS.md`
3. **プロジェクト引継書**: `handoff/_handoff_codex.md`（全体・別文脈）
4. 本ファイル全体（今回セッション）
5. `handoff/maki-onboarding/README.md` 〜 `05_完全移管手順.md`

**未確認情報を事実化しない**。テスト・ビルド・lint・型チェックを実行していない場合は、必ず「未実行」と書く。

---

## 1. このセッションの目的

ハリー管理の `harry-n2/makisalon` LP（https://makisalon.vercel.app）を、**ハリーとマキの2人で共有運用**できる体制に整え、引渡し/受取りマニュアルを md + PowerPoint で出力する。

### 確定方針
- **GitHub**: Collaborator招待でマキを Write 権限付与（無料・GitHub Free対応）
- **Vercel**: ハリー側 Hobby プランで片側自動デプロイ（Hobby規約遵守・チーム招待しない）
- **PR必須運用**: main直 push禁止・必ず PR → レビュー → マージ
- **将来移管**: マキへの GitHub Transfer Ownership + マキ Vercel 新規接続 + 独自ドメイン

### オーナー指示（厳守）
- 無料の git と Vercel を使用すること
- クラファン（CFPitch）機能は本ブランチに含めない
- マキの GitHub username は後日入手（マニュアル内は `<MAKI_USERNAME>` プレースホルダ）

---

## 2. プロジェクト状態（2026-05-26 時点）

| 項目 | 値 |
|---|---|
| リポジトリ | https://github.com/harry-n2/makisalon |
| 作業ディレクトリ | `C:\Users\naoya\myproject\エステサロン_改善版\maki-luxury-lp` |
| 現在ブランチ | `feature/maki-onboarding-docs` (push済み) |
| 本セッションのコミット | `33a36c6 feat(handoff): マキ向け共有運用マニュアル一式を追加` |
| ベース | `754c4d8` (main HEAD) |
| PR作成URL | https://github.com/harry-n2/makisalon/pull/new/feature/maki-onboarding-docs |
| WIP退避 | `stash@{0}: On main: WIP_before_maki_handoff_2026-05-26` (保険として残存) |
| 本番URL（Salon LP） | https://makisalon.vercel.app |
| 本番URL（Academy LP） | https://makisalon.vercel.app/academy |
| Vercel orgId | `team_LuEQriZDiRRWM5RqQAnPYQPL` (※Team契約可能性・未確認) |

### 技術スタック
- Vite 5.4 + React 18.3 + TypeScript ~5.6
- Tailwind CSS v4 / React Router v6 / framer-motion 12 / lucide-react / react-hook-form
- 生成ツール: pptxgenjs ^4.0.1（本セッションで初導入・**package.jsonには未反映**・WIPで package.json に追加されたまま）

---

## 3. 完了済み事項（証跡付き）

- ✅ `handoff/maki-onboarding/` 配下に md 6本 + PPTX 1本作成
- ✅ `scripts/build-handoff-pptx.mjs` 作成・`node scripts/build-handoff-pptx.mjs` 実行成功
  - 標準出力: `✅ Generated: handoff_manual.pptx`
  - 物理確認: 166,902 bytes（`ls -la` で確認）
- ✅ `.gitignore` 更新 (`*.err` 追加、`!scripts/build-handoff-pptx.mjs` 例外追加)
- ✅ commit `33a36c6` 作成 (9 files / 1690 insertions)
- ✅ ESLint pre-commit hook 通過（標準出力: `Static checks finished. codex-auto finished: post-generate`）
- ✅ `git push -u origin feature/maki-onboarding-docs` 成功
- ✅ WIP復元: `git stash pop` 実行 → `ls public/images/S__42803217_0.jpg` で物理確認

---

## 4. 残タスク

### 🔴 オーナー手作業
- [ ] PR作成
- [ ] PPTX目視確認
- [ ] PRマージ
- [ ] マキ username 入手 → Collaborator招待 → Branch protection rule 設定

### 🟢 AI継続可能
- [ ] `<MAKI_USERNAME>` プレースホルダ一括置換
- [ ] PPTX修正（`scripts/build-handoff-pptx.mjs` 編集 → 再実行）
- [ ] CFPitch 関連を別PRで追加（オーナー方針確認後）
- [ ] WIP（CF機能・新規画像13枚・manga素材v2.1/v2.2 等）の整理（オーナー方針確認後）

---

## 5. WIP状況

WIPは main 上に復元され、同時に `stash@{0}` にも保険残存。

| カテゴリ | 件数 | 説明 |
|---|---|---|
| CF機能ビルド依存 | 6 files | `src/components/cf/*`, `src/config/cf-pitch-content.ts`, `src/pages/CFPitch{,Short}.tsx` |
| 新規画像 | 13 files | `public/images/S__42803xxx_0.jpg`（マキ側にも存在） |
| バックアップ | 4 files | `*.bak.jpg`, `young photo.html` |
| メディア素材 | 数点 | `movie1-3.mp4` 等 |
| マンガ素材 v2.1/v2.2 | 約30 files | sections別 md, `salon manga_v1〜v2.1/` |
| 削除済みv1画像 | 14 files | `public/manga/salon/section*/page_*.png` |
| 修正済み tracked | 4 files | `src/App.tsx`(CFルート追加), `package.json`(pptxgenjs追加), manga prompt md |

---

## 6. 注意点・落とし穴

### 6-1. Branch protection 未設定
オーナーが Branch protection rule（main/PR必須）を設定するまで、main 直 push が物理的に可能。**Codex は main 直 push を絶対にしないこと**。

### 6-2. CFPitch のビルド依存関係
- `src/App.tsx` (WIP/M) は `CFPitch` / `CFPitchShort` を import
- `src/pages/CFPitch.tsx` `src/pages/CFPitchShort.tsx` は **WIP/untracked**
- `src/components/cf/{PitchDeck,PitchSlide,SlideContent}.tsx` も **WIP/untracked**
- `src/config/cf-pitch-content.ts` も **WIP/untracked**
- → App.tsx 単独 commit → push したら本番ビルド失敗
- WIPコミット時は **6ファイル一式** でセットコミットすること

### 6-3. .gitignore の特殊性
```
*.mjs
!vite.config.ts
!scripts/build-handoff-pptx.mjs      ← 本セッション追加
*.png
!public/**/*.png
*.cjs
!eslint.config.js
*.err                                 ← 本セッション追加
.vercel                               ← Vercel project.json 保護
```
- 新規 `.mjs` ファイルを追跡したい場合は明示的に例外指定が必要

### 6-4. WIP に pptxgenjs が package.json で追加されている
- `package.json` のWIPに `"pptxgenjs": "^4.0.1"` が含まれる（stash復元で main に存在）
- 本ブランチでは package.json は **触っていない**（マニュアル目的では不要なので）
- WIP整理時にこの依存を残すかは別判断

### 6-5. Vercel orgId `team_` プレフィックス
- Team契約 or Pro契約の可能性あり（未確認）
- もしTeamなら無料縛り不要 → Member招待での共有も可能
- マニュアルは Hobby 前提で書かれているため、Team確認時は別PR要

---

## 7. Codex 固有の注意

### 環境
- **OS**: Windows 11 (PowerShell 5.1)
- **Shell安全性**: 
  - PowerShell では `&&` `||` 使用不可 → `; if ($?)` で代用
  - 日本語パスは引用符 `"..."` で囲む
  - `2>&1` は native exe で誤動作する可能性あり
- **Node**: WIPで多数の node.exe 起動中（dev server 含む可能性）

### CLI実行
- `npm run dev` 実行時の `dev-server.err` はファイルロックされる場合がある（vite が握る）
- `git stash -u` で untracked 退避中、ロック中ファイルは退避失敗の警告が出ても処理続行する
- `git checkout -- .` での復旧は安全（stash退避済みなら）

### ESLint hook
- `npm run lint` が pre-commit hook で自動実行される
- `codex-auto finished: post-generate` メッセージは Codex CLI 連携の自動メンテのサイン

### 推奨実行順
```powershell
# 引継ぎ確認
cd "C:\Users\naoya\myproject\エステサロン_改善版\maki-luxury-lp"
git status
git branch --show-current
git stash list
git log --oneline -5

# 必要時のみ
npm install                          # WIPの package.json 反映時
npm run build                        # ビルド検証
npm run lint                         # lint確認
node scripts/build-handoff-pptx.mjs  # PPTX再生成
```

---

## 8. 既存引継書との関係

| ファイル | 文脈 |
|---|---|
| `handoff/_handoff_codex.md` | プロジェクト全体・既存（commit 09acfe5 時点） |
| `handoff/maki-onboarding/_handoff_codex.md` (本ファイル) | マキ引渡し専用（33a36c6 以降） |

既存 `handoff/_handoff_*.md` 3本は WIP として main 上に untracked 存在（feature ブランチには含めず）。

---

## 9. 連絡先・参照

- **オーナー**: ハリー（n-nishino@foredge.co.jp）
- **本コミット**: https://github.com/harry-n2/makisalon/commit/33a36c6
- **PR作成URL**: https://github.com/harry-n2/makisalon/pull/new/feature/maki-onboarding-docs

---

## 10. 2026-05-26 LP編集セッション完了サマリー（追記）

### 累積 main commit
```
e95880a docs(handoff): プレイブック追加・引継書追記
f1380c4 Merge feature/maki-onboarding-docs
d51d611 fix(about): スマホで見出しと画像間の余白を削減
cc161d3 feat(about): スマホで見出しを画像上に移動
8bbeb94 fix(company): スマホで Company-Footer 間の余白削減
65e1c40 feat(nav): Header GALLERY 追加・#gallery 遷移
c0b4607 fix(instagram-gallery): 4画像をrepoに追加・モバイル縦1列
7f2c522 Merge: Instagram/Gallery 4画像・電話番号直通
899aafd feat: Instagram/Gallery 4画像横一列・電話番号直通追加
```

### 完了した主な変更
1. Instagram/Gallery セクション 3→4画像差替（PC横一列 / モバイル縦1列）
2. 電話番号に直通モバイル（08041820727）追加 + 注意書き
3. Header に GALLERY ナビボタン追加（InstagramFeed に `id="gallery"`）
4. About スマホ専用見出しを画像の上に移動・余白削減
5. Company スマホ余白削減（地図 min-h レスポンシブ化）
6. SectionHeading に marginBottomClass props 追加（後方互換）
7. マキ向け運用マニュアル + AI引継書3本 + プレイブック追加

### 必読: 落とし穴集
**作業開始前に `handoff/maki-onboarding/06_LP編集プレイブック.md` を必ず読む**。
- #1 公開アセット git追跡漏れ → 本番404事故
- #2 min-h 固定でモバイル巨大空白
- #3 共通コンポーネント変更で他箇所影響

### Codex 固有の Tips
- 本セッションでは PowerShell 5.1 + Bash tool 併用で実装
- ESLint pre-commit hook で 2 errors / 1 warning 出続けるが commit は通る（既存CF WIP 由来）
- screenshot.mjs (puppeteer) でモバイル/PC 両方撮影可（modify済み）
- `.gitignore` `*.mjs` 例外指定が必要
