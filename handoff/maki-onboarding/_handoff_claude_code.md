# 引継書（Claude Code 向け）— マキ引渡しセッション

> 本ファイルは **2026-05-26 のマキ向けLP共有運用マニュアル作成セッション** を、次の Claude Code エージェントが引き継ぐための引継書である。
> プロジェクト全体（mainブランチ作業）の引継書は `handoff/_handoff_claude_code.md` を参照。
> Codex 用: `_handoff_codex.md` / Antigravity 用: `_handoff_antigravity.md`

**最終更新**: 2026-05-26 / commit `33a36c6` (feature/maki-onboarding-docs)
**作業者**: Claude Opus 4.7 (1M context)

---

## 0. 最初に必ず読むこと（絶対ルール）

優先順位:

1. **ユーザーグローバル**: `~/.claude/CLAUDE.md`
   - 全AI開発エージェント共通・虚偽報告防止ルール
   - §「📐 絶対ルール: マンガ制作の標準読み順（全プロジェクト適用）」
   - §Part 1-10 マーケ部主導プロセス・miyabi 中心化・引継書ルール
2. **プロジェクトルート**: `C:\Users\naoya\myproject\エステサロン_改善版\CLAUDE.md`
3. **プロジェクト引継書**: `handoff/_handoff_claude_code.md`（全体・別文脈）
4. 本ファイル全体（今回セッション）
5. `handoff/maki-onboarding/README.md` 〜 `05_完全移管手順.md`

CLAUDE.md §18 に従い **作業前確認テンプレ** から開始すること。

---

## 1. このセッションの目的

ハリーが管理する `harry-n2/makisalon` LP（https://makisalon.vercel.app）を、**ハリーとマキの2人で共有運用**できる体制に整え、引渡し/受取りマニュアルを md + PowerPoint で出力する。

### 確定方針
- **GitHub**: Collaborator招待でマキを Write 権限付与（無料・GitHub Free対応）
- **Vercel**: ハリー側 Hobby プランで片側自動デプロイ（Hobby規約遵守・チーム招待しない）
- **PR必須運用**: main直 push禁止・必ず PR → レビュー → マージ
- **将来移管**: マキへの GitHub Transfer Ownership + マキ Vercel 新規接続 + 独自ドメイン

### 制約（オーナー指示）
- 無料の git と Vercel を使用すること
- クラファン（CFPitch）機能は本ブランチに含めない
- マキの GitHub username は後日入手（マニュアル内は `<MAKI_USERNAME>` プレースホルダ）

---

## 2. プロジェクト状態（2026-05-26 時点）

| 項目 | 値 |
|---|---|
| 現在ブランチ | `feature/maki-onboarding-docs` (push済み) |
| 本セッションのコミット | `33a36c6 feat(handoff): マキ向け共有運用マニュアル一式を追加` |
| ベースコミット (main) | `754c4d8 Update salon section images and service links` |
| リモートPR作成URL | https://github.com/harry-n2/makisalon/pull/new/feature/maki-onboarding-docs |
| WIP退避 | `git stash list` → `stash@{0}: On main: WIP_before_maki_handoff_2026-05-26` |
| WIP復元状況 | main で `git stash pop` 実行済み・物理ファイル復元確認済み |

---

## 3. 完了済み事項

- ✅ `handoff/maki-onboarding/` 配下に md 6本 + PPTX 1本作成
- ✅ `scripts/build-handoff-pptx.mjs` 作成・実行成功 (166KB / 8スライド)
- ✅ `.gitignore` 更新 (`*.err` 追加、`!scripts/build-handoff-pptx.mjs` 例外追加)
- ✅ feature ブランチで commit `33a36c6` 作成 (9 files / 1690 insertions)
- ✅ ESLint pre-commit hook 通過
- ✅ `git push -u origin feature/maki-onboarding-docs` 成功

