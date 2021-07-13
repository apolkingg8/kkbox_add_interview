import {computed, observable} from "mobx";
import Episode from "@/klass/Episode";

class EpisodeStore {

    @observable episodes: Episode[] = []
    @observable activeId: string = null

    @computed get activeEpisode(): Episode {
        return this.episodes.find((episodes)=> {
            return episodes.id === this.activeId
        }) || new Episode({id: `dumb`})
    }

    constructor() {

    }
}

export default new EpisodeStore()
