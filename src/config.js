export const DBConfig = {
    APIUrl : `http://localhost:3004`,
    APIKey: 'xxx-xxx-xx-xxx-xxx' // not in use
};

export const filtersOptions = {
    country: [
        {key: 'USA', value: "USA"},
        {key: 'Spain', value: "Spain"},
        {key: 'Italy', value: "Italy"},
        {key: 'Greece', value: "Greece"},
        {key: 'Denmark', value: "Denmark"},
    ],
    year: [
        {key: '2010', value: "2010"},
        {key: '2011', value: "2011"},
        {key: '2012', value: "2012"},
        {key: '2013', value: "2013"},
        {key: '2014', value: "2014"},
        {key: '2015', value: "2015"},
        {key: '2016', value: "2016"},
        {key: '2017', value: "2017"},
        {key: '2018', value: "2018"},
        {key: '2019', value: "2019"},
        {key: '2020', value: "2020"}
    ],
    rating: [
        {key: '0', value: "0"},
        {key: '1', value: "*"},
        {key: '2', value: "**"},
        {key: '3', value: "***"},
        {key: '4', value: "****"},
        {key: '5', value: "*****"}
    ]
};

export const sortingOptions = {
    category: [
        {key: 'id', value: 'id'},
        {key: 'name', value: 'name'},
        {key: 'country', value: 'country'},
        {key: 'year', value: 'year'}
    ],
    order: [
        {key: 'desc', value: 'desc'},
        {key: 'asc', value: 'asc'}
    ]
};

