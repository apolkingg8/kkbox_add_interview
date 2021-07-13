import {action, computed, observable} from "mobx";
import Channel from "@/klass/Channel";
import _ from "lodash";

class ChannelStore {

    @observable channels: Channel[] = []
    @observable activeId: string = null

    @computed get activeChannel(): Channel {
        return this.channels.find((channel)=> {
            return channel.id === this.activeId
        }) || new Channel({id: `dumb`})
    }

    @action upsert = (newChannel: Channel)=> {
        this.channels = _.unionBy(this.channels, [newChannel], (channel: Channel)=> {
            return channel.id
        })
    }

    constructor() {

    }
}

export default new ChannelStore()
