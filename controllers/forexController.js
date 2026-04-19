const fetchRate = async ({from, to}) => {
    console.log(`Fetching from ${from} to ${to}`);


    return rates;
};

const index = () => {
    fetchRate(now(), now());
};  


module.exports = {
    index,
};