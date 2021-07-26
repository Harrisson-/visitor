import got from 'got';
import { JSDOM  } from 'jsdom';

// must be put inside a config later
const LOUVRE_RECHERCHE = '';
const PAGE_NUMBER = '20';

async function search_item_ids() {
    const query_item_ids = '.card--search a';
    const ids = new Set();
    
    const response  = await got(LOUVRE_RECHERCHE);
    const { document } = new JSDOM(response.body).window;

    const cards = document.querySelectorAll(query_item_ids);
    cards.forEach((card) => {
        if ( card.href ) {
            ids.add(card.href.match('([^\/]+)\/?$')[1]);
        }
    });
    console.log('id_list', ids);
}

search_item_ids();