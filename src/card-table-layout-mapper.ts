/**
 * assists the client with locating the correct table position from the table layout by mapping to the correct location and index
 */

import { CardTableLayout } from "./card-table-layout.js";
import { CardGameSettings } from "@brendangooch/card-game-settings";

export abstract class CardTableLayoutMapper {

    protected layout: CardTableLayout;
    protected numPlayers: number = 0;
    protected location: number = 0;

    public constructor(layout: CardTableLayout) {
        this.layout = layout;
    }

    public abstract init(config: CardGameSettings): void;
    public abstract load(json: string): void;
    public abstract save(): string;

}