# failclosed product demo

Recorded local output from v0.2.0. Synthetic data, edited replay; no external provider calls.

### SHOT input
- target: terminal
- url: index.html?scene=input
- narration: Failclosed checks reviewer output before a merge decision. Here I am exercising its released native parser with synthetic replies. A well formed clean review passes the shape check.
- action: goto url="index.html?scene=input"
- action: wait ms=400

### SHOT truncated
- target: terminal
- url: index.html?scene=truncated
- narration: Now the verdict is truncated. The parser still reports what it could read, but marks the schema invalid. A readable response is not automatically a usable review.
- action: goto url="index.html?scene=truncated"
- action: wait ms=400

### SHOT conflict
- target: terminal
- url: index.html?scene=conflict
- narration: A fix verdict with no file finding is invalid too. This demonstrates the parser boundary. The complete workflow also handles reviewer execution and bot threads; it was not run here. See the source for that integration.
- action: goto url="index.html?scene=conflict"
- action: wait ms=400
