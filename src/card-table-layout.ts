/**
 * contains the custom layout strategy, which represents all positions on the screen in a game of cards
 * current layout can be changed by simply seting a different layout strategy
 * 
 */

import { CardTablePosition, CardTablePositionCollection, CardTablePositionBuilder } from "@brendangooch/card-table-position";

export abstract class CardTableLayout {

    protected positions: CardTablePositionCollection = new CardTablePositionCollection();
    protected builder: CardTablePositionBuilder = new CardTablePositionBuilder();
    protected currentLocation: number = 0;

    public constructor() {
        this.loadPositions();
    }

    public location(location: number): CardTableLayout {
        this.currentLocation = location;
        return this;
    }

    public index(index: number): CardTablePosition | null {
        return this.positions.find(this.currentLocation, index);
    }

    protected addPosition(): void {
        this.positions.add(this.builder.build());
    }

    protected abstract loadPositions(): void;

}