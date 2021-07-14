import EnumRoute from "@/enum/EnumRoute";
import {action, observable} from "mobx";

class RouteStore {

    @observable route: EnumRoute = EnumRoute.channelList

    @action toChannelList = ()=> {
        history.pushState({}, ``, EnumRoute.channelList)
        this.route = EnumRoute.channelList
    }

    @action toChannelDetail = ()=> {
        history.pushState({}, ``, EnumRoute.channelDetail)
        this.route = EnumRoute.channelDetail
    }

    @action toEpisodeDetail = ()=> {
        history.pushState({}, ``, EnumRoute.episodeDetail)
        this.route = EnumRoute.episodeDetail
    }
}

export default new RouteStore()
