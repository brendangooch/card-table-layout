/**
 * contains the custom layout strategy, which represents all positions on the screen in a game of cards
 * current layout can be changed by simply seting a different layout strategy
 * 
 */

import { CardTablePosition, CardTablePositionCollection } from "@brendangooch/card-table-position";
import { CardTableLayoutStrategy } from "./card-table-layout-strategy.js";

export class CardTableLayout {

    protected positions: CardTablePositionCollection = new CardTablePositionCollection();
    protected currentLocation: number = 0;

    public setLayout(layout: CardTableLayoutStrategy): CardTableLayout {
        layout.loadPositions(this.positions);
        return this;
    }

    public location(location: number): CardTableLayout {
        this.currentLocation = location;
        return this;
    }

    public index(index: number): CardTablePosition | null {
        return this.positions.find(this.currentLocation, index);
    }

}