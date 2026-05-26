# 引継書（Google Antigravity 向け）— マキ引渡しセッション

> 本ファイルは **2026-05-26 のマキ向けLP共有運用マニュアル作成セッション** を、次の Antigravity エージェントが引き継ぐための引継書である。
> プロジェクト全体（mainブランチ作業）の引継書は `handoff/_handoff_antigravity.md` を参照。
> Claude Code 用: `_handoff_claude_code.md` / Codex 用: `_handoff_codex.md`

**最終更新**: 2026-05-26 / commit `33a36c6` (feature/maki-onboarding-docs)

---

## 0. 最初に必ず読むこと（絶対ルール）

1. **ユーザーグローバル**: `~/AGENTS.md`
   - 全AI開発エージェント共通・虚偽報告防止ルール
   - §「📐 絶対ルール: マンガ制作の標準読み順（全プロジェクト適用）」
2. **プロジェクトルート**: `C:\Users\naoya\myproject\エステサロン_改善版\AGENTS.md`
3. **Antigravity 専用上書き**: `~/GEMINI.md` / `C:\Users\naoya\myproject\エステサロン_改善版\GEMINI.md`
4. **プロジェクト引継書**: `handoff/_handoff_antigravity.md`（全体・別文脈）
5. 本ファイル全体（今回セッション）
6. `handoff/maki-onboarding/README.md` 〜 `05_完全移管手順.md`

---

## 1. Antigravity 環境推奨設定

| 設定 | 推奨値 | 理由 |
|---|---|---|
| Terminal Command Auto Execution | **Request Review** | 破壊的コマンド誤実行防止（git push, force操作） |
| Workspace 外ファイルアクセス | **原則無効** | 依頼外ファイル混入防止 |
| 高リスク操作（rm / git push / deploy / GitHub招待 / Vercel変更） | **必ずユーザー確認制** | 不可逆操作の事故回避 |
| Artifact Review | **必ず通す** | 成果物の証跡保持 |
| Browser / Terminal / Editor / Artifact 操作 | **完了報告に証跡を残す** | 虚偽報告防止 |

### Antigravity が本セッションで担える役割
- ✅ **Browser操作**: GitHub UI で Collaborator招待・Branch protection設定・PR作成
- ✅ **Browser操作**: Vercel Dashboard で deploy 状況確認・Preview URL検証
- ✅ **Terminal操作**: git commit/push/stash 操作（Request Review経由）
- ✅ **Editor操作**: マニュアルmd・PPTX生成スクリプトの修正
- ⚠️ **Artifact**: PPTX生成結果を Artifact Review で目視確認可能

---

## 2. このセッションの目的

ハリー管理の `harry-n2/makisalon` LP（https://makisalon.vercel.app）を、**ハリーとマキの2人で共有運用**できる体制に整え、引渡し/受取りマニュアルを md + PowerPoint で出力する。

### 確定方針
- **GitHub**: Collaborator招待でマキを Write 権限付与（無料・GitHub Free対応）
- **Vercel**: ハリー側 Hobby プランで片側自動デプロイ（Hobby規約遵守・チーム招待しない）
- **PR必須運用**: main直 push禁止・必ず PR → レビュー → マージ
- **将来移管**: マキへの GitHub Transfer Ownership + マキ Vercel 新規接続 + 独自ドメイン

### オーナー指示
- 無料の git と Vercel を使用すること
- クラファン（CFPitch）機能は本ブランチに含めない
- マキの GitHub username は後日入手（マニュアル内は `<MAKI_USERNAME>` プレースホルダ）

---

## 3. プロジェクト状態（2026-05-26 時点）

| 項目 | 値 |
|---|---|
| リポジトリ | https://github.com/harry-n2/makisalon |
| 作業ディレクトリ | `C:\Users\naoya\myproject\エステサロン_改善版\maki-luxury-lp` |
| 現在ブランチ | `feature/maki-onboarding-docs` (push済み) |
| 本セッションのコミット | `33a36c6 feat(handoff): マキ向け共有運用マニュアル一式を追加` |
| PR作成URL | https://github.com/harry-n2/makisalon/pull/new/feature/maki-onboarding-docs |
| WIP退避 | `stash@{0}` 保険残存 + main上に物理復元済み |
| 本番URL | https://makisalon.vercel.app/ / /academy |
| Vercel projectName | `beautysalon` (project ID: `prj_X2CCllx1iaunVk4aYmkfxxgiOJ7I`) |
| Vercel orgId | `team_LuEQriZDiRRWM5RqQAnPYQPL` (※Team契約可能性・未確認) |

---

## 4. 完了済み事項

- ✅ `handoff/maki-onboarding/` 配下に md 6本 + PPTX 1本作成
- ✅ `scripts/build-handoff-pptx.mjs` 作成・実行成功（166KB / 8スライド）
- ✅ `.gitignore` 更新 (`*.err`, `!scripts/build-handoff-pptx.mjs`)
- ✅ commit `33a36c6` (9 files / 1690 insertions) + ESLint hook通過
- ✅ `git push -u origin feature/maki-onboarding-docs` 成功
- ✅ WIP物理復元確認（`ls` で `CFPitch.tsx` 等存在確認）

---

## 5. 残タスク（Antigravity が担える部分）

### 🔴 オーナー意思決定後に Antigravity 実行可
- [ ] **Browser**: GitHub PR作成 → Reviewers指定 → セルフレビュー → マージ
- [ ] **Browser**: GitHub Collaborator招待ダイアログ操作（マキ username 入手後）
- [ ] **Browser**: GitHub Branch protection rule 設定（Settings → Branches → Add rule）
- [ ] **Browser**: Vercel Dashboard で Hobby/Team プラン確認（右上アカウント名横のバッジ）
- [ ] **Browser**: Vercel Preview Deployment 設定確認
- [ ] **Artifact**: PPTX目視確認（`handoff/maki-onboarding/handoff_manual.pptx`）

