import {observable} from "mobx";

export default class Channel {

    @observable id: string = null
    @observable title: string = ``
    @observable desc: string = ``
    @observable coverUrl: string = ``

    @observable episodeIds: string[] = []

    constructor(props: Partial<Channel>) {
        Object.assign(this, props)
    }
}
