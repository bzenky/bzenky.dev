export function suggestCommand(value: string, commands: readonly string[]): string | undefined {
    if (value.length < 3 || value.length > 40) return;
    const limit = value.length <= 4 ? 1 : 2;
    let closest: string | undefined;
    let best = limit + 1;
    let tied = false;

    for (const command of commands) {
        if (Math.abs(command.length - value.length) > limit) continue;
        let previous = Array.from({ length: command.length + 1 }, (_, index) => index);
        for (let row = 1; row <= value.length; row++) {
            const current = [row];
            for (let column = 1; column <= command.length; column++) {
                current[column] = Math.min(
                    (current[column - 1] ?? 0) + 1,
                    (previous[column] ?? 0) + 1,
                    (previous[column - 1] ?? 0) + (value[row - 1] === command[column - 1] ? 0 : 1),
                );
            }
            previous = current;
        }
        const distance = previous[command.length] ?? best;
        if (distance < best) {
            closest = command;
            best = distance;
            tied = false;
        } else if (distance === best) {
            tied = true;
        }
    }
    return best <= limit && !tied ? closest : undefined;
}
