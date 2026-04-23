# Sync Pipeline

## Recommended Workflow

Run these from the `script-types` package root.

### Bootstrap Workflow

Use this when creating or rebuilding the augment corpus from existing legacy types.

1. Extract augment candidates from legacy types:

```powershell
npm run sync:extract-augments
```

2. Generate fresh types from HTML and clean redundant augment entries:

```powershell
npm run sync:html -- --prune-augments
```

3. Stop here in the normal case.

That is the standard bootstrap flow.

What each step does:

- `sync:extract-augments`
  - compares current legacy/generated `.d.ts` files against HTML-derived models
  - creates repo-tracked augment JSON files in `src/augments/daz`
- `sync:html -- --prune-augments`
  - generates `.d.ts` files from `HTML + augments`
  - then removes redundant augment members that are already inherited in the final generated type graph

### Optional Follow-Up Sync

This is optional, not required.

```powershell
npm run sync:html
```

Use it only if you want one more clean emit after prune changed the augment JSON files, or if you manually edited augments afterward.

In most cases, the bootstrap flow is enough:

1. `sync:extract-augments`
2. `sync:html -- --prune-augments`

### Normal Ongoing Workflow

After augments already exist, the normal flow is simpler:

```powershell
npm run sync:html
```

Or, if you also want redundant augment cleanup in the same run:

```powershell
npm run sync:html -- --prune-augments
```

### Recover Missed Undocumented Members

If the strict bootstrap missed a valid undocumented member, recover it after checking real consumer code.

Typical flow:

1. compile real consumer projects
2. inspect failures
3. use the error-recovery helper or edit augment JSON manually
4. run `sync:html` again

Helper command:

```powershell
npm run sync:recover-errors -- path\\to\\tsc-errors.txt
```

## What Gets Written

Transient generated HTML models:

- `.generated/html-models`

Repo-tracked augment files:

- `src/augments/daz`

Generated declarations:

- `src/types`

## Command Reference

### Extract Augments

Bootstrap-only command that compares legacy declarations against transient HTML models and creates augment JSON.

```powershell
npm run sync:extract-augments
```

Single type:

```powershell
npm run sync:extract-augments -- --type DzWidget
```

Behavior:

- parses current legacy/generated `.d.ts` files
- parses HTML docs and writes transient models to `.generated/html-models`
- compares legacy members against HTML members and HTML ancestry
- writes augment JSON files to `src/augments/daz`

### HTML Sync

```powershell
npm run sync:html
```

Single type:

```powershell
npm run sync:html -- --type DzWidget
```

Sync and prune redundant augment members afterward:

```powershell
npm run sync:html -- --prune-augments
```

Single type with prune:

```powershell
npm run sync:html -- --type DzAssetIOFilter --prune-augments
```

Parameters:

- `--type <ClassName|file>` limits the run to a single type
- `--prune-augments` runs the augment cleanup pass after emitting types

Behavior:

- parses HTML docs
- writes transient HTML JSON models to `.generated/html-models`
- loads augments from `src/augments/daz`
- emits final `.d.ts` files
- optionally prunes redundant augment members from augment JSON after generation

### Prune Augments

Standalone cleanup pass for augment JSON.

```powershell
npm run sync:prune-augments
```

Single type:

```powershell
npm run sync:prune-augments -- --type DzAssetIOFilter
```

Behavior:

- reads final generated `.d.ts` files from `src/types`
- uses transient HTML models from `.generated/html-models` as ancestry fallback when generated class files are missing
- builds ancestry from final generated declarations plus HTML fallback
- removes redundant augment members from `src/augments/daz`

### Recover Candidates from Error Logs

```powershell
npm run sync:recover-errors -- path\\to\\tsc-errors.txt
```

Behavior:

- reads error log text
- finds `Property 'X' does not exist on type 'Y'` patterns
- prints candidate augment references for manual review

## Notes

- Normal sync is HTML-first. The current generated `.d.ts` files are not used as live recovery input.
- `--prune-augments` defaults to off.
- The prune pass is post-generation on purpose, so it can use the final generated ancestry graph.
- Same-name undocumented overloads intentionally kept as augments may still require manual review.
