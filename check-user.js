# .github/workflows/check-protected-user.yml
name: Validar autor del commit

on: [push, pull_request]

jobs:
  validate-user:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout código
        uses: actions/checkout@v3

      - name: Validar autor del commit
        run: node check-user.js
