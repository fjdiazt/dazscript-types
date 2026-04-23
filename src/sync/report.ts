/**
 * Reporting utilities for the sync pipeline.
 *
 * Keep this module presentation-oriented: it should summarize work that the
 * pipeline already decided, not contain sync logic itself.
 */
export interface SyncSkip {
    file: string;
    reason: string;
}

export interface SyncError {
    file: string;
    error: string;
}

export interface SyncSummary {
    scannedFiles: number;
    eligibleFiles: number;
    rebuiltFiles: number;
    unchangedFiles: number;
    skippedFiles: SyncSkip[];
    errors: SyncError[];
    appliedAugmentMembers: number;
}

export function createSummary(): SyncSummary {
    return {
        scannedFiles: 0,
        eligibleFiles: 0,
        rebuiltFiles: 0,
        unchangedFiles: 0,
        skippedFiles: [],
        errors: [],
        appliedAugmentMembers: 0,
    };
}

export function formatSummary(summary: SyncSummary): string {
    const lines = [
        'HTML Sync Summary',
        `- Files scanned: ${summary.scannedFiles}`,
        `- Eligible files: ${summary.eligibleFiles}`,
        `- Rebuilt files: ${summary.rebuiltFiles}`,
        `- Unchanged files: ${summary.unchangedFiles}`,
        `- Skipped files: ${summary.skippedFiles.length}`,
        `- Errors: ${summary.errors.length}`,
        `- Applied augment members: ${summary.appliedAugmentMembers}`,
    ];

    if (summary.skippedFiles.length > 0) {
        lines.push('');
        lines.push('Skipped');
        for (const skip of summary.skippedFiles) {
            lines.push(`- ${skip.file}: ${skip.reason}`);
        }
    }

    if (summary.errors.length > 0) {
        lines.push('');
        lines.push('Errors');
        for (const error of summary.errors) {
            lines.push(`- ${error.file}: ${error.error}`);
        }
    }

    return lines.join('\n');
}
