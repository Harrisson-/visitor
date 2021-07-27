import got from 'got';
import { JSDOM } from 'jsdom';
import config from '../config/config';

const DATA_TITLES = {
    INVENTORY_NUMBER: 'Numéro d’inventaire',
    COLLECTION: 'Collection',
    DESCRIPTION: {
        TITLE: 'Dénomination / Titre',
        DESCRIPTION: 'Description / Décor',
    },
    MATERIAL_CARACTERISTIC: {
        DIMENSIONS: 'Dimensions',
        TECHNIQUE: 'Matière et technique',
    },
    PLACE_DATE: {
        BUILD_DATE: 'Date de création / fabrication',
    },
    HISTORIC_DATA: {
        COMANDITARY: 'Détenteur précédent / commanditaire / dédicataire',
        ACQUISITION_MODE: 'Mode d’acquisition',
        ACQUISITION_DATE: 'Date d’acquisition',
    },
    LOCALISATION: {
        ACTUAL_PLACE: 'Emplacement actuel',
    },
    INDEX: {
        CATEGORY: 'Catégorie',
        DENOMINATION: 'Dénomination',
    }
}

async function crawlArtworkDatas(artworkIds: string[]): Promise<any> {
    const artworkUrlPrefix = config.website[0].website_artwork_prefix_url;
    const query_artwork_data = config.website[0].artwork_query.all;
    const artworks = new Set();
    for (const artworkId of artworkIds) {

        const response  = await got(artworkUrlPrefix + artworkId.toString());
        const { document } = new JSDOM(response.body, {
            contentType: "text/html",
        }).window;

        artworks.add({
            id: artworkId,
            dataHtml: document.querySelectorAll(query_artwork_data),
        });
    
    }
    console.log('id_list', artworks);
    return;
}

function extractDataFromtemplate(templates: any[]) {
    templates.forEach((template: any) => {
        switch (template.children[1].innerText) {
            case DATA_TITLES.INVENTORY_NUMBER: {

                break;
            }
            case DATA_TITLES.COLLECTION: {
                break;
            }
        }

    });
}

crawlArtworkDatas([]);