### 作成ファイル一覧
```
handoff/maki-onboarding/
  README.md                          (目次・全体マップ)
  01_引き渡し手順_ハリー側.md         (招待・branch protection)
  02_受け取り手順_マキ側.md           (Node/Git未経験者向け)
  03_日々の更新フロー_マキ側.md       (PR必須運用)
  04_緊急時マニュアル.md              (Rollback/Discard/再Clone)
  05_完全移管手順.md                  (将来のドメイン移管)
  handoff_manual.pptx                (8スライド要約)
scripts/build-handoff-pptx.mjs       (pptxgenjs生成スクリプト)
.gitignore                           (修正)
```

---

## 4. 残タスク（オーナー手作業 + 次AI対応可能）

### 🔴 オーナー手作業（即やる）
- [ ] **PR作成** → https://github.com/harry-n2/makisalon/pull/new/feature/maki-onboarding-docs
- [ ] **PPTX目視確認** → `handoff/maki-onboarding/handoff_manual.pptx` をPowerPointで開く
- [ ] PR セルフレビュー → main マージ

### 🟡 オーナー手作業（マキ招待時）
- [ ] マキの GitHub username 入手
- [ ] Collaborator招待実行（`01_引き渡し手順_ハリー側.md` Step 1）
- [ ] Branch protection rule 設定（main・PR必須・1 approval）
- [ ] マキへ初回連絡（`01_引き渡し手順_ハリー側.md` Step 4テンプレ）

### 🟢 AI継続可能タスク
- [ ] マニュアル内 `<MAKI_USERNAME>` プレースホルダの一括置換（usernameが判明したら）
- [ ] PPTX修正（オーナーが見た目を指示したら `scripts/build-handoff-pptx.mjs` 編集→再実行）
- [ ] CF（クラファン）関連ファイル群を別PRで追加（WIPに残存・要オーナー方針確認）
- [ ] 新規画像13枚 `public/images/S__428xxxx_0.jpg` の取扱い決定（マキ側にも存在するとのこと）

---

## 5. WIP状況（main上に存在・stashにも保険）

WIPは現在 main 上に復元され、同時に `stash@{0}` にも保険として残っている。WIP内容:

| カテゴリ | 件数 | 説明 |
|---|---|---|
| ビルド依存（CF機能） | 6 files | `src/components/cf/*`, `src/config/cf-pitch-content.ts`, `src/pages/CFPitch{,Short}.tsx` |
| 新規画像 | 13 files | `public/images/S__42803xxx_0.jpg`（マキ側にも存在・本ブランチには含めない） |
| バックアップ | 4 files | `*.bak.jpg`, `young photo.html`, `young photo_files/` |
| メディア素材 | 数点 | `movie1-3.mp4`, `menu1.jpg`, `salon_foot.png` 等 |
| マンガ素材 v2.1/v2.2 | 約30 files | sections別 md, `salon manga_v1〜v2.1/` |
| 削除済みv1画像 | 14 files | `public/manga/salon/section1-5/page_*.png`（v2置換後の残骸） |
| 修正ファイル | 4 files | `src/App.tsx`, `package.json`, `package-lock.json`, manga prompt系 md |
| ログ | 1 file | `dev-server.err` (gitignoreで除外設定追加済み) |

**今回ブランチには触らない方針** だったため、上記は main 上にWIPとして残置している。

---

## 6. 注意点・落とし穴

### 6-1. Branch protection rule 未設定
- main 直 push 禁止設定は **まだ入っていない**
- オーナーが `01_引き渡し手順_ハリー側.md` Step 2 で設定するまでは、main 直 push が可能
- AIが誤って main へ直 push しないこと

### 6-2. stash@{0} の扱い
- 復元成功時 git が「The stash entry is kept」メッセージを出した
- これは untracked 一部の挙動による標準動作（実害なし）
- 物理ファイル復元は確認済み（`ls` 検証）
- 不要になったら `git stash drop stash@{0}` で削除可（任意・オーナー判断）

### 6-3. .gitignore に `*.mjs` 除外あり
- scripts/ 配下の .mjs は **明示的に例外指定**しないと git追跡されない
- 今回は `!scripts/build-handoff-pptx.mjs` で1ファイルのみ追跡対象に
- 既存 `scripts/generate-cf-*.mjs` 2本は引き続き untracked（CF機能ごと別PR想定）

