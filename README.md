# release-bot-testing

A sandbox for Release Bot (albert-io/support-bot, `bots/release`). It mimics
how albert-io/nexus releases, so the bot can create, promote and hotfix
releases here without touching nexus.

- `.github/workflows/release.yml`: nexus's release workflow with the same
  triggers, every step an echo. A prerelease "deploys" to stage, a full
  release to prod. Set the repo variable `FAIL_DEPLOY=true` to make deploys
  fail.
- Tag rulesets copied from nexus: only the Admin role (standing in for
  nexus's release team) may create tags; no tag may be moved or deleted.
- History is squash-merged PRs titled like nexus's ("feat(x): ... (#n)").
  `mandark/` is the backend, `marketplace/` the frontend, and
  `mandark/priv/repo/migrations/` holds migrations.
