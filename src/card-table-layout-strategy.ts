/**
 * base table layout - each game extends this class and implements load() method, which loads all positions on the table (screen)
 */

import { CardTablePositionBuilder, CardTablePositionCollection } from "@brendangooch/card-table-position";

export abstract class CardTableLayoutStrategy {

    protected positions: CardTablePositionCollection;
    protected builder: CardTablePositionBuilder = new CardTablePositionBuilder();

    public loadPositions(positions: CardTablePositionCollection): void {
        this.positions = positions;
        this.load();
    }

    protected addPosition(): void {
        this.positions.add(this.builder.build());
    }

    protected abstract load(): void;

}