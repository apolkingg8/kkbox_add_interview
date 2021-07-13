import {action, computed, observable} from "mobx";
import Episode from "@/klass/Episode";
import _ from "lodash";

class EpisodeStore {

    @observable episodes: Episode[] = []
    @observable activeId: string = null

    @computed get activeEpisode(): Episode {
        return this.episodes.find((episodes)=> {
            return episodes.id === this.activeId
        }) || new Episode({id: `dumb`})
    }

    @action upsert = (newEpisode: Episode)=> {
        this.episodes = _.unionBy(this.episodes, [newEpisode], (episode: Episode)=> {
            return episode.id
        })
    }

    constructor() {

    }
}

export default new EpisodeStore()
