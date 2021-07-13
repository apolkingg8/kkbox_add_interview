import {observable} from "mobx";

export default class Channel {

    @observable id: string = null
    @observable coverUrl: string = ``
    @observable title: string = ``
    @observable desc: string = ``

    @observable episodeIds: string[] = []

    constructor(props: Partial<Channel>) {
        Object.assign(this, props)
    }
}
