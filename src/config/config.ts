const Config = {
    website: [{
        website_name: '',
        search_page_url: '',
        search_page_query: {
            artwork_Id: '.card--search a',
        },
        website_artwork_prefix_url: '',
        artwork_query: {
            all: '.row .notice__fullcartel__group',
        }
    }],
    global: {
        optimal_result_per_page: '20',
    }
};

export default Config;