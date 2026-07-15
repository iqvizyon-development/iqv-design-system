## Best practices

### Do

- Provide intervals in chronological order within each row.
- Use the same state label and color consistently across rows.
- Prefer semantic data visualization tokens for health and severity states.
- Provide `callOutAccessibilityData` when row, state, and time range do not fully describe an interval.
- Keep adjacent interval boundaries exact so the chart does not imply gaps or overlaps that are not present in the data.

### Don't

- Do not use a State Timeline for values that change continuously. Use a line or area chart instead.
- Do not rely on color alone. State labels remain available through legends, callouts, and accessible interval names.
- Do not create a separate state label for minor wording differences. Stable categories make comparisons and legend filtering reliable.
