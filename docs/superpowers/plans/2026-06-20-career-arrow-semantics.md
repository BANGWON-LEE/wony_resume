# CareerSection Arrow Semantics Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Distinguish process progression (`⇒`) from numeric performance changes (`→`) in `CareerSection`.

**Architecture:** Keep the existing JSX structure and alter only user-visible arrow glyphs. A Node static assertion reads the real component source and verifies representative process and numeric-change phrases.

**Tech Stack:** React JSX, Node.js assertions, ESLint, Vite

---

### Task 1: Correct CareerSection arrow semantics

**Files:**
- Modify: `src/components/section/CareerSection.jsx:90-132`
- Test: one-off Node assertion against `src/components/section/CareerSection.jsx`

- [ ] **Step 1: Run the failing source assertion**

```bash
node --input-type=module -e "import fs from 'node:fs'; import assert from 'node:assert/strict'; const source=fs.readFileSync('src/components/section/CareerSection.jsx','utf8'); assert.match(source,/폴링 ⇒ MQTT/); assert.match(source,/컴포넌트 설계 ⇒ 사내/); assert.match(source,/인터뷰 ⇒ 기기상태 로그 기록 자동화 ⇒/); assert.match(source,/대시보드 구축 ⇒ 기기 상태/); assert.match(source,/인라인 스타일 미적용 이슈\. ⇒/); assert.match(source,/방식으로 전환\.\s*⇒ 이미지 스타일/); assert.match(source,/LCP 21\.3초→4\.0초/); assert.match(source,/업무시간 1시간 → 5분/);"
```

Expected: FAIL because the process phrases still contain `→`.

- [ ] **Step 2: Apply the minimal glyph changes**

In `src/components/section/CareerSection.jsx`, replace `→` with `⇒` only in these process phrases:

```text
폴링 ⇒ MQTT
컴포넌트 설계 ⇒ 사내 공통 차트 표준 제공
인터뷰 ⇒ 기기상태 로그 기록 자동화 ⇒ 업무시간 1시간 → 5분
대시보드 구축 ⇒ 기기 상태 모니터링 시스템 확립
인라인 스타일 미적용 이슈. ⇒ 렌더링 단계
방식으로 전환. ⇒ 이미지 스타일 정상 렌더링
```

Keep `21.3초→4.0초`, `2.6초→0.2초`, and `1시간 → 5분` unchanged because they represent numeric changes.

- [ ] **Step 3: Run the source assertion again**

Run the command from Step 1.

Expected: PASS with exit code 0.

- [ ] **Step 4: Run project verification**

```bash
yarn lint
yarn build
git diff --check
```

Expected: all commands exit with code 0.
