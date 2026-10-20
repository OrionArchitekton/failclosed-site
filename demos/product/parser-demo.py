import json
import argparse, hashlib, importlib.util
from pathlib import Path
parser = argparse.ArgumentParser(description="Replay synthetic replies through failclosed v0.2.0's native parser")
parser.add_argument('--source-dir', type=Path, required=True, help='Explicit checkout of public failclosed v0.2.0')
args = parser.parse_args()
module_path = args.source_dir / 'parse_codex_output.py'
if not module_path.is_file(): parser.error('source-dir must contain parse_codex_output.py from v0.2.0')
if hashlib.sha256(module_path.read_bytes()).hexdigest() != 'c1d71aebcdb344683a18b1a499cb9d1a837567c6bcde29bc7927209880737832':
 parser.error('selected parser differs from the recorded v0.2.0 source')
spec = importlib.util.spec_from_file_location('released_failclosed_parser', module_path)
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
parse_native_review_stdout = module.parse_native_review_stdout
cases={"clean":"Verdict: approve\nNo findings.","truncated":"Verdict:","contradictory":"Verdict: fix\nNo findings."}
for label,text in cases.items():
 result=parse_native_review_stdout(text)
 print(json.dumps({"case":label,"input":text,"parseable":result["parseable"],"schema_valid":result["schema_valid"],"parse_warnings":result["parse_warnings"]}))
 assert result["schema_valid"] == (label=="clean")
