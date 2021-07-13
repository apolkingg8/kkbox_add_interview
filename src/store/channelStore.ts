import {computed, observable} from "mobx";
import Channel from "@/klass/Channel";

class ChannelStore {

    @observable channels: Channel[] = []
    @observable activeId: string = null

    @computed get activeChannel(): Channel {
        return this.channels.find((channel)=> {
            return channel.id === this.activeId
        }) || new Channel({id: `dumb`})
    }

    constructor() {

    }
}

export default new ChannelStore()
