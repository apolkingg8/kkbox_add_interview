import {observable} from "mobx";

export default class Episode {

    @observable id: string = null
    @observable title: string = ``
    @observable desc: string = ``
    @observable coverUrl: string = ``

    constructor(props: Partial<Episode>) {
        Object.assign(this, props)
    }
}
