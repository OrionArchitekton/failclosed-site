# failclosed demo provenance

Recorded native-parser output from failclosed v0.2.0, edited as a replay of synthetic reviewer replies. Parser boundary only: no reviewer, bot-thread resolution or merge ran. Locally synthesized Dan narration.

The media manifest binds the exact recording and delivered media hashes. Reuse this demonstration while the shown workflow, support boundary and setup/CTA remain accurate. Refresh on material changes; do not recreate narration for a patch version alone.

For a reused guide excerpt, `ranges_seconds` lists the source-time intervals in order. Source names identify the reviewed recording; operator-local paths and voice configuration are excluded. For a recorded replay, the script, visible page and captured local command evidence are included. Displayed results are readable excerpts, not a new product dashboard or independent performance benchmark.

Technical validation does not establish listening or creative acceptance. Dan reviews this exact clip before the site merge.

## Reproduce the parser evidence

Select the exact public source checkout explicitly; the site does not vendor the tool.

```sh
git clone --branch v0.2.0 https://github.com/OrionArchitekton/failclosed ../failclosed-v0.2.0
python demos/product/parser-demo.py --source-dir ../failclosed-v0.2.0
```

The script checks the selected module hash before importing it. It runs three synthetic parser cases only and makes no reviewer, GitHub or merge calls.
