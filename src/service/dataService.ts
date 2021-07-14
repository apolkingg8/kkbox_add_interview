import * as xmlParser from "fast-xml-parser";
import Channel from "@/klass/Channel";
import channelStore from "@/store/channelStore";
import Episode from "@/klass/Episode";
import _ from "lodash";
import episodeStore from "@/store/episodeStore";

class DataService {

    fillFromChannelRss = async (channelId: string)=> {
        let fetched = await fetch(`/sample.xml`)
        let rawFeed = await fetched.text()
        let parsedFeed = xmlParser.parse(rawFeed)

        let newChannel = new Channel({
            id: parsedFeed['rss']['channel']['soundon:id'],
            title: parsedFeed['rss']['channel']['title'],
            desc: parsedFeed['rss']['channel']['description'],
            lastUpdate: parsedFeed['rss']['channel']['soundon:updatedAt'],
            coverUrl: parsedFeed['rss']['channel']['image']['url'],
        })

        let items = parsedFeed['rss']['channel']['item']

        _.forEach(items, (item, i)=> {
            let newEpisode = new Episode({
                id: item['soundon:id'],
                title: item['title'],
                desc: item['description'],
                lastUpdate: item['soundon:updatedAt'],
                channelId: newChannel.id,
            })

            newChannel.episodeIds.push(newEpisode.id)
            episodeStore.upsert(newEpisode)
        })

        channelStore.upsert(newChannel)
    }
}

export default new DataService()
