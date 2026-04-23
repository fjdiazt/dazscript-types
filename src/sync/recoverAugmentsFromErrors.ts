import * as fs from 'fs';

const MISSING_MEMBER_RE = /Property '([^']+)' does not exist on type '([^']+)'/g;

export function recoverAugmentsFromErrors(logPath: string): string {
    const text = fs.readFileSync(logPath, 'utf-8');
    const seen = new Set<string>();
    const lines = ['Reference Recovery Candidates'];

    for (const match of text.matchAll(MISSING_MEMBER_RE)) {
        const key = `${match[2]}::${match[1]}`;
        if (seen.has(key)) {
            continue;
        }

        seen.add(key);
        lines.push(`- ${match[2]}.${match[1]}`);
    }

    if (lines.length === 1) {
        lines.push('- none');
    }

    return lines.join('\n');
}

if (require.main === module) {
    const logPath = process.argv[2];
    if (!logPath) {
        console.error('Usage: ts-node src/sync/recoverAugmentsFromErrors.ts <tsc-log-file>');
        process.exit(1);
    }

    console.log(recoverAugmentsFromErrors(logPath));
}
