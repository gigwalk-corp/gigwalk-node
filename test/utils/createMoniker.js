// @flow
import { choose } from 'moniker';

export default function createMoniker(): string {
    return `gnt-${choose()}`;
}
