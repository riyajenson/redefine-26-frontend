import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.TEST_BASE_URL ?? "http://localhost:3000";

test("timeline uses a compact edge-to-edge header", async () => {
  const response = await fetch(`${baseUrl}/timeline`);
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /data-timeline-header="compact-edge"/);
  assert.match(html, /data-timeline-nav-size="uniform"/);
});
