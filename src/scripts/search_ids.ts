import got from 'got';
import { JSDOM } from 'jsdom';
import config from '../config/config';

async function search_item_ids() {
    const ids = new Set();
    
    const response  = await got(config.website[0].search_page_url);
    const { document } = new JSDOM(response.body, {
        contentType: "text/html",
    }).window;

    const cards = document.querySelectorAll(config.website[0].search_page_query.artwork_Id);
    cards.forEach((card: any) => {
        if ( card.href ) {
            ids.add(card.href.match('([^\/]+)\/?$')[1]);
        }
    });
    console.log('id_list', ids);
}

search_item_ids();