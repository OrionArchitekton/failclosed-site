import json
from parse_codex_output import parse_native_review_stdout
cases={"clean":"Verdict: approve\nNo findings.","truncated":"Verdict:","contradictory":"Verdict: fix\nNo findings."}
for label,text in cases.items():
 result=parse_native_review_stdout(text)
 print(json.dumps({"case":label,"input":text,"parseable":result["parseable"],"schema_valid":result["schema_valid"],"parse_warnings":result["parse_warnings"]}))
 assert result["schema_valid"] == (label=="clean")
