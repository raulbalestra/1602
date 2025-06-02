const calculateDailyPrices = ({priceFull, priceDiscounted, priceDays}) => {
    const pricePerDayFull = (priceFull / priceDays).toFixed(2)
    const pricePerDayDiscounted = (priceDiscounted / priceDays).toFixed(2)
    const priceDifference = (priceFull-priceDiscounted).toFixed(2)

    return {
        pricePerDayFull,
        pricePerDayDiscounted,
        priceDifference,
    }
}

//TODO: Add additional functionality to make work if id is not provided but can be found
// Otherwise just use /100
const calculatePriceToCents = async (price, currencyId = null) => {
    if (!currencyId) return Math.round(price * 100);

    try {
        const currency = await strapi.entityService.findOne('api::currency.currency', currencyId, {
            fields: ['divisor'],
        });

        if (!currency || !currency.divisor || typeof currency.divisor !== 'number') {
            throw new Error('Invalid currency data or divisor missing');
        }

        return Math.round(price * currency.divisor);
    } catch (error) {
        console.error('Error calculating price to cents:', error.message);
        throw new Error('Unable to calculate price to cents');
    }
}

const generatePriceId = async () => {
    const entries = await strapi.entityService.findMany(
        'api::pricing-plan-price.pricing-plan-price', 
        { 
          sort: { priceId: 'desc' },
          limit: 1,
          fields: ['priceId'],
        }
      );
  
      if (entries && entries.length > 0) {
        return entries[0].priceId + 1;
      } else {
        const schema = strapi.contentTypes['api::pricing-plan-price.pricing-plan-price'];
        return schema.attributes.priceId.min || 1;
      }
}

const isUpdatePublishing = async ({ data, where }) => {
    if (data.publishedAt) {
        const entry = await strapi.entityService.findOne('api::pricing-plan-price.pricing-plan-price', where.id, {
          fields: ['publishedAt'],
        });

        const isPublishing = !entry.publishedAt && data.publishedAt;
        if (isPublishing) {
          return true
        }
    }
    return false
}


module.exports = {
    async beforeCreate(event) {
        console.log('beforeCreate')
        const { data } = event.params;
        const { priceFull, priceDiscounted, priceDays, currency } = data;

        const { pricePerDayFull, pricePerDayDiscounted, priceDifference } = calculateDailyPrices({priceFull, priceDiscounted, priceDays})

        const newPriceId = await generatePriceId();

        data.pricePerDayFull = pricePerDayFull;
        data.pricePerDayDiscounted = pricePerDayDiscounted;
        data.priceDifference = priceDifference;
        data.priceId = newPriceId;

        // Can only have connect or nothing
        if (currency?.connect?.length) {
                const priceToCents = await calculatePriceToCents(priceDiscounted, currency.connect[0].id)
                data.priceToCents = priceToCents;
        } else {
            const priceToCents = await calculatePriceToCents(priceDiscounted)
            data.priceToCents = priceToCents;
        }
    },
    async beforeUpdate(event) {
        const { data } = event.params;
        const isPublishing = await isUpdatePublishing({...event.params})
        if (!isPublishing) {
            const { priceFull, priceDiscounted, priceDays, currency } = data;
            const { pricePerDayFull, pricePerDayDiscounted, priceDifference } = calculateDailyPrices({priceFull, priceDiscounted, priceDays})

            data.pricePerDayFull = pricePerDayFull;
            data.pricePerDayDiscounted = pricePerDayDiscounted;
            data.priceDifference = priceDifference;

            //Doesnt matter if it has disconnect as the field is not editable and previous value 
            if (currency?.connect?.length) {
                const priceToCents = await calculatePriceToCents(priceDiscounted, currency.connect[0].id)
                data.priceToCents = priceToCents;
            } else {
                const priceToCents = await calculatePriceToCents(priceDiscounted)
                data.priceToCents = priceToCents;
            }
        }
    },
  };