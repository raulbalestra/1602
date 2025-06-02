const generatePlanId = async () => {
    const entries = await strapi.entityService.findMany(
        'api::pricing-plan.pricing-plan', 
        { 
          sort: { planId: 'desc' },
          limit: 1,
          fields: ['planId'],
        }
      );
  
      if (entries && entries.length > 0) {
        return entries[0].planId + 1;
      } else {
        const schema = strapi.contentTypes['api::pricing-plan.pricing-plan'];
        return schema.attributes.planId.min || 1;
      }
}


module.exports = {
    async beforeCreate(event) {
        const { data } = event.params;
        const newPlanId = await generatePlanId();
        data.planId = newPlanId;
    },
  };