### 🟢 引き続き AI継続可能
- [ ] `<MAKI_USERNAME>` プレースホルダ一括置換
- [ ] マニュアル文言調整
- [ ] PPTX レイアウト修正 → `scripts/build-handoff-pptx.mjs` 編集 → Terminal で再実行

---

## 6. WIP状況（main上に存在）

| カテゴリ | 件数 | 説明 |
|---|---|---|
| CF機能依存 | 6 files | App.tsx + CFPitch関連（要セット commit） |
| 新規画像 | 13 files | `S__42803xxx_0.jpg`（マキ側にも存在） |
| バックアップ | 4 files | `*.bak.jpg`, `young photo.html` |
| メディア素材 | 数点 | `movie1-3.mp4` 等 |
| マンガ素材 v2.1/v2.2 | 約30 files | sections別 md |
| 削除済みv1画像 | 14 files | `public/manga/salon/section*/page_*.png` |
| tracked修正 | 4 files | `src/App.tsx`, `package.json`(pptxgenjs追加), manga prompt md |
| ログ | 1 file | `dev-server.err` (gitignored) |

**WIP は本ブランチに含めない方針** だったため、main 上に放置している。

---

## 7. 注意点・落とし穴

### 7-1. Browser 操作の証跡保持
Antigravity で GitHub / Vercel UI を操作した場合、**スクショ + 操作手順 + 結果** を完了報告に残すこと。
- Collaborator 招待: ダイアログのスクショ + 招待リンク先確認
- Branch protection: 設定後の Rules 一覧画面スクショ
- PRマージ: マージ後のコミット履歴スクショ

### 7-2. Terminal Auto Execution は Request Review に固定
本セッションで使用される高リスクコマンド:
- `git push origin <branch>` ← マージ後のWIP push等
- `git stash drop` ← stash削除（破壊的）
- `npm install <package>` ← パッケージ追加
- `node scripts/*.mjs` ← スクリプト実行

これらは **必ず Request Review** にすること。

### 7-3. Workspace 外アクセスは無効
本セッションで参照すべきは:
- `C:\Users\naoya\myproject\エステサロン_改善版\maki-luxury-lp\` 配下
- `~/.claude/CLAUDE.md` / `~/AGENTS.md` / `~/GEMINI.md`（ルール参照のみ）

それ以外（特にハリーの他プロジェクト `~/myproject/miyabi/` 等）は触らない。

### 7-4. Branch protection 設定タイミング
- 本セッション完了時点では未設定
- オーナーが `01_引き渡し手順_ハリー側.md` Step 2 を Browser で実行する想定
- Antigravity が代行する場合は **Request Review** で明示確認

### 7-5. Vercel projectName と makisalon.vercel.app の関係
- Vercel 上のプロジェクト名: `beautysalon`（`makisalon` ではない）
- 本番URLは `makisalon.vercel.app`（カスタムサブドメイン or プロジェクトデフォルト名）
- Vercel Dashboard で探す時は **`beautysalon`** で検索

---

## 8. Antigravity 固有の推奨ワークフロー

### マキ招待までの一気通貫
```
Step 1 [Browser]   GitHub PRページ作成 → セルフレビュー（Request Review）
Step 2 [Browser]   PRマージ（main マージ・Request Review）
Step 3 [Browser]   GitHub Collaborator招待ダイアログ → username 入力（Request Review）
Step 4 [Browser]   Branch protection rule 設定（Request Review）
Step 5 [Browser]   Vercel Dashboard で deploy 成功確認
Step 6 [Artifact]  PPTX目視 → 修正不要なら完了
Step 7 [Editor]    <MAKI_USERNAME> プレースホルダ一括置換（grep -rn → Edit）
Step 8 [Terminal]  git add → commit → push（Request Review）
```

### PPTX修正ワークフロー
```
Step 1 [Editor]    scripts/build-handoff-pptx.mjs を Read → 該当部分 Edit
Step 2 [Terminal]  node scripts/build-handoff-pptx.mjs (Request Review)
Step 3 [Artifact]  生成された handoff_manual.pptx を Artifact Review で確認
Step 4 [Terminal]  git add → commit → push
```

---

## 9. 既存引継書との関係

| ファイル | 文脈 |
|---|---|
| `handoff/_handoff_antigravity.md` | プロジェクト全体・既存（commit 09acfe5 時点） |
| `handoff/maki-onboarding/_handoff_antigravity.md` (本ファイル) | マキ引渡し専用（33a36c6 以降） |

---

## 10. 連絡先・参照

- **オーナー**: ハリー（n-nishino@foredge.co.jp）
- **本コミット**: https://github.com/harry-n2/makisalon/commit/33a36c6
- **PR作成URL**: https://github.com/harry-n2/makisalon/pull/new/feature/maki-onboarding-docs
- **本番URL**: https://makisalon.vercel.app/
- **Vercel Dashboard**: https://vercel.com/dashboard → `beautysalon` プロジェクト

---

## 11. 2026-05-26 LP編集セッション完了サマリー（追記）

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

### Antigravity 固有の Tips
- Browser操作で実本番（https://makisalon.vercel.app/）の動作確認を Request Review 経由で実施推奨
- Vercel Dashboard でデプロイ Ready 確認も Browser 経由で可
- ローカル dev server (npm run dev) は Terminal で起動・Artifact Review でスクショ確認
