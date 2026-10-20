export const PRODUCT_DEMO = {
  "slug": "failclosed",
  "title": "Watch failclosed in action",
  "disclosure": "Recorded native-parser output from failclosed v0.2.0, edited as a replay of synthetic reviewer replies. Parser boundary only: no reviewer, bot-thread resolution or merge ran. Locally synthesized Dan narration.",
  "transcript": "Failclosed checks reviewer output before a merge decision. Here I am exercising its released native parser with synthetic replies. A well formed clean review passes the shape check. Now the verdict is truncated. The parser still reports what it could read, but marks the schema invalid. A readable response is not automatically a usable review. A fix verdict with no file finding is invalid too. This demonstrates the parser boundary. The complete workflow also handles reviewer execution and bot threads; it was not run here. See the source for that integration.",
  "publishedVideo": null
} as const;
