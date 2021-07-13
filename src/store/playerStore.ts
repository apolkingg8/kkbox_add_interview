import {observable} from "mobx";

export default class PlayerStore {

    @observable isPlaying: boolean = false
    @observable playingEpisodeId: string = null

    constructor() {

    }
}
