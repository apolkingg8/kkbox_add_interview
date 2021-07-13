import {observable} from "mobx";

export default class Episode {

    @observable id: string = null
    @observable title: string = ``
    @observable desc: string = ``
    @observable lastUpdate: number = 0

    @observable channelId: string = null

    constructor(props: Partial<Episode>) {
        Object.assign(this, props)
    }
}