### 6-4. Vercel orgId が `team_` プレフィックス
- `.vercel/project.json` で確認: `orgId: team_LuEQriZDiRRWM5RqQAnPYQPL`
- ハリーが Team/Pro 契約の可能性あり（要オーナー確認）
- 仮にTeam契約なら、無料縛りを解除して Vercel 側もマキを Member 招待できる
- 現状マニュアルは Hobby 前提で書かれているため、Team判明時は別PRで補足記載要

### 6-5. CFPitch機能の取扱い
- `src/App.tsx` に CFPitch ルートが既に追加されている（WIP）
- `src/pages/CFPitch.tsx` 等の依存ファイル6本は **未コミット**
- もしWIPを別ブランチで commit する場合、App.tsx と一緒にコミットしないとビルド失敗
- 本セッションでは CFPitch 関連は触っていない（オーナー指示「クラファン入れない」）

### 6-6. マニュアル内のプレースホルダ
- `<MAKI_USERNAME>` がマニュアル全体に散在
- マキの username 判明時に sed や Grep+Edit で一括置換が必要

---

## 7. 既存引継書との関係

| ファイル | 文脈 | 最終コミット |
|---|---|---|
| `handoff/_handoff_claude_code.md` | プロジェクト全体・既存（Codex/Antigravityと並列） | `09acfe5`時点 |
| `handoff/_handoff_codex.md` | 同上 | 同上 |
| `handoff/_handoff_antigravity.md` | 同上 | 同上 |
| `handoff/maki-onboarding/_handoff_claude_code.md` (本ファイル) | **マキ引渡しセッション専用** | `33a36c6` 以降 |
| `handoff/maki-onboarding/_handoff_codex.md` | 同上・Codex向け | 同上 |
| `handoff/maki-onboarding/_handoff_antigravity.md` | 同上・Antigravity向け | 同上 |

既存 `handoff/_handoff_*.md` は **stash退避→pop復元** されたため、main上に untracked として存在する。featureブランチ（本コミット）には含まれていない。

---

## 8. このセッションを継承する次AIへの指示

1. **作業前確認**: `~/.claude/CLAUDE.md` §18 のテンプレで開始
2. **WIPに触らない**: WIP の commit/整理はオーナー指示があるまで保留
3. **PR がまだなら作成**: GitHub URL から作成 + Reviewers に harry-n2
4. **マニュアル修正依頼があれば**: 該当 md を Read → Edit → 必要なら再commit & push
5. **PPTX再生成**: `node scripts/build-handoff-pptx.mjs` で再生成可
6. **Branch protection 設定後**: main 直 push は完全に弾かれる前提で動く
7. **マキ username 判明後**: `<MAKI_USERNAME>` の置換を grep -rn で位置確認後 Edit
8. **完了報告**: CLAUDE.md §16 フォーマット（確認済み/未確認/未実行を分離）

---

## 9. Claude Code 固有の注意

- **Bash ツール**: Windows PowerShell が標準。日本語パス・空白パスは引用符で囲む（例: `"public/manga/salon/00_全体構成マップ.md"`）
- **Grep / Glob ツール**: 大規模ファイル探索が ripgrep timeout する場合あり → パスを絞り込む
- **MCP**: line-harness / x-harness / ig-harness / lark-* は本セッション無関係。マキ引渡しでは未使用
- **Skill `verify`**: PRマージ前にローカルで `npm run build` 実行する場面で活用可能
- **Skill `code-review`**: PR内容をAIレビューする場合に使用可（ただしオーナー指示優先）

---

## 10. 連絡先・参照

- **オーナー**: ハリー（n-nishino@foredge.co.jp）
- **本番URL**: https://makisalon.vercel.app/ / https://makisalon.vercel.app/academy
- **Repo**: https://github.com/harry-n2/makisalon
- **本コミット**: https://github.com/harry-n2/makisalon/commit/33a36c6

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

### 現在のブランチ・WIP状況
- **main HEAD**: e95880a (最新push済み・feature/maki-onboarding-docs マージ済み)
- **WIP**: main 上に100件以上残置（CF/manga v2.1/新規画像13枚等・触らない）
