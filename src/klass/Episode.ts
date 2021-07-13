import {observable} from "mobx";

export default class Episode {

    @observable id: string = null
    @observable title: string = ``
    @observable desc: string = ``
    @observable coverUrl: string = ``

    @observable channelId: string = null

    constructor(props: Partial<Episode>) {
        Object.assign(this, props)
    }
}
