/**
 * assists the client with locating the correct table position from the table layout by mapping to the correct location and index
 */

import { CardTableLayout } from "./card-table-layout.js";

export abstract class CardTableLayoutMapper {

    protected layout: CardTableLayout;
    protected numPlayers: number = 0;
    protected location: number = 0;

    public constructor(layout: CardTableLayout, numPlayers: number) {
        this.layout = layout;
        this.numPlayers = numPlayers;
    }



}