import assert from 'node:assert/strict';
import test from 'node:test';
import { suggestCommand } from '../src/lib/command-suggestions.ts';

const commands = ['help', 'about', 'links', 'contact', 'yotei', 'history', 'clear', 'theme', 'theme midnight', 'theme dawn'];

test('suggests common typing mistakes without executing a command', () => {
    for (const [typed, expected] of [
        ['contat', 'contact'],
        ['conntact', 'contact'],
        ['contsct', 'contact'],
        ['conatct', 'contact'],
        ['histroy', 'history'],
        ['theme midnigt', 'theme midnight'],
    ]) assert.equal(suggestCommand(typed, commands), expected, typed);
});

test('does not guess for unrelated, tiny, oversized, or ambiguous input', () => {
    for (const typed of ['hi', 'xyzxyz', 'a'.repeat(120), 'ping brun']) {
        assert.equal(suggestCommand(typed, commands), undefined, typed);
    }
    assert.equal(suggestCommand('can', ['cat', 'car']), undefined);
});
