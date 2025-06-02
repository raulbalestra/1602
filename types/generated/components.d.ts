import type { Schema, Attribute } from '@strapi/strapi';

export interface AchievementConditions extends Schema.Component {
  collectionName: 'components_achievement_conditions';
  info: {
    displayName: 'conditions';
    description: '';
  };
  attributes: {
    classCompletionCount: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    classType: Attribute.Enumeration<
      [
        'CARDIO',
        'FITNESS',
        'PILATES',
        'MEDITATION',
        'STRETCHING',
        'STRENGTH_TRAINING',
        'YOGA',
        'ALL'
      ]
    >;
    classDifficulty: Attribute.Enumeration<
      ['ENTRY', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'ALL']
    >;
    classDuration: Attribute.Component<'achievement.duration'>;
    streakRequirement: Attribute.Component<'achievement.streak-requirements'>;
    timeframeInDays: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    classGoal: Attribute.Enumeration<
      [
        'FLEXIBILITY',
        'STRENGTH',
        'ENDURANCE',
        'MINDFULNESS',
        'WEIGHT_LOSS',
        'ALL'
      ]
    >;
  };
}

export interface AchievementDuration extends Schema.Component {
  collectionName: 'components_achievement_durations';
  info: {
    displayName: 'Duration';
  };
  attributes: {
    durationAmount: Attribute.Integer;
    durationOperator: Attribute.Enumeration<['UNDER', 'OVER', 'EQUALS']>;
  };
}

export interface AchievementStreakRequirements extends Schema.Component {
  collectionName: 'components_achievement_streak_requirements';
  info: {
    displayName: 'Streak Requirements';
  };
  attributes: {
    streakType: Attribute.Enumeration<['DAILY', 'WEEKLY', 'MONTHLY']>;
    streakCount: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface BlogBlogContent extends Schema.Component {
  collectionName: 'components_blog_blog_contents';
  info: {
    displayName: 'meta';
    icon: 'code';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    socialTitle: Attribute.String & Attribute.Required;
    socialDescription: Attribute.Text & Attribute.Required;
    socialImage: Attribute.Media & Attribute.Required;
    socialType: Attribute.Enumeration<['website', 'article']> &
      Attribute.Required &
      Attribute.DefaultTo<'website'>;
  };
}

export interface BlogBlogTest extends Schema.Component {
  collectionName: 'components_blog_blog_tests';
  info: {
    displayName: 'richText';
    icon: 'underline';
    description: '';
  };
  attributes: {
    richText: Attribute.Blocks;
  };
}

export interface BlogRichTextMd extends Schema.Component {
  collectionName: 'components_blog_rich_text_mds';
  info: {
    displayName: 'richTextMd';
    icon: 'crown';
  };
  attributes: {
    richTextMd: Attribute.RichText;
  };
}

export interface ClassVideoSection extends Schema.Component {
  collectionName: 'components_class_video_sections';
  info: {
    displayName: 'Video Section';
  };
  attributes: {
    title: Attribute.String;
    start: Attribute.Integer & Attribute.Required;
    end: Attribute.Integer & Attribute.Required;
  };
}

export interface CommonFaq extends Schema.Component {
  collectionName: 'components_common_faqs';
  info: {
    displayName: 'QnA';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answerMd: Attribute.RichText;
  };
}

export interface CommonImage extends Schema.Component {
  collectionName: 'components_common_images';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    src: Attribute.Media & Attribute.Required;
    alt: Attribute.String;
  };
}

export interface CommonKeyValuePair extends Schema.Component {
  collectionName: 'components_common_key_value_pairs';
  info: {
    displayName: 'key value pair';
  };
  attributes: {
    key: Attribute.String;
    value: Attribute.Text;
  };
}

export interface CommonMedia extends Schema.Component {
  collectionName: 'components_common_media';
  info: {
    displayName: 'Media';
    icon: 'picture';
    description: '';
  };
  attributes: {
    mediaFile: Attribute.Media;
    linkUrl: Attribute.String;
  };
}

export interface CommonMetadata extends Schema.Component {
  collectionName: 'components_common_metadata';
  info: {
    displayName: 'Metadata';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    socialTitle: Attribute.Text & Attribute.Required;
    socialDescription: Attribute.Text & Attribute.Required;
    socialImage: Attribute.Media;
    socialType: Attribute.Enumeration<['website', 'article']> &
      Attribute.Required &
      Attribute.DefaultTo<'website'>;
  };
}

export interface CommonString extends Schema.Component {
  collectionName: 'components_common_strings';
  info: {
    displayName: 'string';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface HomeBenefit extends Schema.Component {
  collectionName: 'components_home_benefits';
  info: {
    displayName: 'Benefit';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    whiteTheme: Attribute.Boolean;
    image: Attribute.Media;
    firstBenefitTitle: Attribute.String;
    firstBenefitSubtitle: Attribute.Text;
    secondBenefitTitle: Attribute.String;
    secondBenefitSubtitle: Attribute.Text;
    thirdBenefitTitle: Attribute.String;
    thirdBenefitSubtitle: Attribute.Text;
  };
}

export interface HomeBenefitsSection extends Schema.Component {
  collectionName: 'components_home_benefits_sections';
  info: {
    displayName: 'BenefitsSection';
    description: '';
  };
  attributes: {
    benefits: Attribute.Component<'home.benefit', true>;
  };
}

export interface HomeBottomHeroPart extends Schema.Component {
  collectionName: 'components_home_bottom_hero_parts';
  info: {
    displayName: 'BottomHeroPart';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    secondTitle: Attribute.String;
    subtitle: Attribute.String;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface HomeBottomHeroSection extends Schema.Component {
  collectionName: 'components_home_bottom_hero_sections';
  info: {
    displayName: 'BottomHeroSection';
    description: '';
  };
  attributes: {
    bottomHeroParts: Attribute.Component<'home.bottom-hero-part', true>;
    buttonTitle: Attribute.String;
    buttonSubtitle: Attribute.String;
    buttonLink: Attribute.String;
  };
}

export interface HomeContactUsSection extends Schema.Component {
  collectionName: 'components_home_contact_us_sections';
  info: {
    displayName: 'ContactUsSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    buttonTitle: Attribute.String;
    contactUsImage: Attribute.Media;
    buttonLink: Attribute.String;
  };
}

export interface HomeFaqSection extends Schema.Component {
  collectionName: 'components_home_faq_sections';
  info: {
    displayName: 'FaqSection';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    faqParts: Attribute.Component<'home.faq', true>;
  };
}

export interface HomeFaq extends Schema.Component {
  collectionName: 'components_home_faqs';
  info: {
    displayName: 'Faq';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answerMd: Attribute.Text;
  };
}

export interface HomeHeroSection extends Schema.Component {
  collectionName: 'components_home_hero_sections';
  info: {
    displayName: 'HeroSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    rating: Attribute.String;
    ratedTextStart: Attribute.String;
    ratedTextEnd: Attribute.String;
    buttonTitle: Attribute.String;
    buttonSubtitle: Attribute.String;
    bgImage: Attribute.Media;
    buttonLink: Attribute.String;
  };
}

export interface HomeMoreBenefitsSection extends Schema.Component {
  collectionName: 'components_home_more_benefits_sections';
  info: {
    displayName: 'MoreBenefitsSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    smallBenefits: Attribute.Component<'home.small-benefits', true>;
  };
}

export interface HomeResult extends Schema.Component {
  collectionName: 'components_home_results';
  info: {
    displayName: 'Result';
    description: '';
  };
  attributes: {
    authorName: Attribute.String;
    profession: Attribute.String;
    description: Attribute.Text;
    authorImage: Attribute.Media;
    image: Attribute.Media;
  };
}

export interface HomeResultsSection extends Schema.Component {
  collectionName: 'components_home_results_sections';
  info: {
    displayName: 'ResultsSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    results: Attribute.Component<'home.result', true>;
  };
}

export interface HomeSecondHeroSection extends Schema.Component {
  collectionName: 'components_home_second_hero_sections';
  info: {
    displayName: 'SecondHeroSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    buttonTitle: Attribute.String;
    buttonSubtitle: Attribute.String;
    secondHeroImage: Attribute.Media;
    buttonLink: Attribute.String;
  };
}

export interface HomeSeenOnTheNewsSection extends Schema.Component {
  collectionName: 'components_home_seen_on_the_news_sections';
  info: {
    displayName: 'SeenOnTheNewsSection';
    description: '';
  };
  attributes: {
    quoteTitle: Attribute.String;
    heroTextBg: Attribute.Media;
    mainNewsImage: Attribute.Media;
    asSeenOnImage: Attribute.Media;
  };
}

export interface HomeSmallBenefits extends Schema.Component {
  collectionName: 'components_home_small_benefits';
  info: {
    displayName: 'SmallBenefits';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    image: Attribute.Media;
  };
}

export interface HomeSocialMediaTestimonial extends Schema.Component {
  collectionName: 'components_home_social_media_testimonials';
  info: {
    displayName: 'SocialMediaTestimonial';
    description: '';
  };
  attributes: {
    authorName: Attribute.String;
    mediaSource: Attribute.String & Attribute.Required;
    description: Attribute.String;
    date: Attribute.String;
    withRating: Attribute.Boolean;
    authorImage: Attribute.Media;
  };
}

export interface HomeSocialMediaTestimonialsSection extends Schema.Component {
  collectionName: 'components_home_social_media_testimonials_sections';
  info: {
    displayName: 'SocialMediaTestimonialsSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    socialMediaTestimonials: Attribute.Component<
      'home.social-media-testimonial',
      true
    >;
    buttonTitle: Attribute.String;
    buttonSubtitle: Attribute.String;
    buttonLink: Attribute.String;
  };
}

export interface HomeTestimonialVideoSection extends Schema.Component {
  collectionName: 'components_home_testimonial_video_sections';
  info: {
    displayName: 'TestimonialVideoSection';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface HomeTestimonialsSection extends Schema.Component {
  collectionName: 'components_home_testimonials_sections';
  info: {
    displayName: 'TestimonialsSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    testimonials: Attribute.Component<'home.testimonials', true>;
    buttonTitle: Attribute.String;
    buttonSubtitle: Attribute.String;
    buttonLink: Attribute.String;
  };
}

export interface HomeTestimonials extends Schema.Component {
  collectionName: 'components_home_testimonials';
  info: {
    displayName: 'Testimonial';
    description: '';
  };
  attributes: {
    authorName: Attribute.String;
    title: Attribute.String;
    skills: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface HomeWorkoutProgram extends Schema.Component {
  collectionName: 'components_home_workout_programs';
  info: {
    displayName: 'WorkoutProgram';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
  };
}

export interface HomeWorkoutProgramsSection extends Schema.Component {
  collectionName: 'components_home_workout_programs_sections';
  info: {
    displayName: 'workoutProgramsSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    workout: Attribute.Component<'home.workout-program', true>;
  };
}

export interface NavigationNavigationItem extends Schema.Component {
  collectionName: 'components_navigation_navigation_items';
  info: {
    displayName: 'NavigationLinks';
    description: '';
  };
  attributes: {
    whatsIncluded: Attribute.String & Attribute.Required;
    reviews: Attribute.String & Attribute.Required;
    blog: Attribute.String & Attribute.Required;
    login: Attribute.String & Attribute.Required;
    signup: Attribute.String & Attribute.Required;
    memberAreaHome: Attribute.String & Attribute.Required;
    memberAreaSettings: Attribute.String & Attribute.Required;
    workoutPrograms: Attribute.String & Attribute.Required;
    memberAreaBlog: Attribute.String & Attribute.Required;
    logout: Attribute.String & Attribute.Required;
  };
}

export interface PopupButton extends Schema.Component {
  collectionName: 'components_popup_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface PopupCloseButton extends Schema.Component {
  collectionName: 'components_popup_close_buttons';
  info: {
    displayName: 'closeButton';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface PopupMedia extends Schema.Component {
  collectionName: 'components_popup_media';
  info: {
    displayName: 'media';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface PopupRating extends Schema.Component {
  collectionName: 'components_popup_ratings';
  info: {
    displayName: 'rating';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface PopupSubParagraph extends Schema.Component {
  collectionName: 'components_popup_sub_paragraphs';
  info: {
    displayName: 'subParagraph';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface PopupSubTitle extends Schema.Component {
  collectionName: 'components_popup_sub_titles';
  info: {
    displayName: 'subTitle';
    description: '';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface PopupTitle extends Schema.Component {
  collectionName: 'components_popup_titles';
  info: {
    displayName: 'title';
    description: '';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface PricingPlanPriceFeatures extends Schema.Component {
  collectionName: 'components_pricing_plan_price_features';
  info: {
    displayName: 'Features';
    description: '';
  };
  attributes: {
    feature: Attribute.Enumeration<
      [
        'hair',
        'skin',
        'vision',
        'meditation',
        'booty_challenge',
        'abs_challenge',
        'beautiful_skin_ebook',
        'sofa_yoga_ebook',
        'eye_yoga_ebook',
        'yoga_detox_ebook',
        'easy_keto_ebook',
        'radiant_youth_hypnotherapy',
        'weight_loss_hypnotherapy',
        'gut_reset_ebook',
        'superfoods_ebook',
        'menstrual_ebook',
        'gut_health_ebook'
      ]
    >;
  };
}

export interface ProgramDiifficulty extends Schema.Component {
  collectionName: 'components_program_diifficulties';
  info: {
    displayName: 'Difficulty';
    description: '';
  };
  attributes: {
    name: Attribute.Enumeration<
      ['Entry level', 'beginner', 'Intermediate', 'Advanced', 'All levels']
    >;
  };
}

export interface ProgramEquipment extends Schema.Component {
  collectionName: 'components_program_equipment';
  info: {
    displayName: 'Equipment';
  };
  attributes: {
    equipment: Attribute.Enumeration<['CHAIR', 'NONE']>;
  };
}

export interface ProgramGoals extends Schema.Component {
  collectionName: 'components_program_goals';
  info: {
    displayName: 'Goals';
    description: '';
  };
  attributes: {
    goal: Attribute.Enumeration<
      [
        'FLEXIBILITY',
        'STRENGTH',
        'ENDURANCE',
        'MINDFULNESS',
        'WEIGHT_LOSS',
        'ALL'
      ]
    >;
  };
}

export interface ProgramIntensity extends Schema.Component {
  collectionName: 'components_program_intensities';
  info: {
    displayName: 'Intensity';
    description: '';
  };
  attributes: {
    intensity: Attribute.Enumeration<['MEDIUM', 'LOW_MEDIUM', 'MEDIUM_HIGH']>;
  };
}

export interface ProgramMovementPattern extends Schema.Component {
  collectionName: 'components_program_movement_patterns';
  info: {
    displayName: 'Movement Pattern';
    description: '';
  };
  attributes: {
    movementPattern: Attribute.Enumeration<['FULL_BODY', 'LOWER_BODY']>;
  };
}

export interface ProgramPrimaryMuscleGroup extends Schema.Component {
  collectionName: 'components_program_primary_muscle_groups';
  info: {
    displayName: 'Primary Muscle Group';
    description: '';
  };
  attributes: {
    primaryMuscleGroup: Attribute.Enumeration<
      [
        'FULL_BODY',
        'LEGS',
        'GLUTES',
        'CORE',
        'CALVES',
        'SHOULDERS',
        'HIP_ABDUCTORS',
        'HIP_ROTATORS',
        'ADDUCTORS',
        'HAMSTRINGS',
        'QUADRICEPS'
      ]
    >;
  };
}

export interface ProgramProgramLength extends Schema.Component {
  collectionName: 'components_program_program_lengths';
  info: {
    displayName: 'Program Length';
    description: '';
  };
  attributes: {
    roundedLengthInMinutes: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface ProgramProgramType extends Schema.Component {
  collectionName: 'components_program_program_types';
  info: {
    displayName: 'Program Type';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<
      [
        'CARDIO',
        'FITNESS',
        'PILATES',
        'MEDITATION',
        'STRETCHING',
        'STRENGTH_TRAINING',
        'YOGA',
        'ALL'
      ]
    >;
  };
}

export interface ProgramRiskArea extends Schema.Component {
  collectionName: 'components_program_risk_areas';
  info: {
    displayName: 'Risk Area';
    description: '';
  };
  attributes: {
    riskArea: Attribute.Enumeration<
      [
        'NECK',
        'BACK',
        'SHOULDERS',
        'KNEES',
        'ANKLES',
        'HIPS',
        'LOWER_BACK',
        'WRISTS'
      ]
    >;
  };
}

export interface ProgramSecondaryMuscleGroup extends Schema.Component {
  collectionName: 'components_program_secondary_muscle_groups';
  info: {
    displayName: 'Secondary Muscle Group';
    description: '';
  };
  attributes: {
    secondaryMuscleGroup: Attribute.Enumeration<
      [
        'CORE',
        'LEGS',
        'ARMS',
        'CALVES',
        'HIP_ABDUCTORS',
        'SHOULDERS',
        'FEET',
        'LOWER_BACK',
        'GLUTES',
        'HAMSTRINGS',
        'ADDUCTORS',
        'HIP_FLEXORS'
      ]
    >;
  };
}

export interface ProgramSkillPointsPerClass extends Schema.Component {
  collectionName: 'components_program_skill_points_per_classes';
  info: {
    displayName: 'Skill Points Per Class';
    description: '';
  };
  attributes: {
    name: Attribute.Enumeration<
      ['STRENGTH', 'FLEXIBILITY', 'ENDURANCE', 'MINDFULNESS']
    > &
      Attribute.Required;
    points: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
  };
}

export interface PromotionsAsSeenOnSection extends Schema.Component {
  collectionName: 'components_promotions_as_seen_on_sections';
  info: {
    displayName: 'AsSeenOnSection';
  };
  attributes: {
    asSeenOn: Attribute.String & Attribute.Required;
  };
}

export interface PromotionsBenefit extends Schema.Component {
  collectionName: 'components_promotions_benefits';
  info: {
    displayName: 'benefit';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    alt: Attribute.String;
  };
}

export interface PromotionsBenefitsSection extends Schema.Component {
  collectionName: 'components_promotions_benefits_sections';
  info: {
    displayName: 'BenefitsSection';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    benefits: Attribute.Component<'promotions.benefit', true> &
      Attribute.Required;
    maleImage: Attribute.Media & Attribute.Required;
    femaleImage: Attribute.Media & Attribute.Required;
  };
}

export interface PromotionsBodyImages extends Schema.Component {
  collectionName: 'components_promotions_body_images';
  info: {
    displayName: 'bodyImages';
    description: '';
  };
  attributes: {
    thin: Attribute.Media & Attribute.Required;
    toned: Attribute.Media & Attribute.Required;
    fat: Attribute.Media & Attribute.Required;
    gender: Attribute.String & Attribute.Required;
  };
}

export interface PromotionsDiscount extends Schema.Component {
  collectionName: 'components_promotions_discounts';
  info: {
    displayName: 'discount';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    expiresIn: Attribute.String;
    duration: Attribute.Integer;
  };
}

export interface PromotionsFreebie extends Schema.Component {
  collectionName: 'components_promotions_freebies';
  info: {
    displayName: 'freebie';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    alt: Attribute.String;
    title: Attribute.String & Attribute.Required;
    price: Attribute.Decimal & Attribute.Required;
    free: Attribute.String & Attribute.Required;
    included: Attribute.String & Attribute.Required;
  };
}

export interface PromotionsFreebiesSection extends Schema.Component {
  collectionName: 'components_promotions_freebies_sections';
  info: {
    displayName: 'FreebiesSection';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    clientTestimonial: Attribute.String & Attribute.Required;
    getPlan: Attribute.String & Attribute.Required;
    freebies: Attribute.Component<'promotions.freebie', true> &
      Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface PromotionsGuaranteeSection extends Schema.Component {
  collectionName: 'components_promotions_guarantee_sections';
  info: {
    displayName: 'GuaranteeSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    linkText: Attribute.String;
    getPlan: Attribute.String;
    rated: Attribute.Text;
    ratedSubnote: Attribute.Text;
  };
}

export interface PromotionsHeader extends Schema.Component {
  collectionName: 'components_promotions_headers';
  info: {
    displayName: 'header';
    icon: 'layout';
    description: '';
  };
  attributes: {
    duration: Attribute.BigInteger & Attribute.Required;
    bgColor: Attribute.String;
    bgImage: Attribute.Media;
    image1: Attribute.Media;
    image2: Attribute.Media;
    image3: Attribute.Media;
    title: Attribute.String & Attribute.Required;
    buttonTitle: Attribute.String & Attribute.Required;
    ratingTextStart: Attribute.Text & Attribute.Required;
    ratingTextEnd: Attribute.Text & Attribute.Required;
  };
}

export interface PromotionsHeroSection extends Schema.Component {
  collectionName: 'components_promotions_hero_sections';
  info: {
    displayName: 'HeroSection';
    description: '';
  };
  attributes: {
    heroImage: Attribute.Media & Attribute.Required;
    heroImageMobile: Attribute.Media & Attribute.Required;
    rated: Attribute.String & Attribute.Required;
    personalPlan: Attribute.String & Attribute.Required;
    reduceFat: Attribute.String & Attribute.Required;
    flexibility: Attribute.String & Attribute.Required;
    attractiveness: Attribute.String & Attribute.Required;
    foxReview: Attribute.String & Attribute.Required;
    agreement: Attribute.String & Attribute.Required;
    getPlan: Attribute.String & Attribute.Required;
    safeCheckout: Attribute.String & Attribute.Required;
    autoRenewal: Attribute.String & Attribute.Required;
    priceCards: Attribute.Component<'promotions.price-card', true> &
      Attribute.Required;
    loseWeight: Attribute.String & Attribute.Required;
    personalPlanLoss: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lose {{loss}} with your personal plan'>;
    discount: Attribute.Component<'promotions.discount'>;
  };
}

export interface PromotionsImageCarouselSection extends Schema.Component {
  collectionName: 'components_promotions_image_carousel_sections';
  info: {
    displayName: 'ImageCarouselSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String;
    images: Attribute.Media & Attribute.Required;
  };
}

export interface PromotionsInTheMediaSection extends Schema.Component {
  collectionName: 'components_promotions_in_the_media_sections';
  info: {
    displayName: 'InTheMediaSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
    alt: Attribute.String;
  };
}

export interface PromotionsIntroduction extends Schema.Component {
  collectionName: 'components_promotions_introductions';
  info: {
    displayName: 'Introduction';
    description: '';
  };
  attributes: {
    subtitle: Attribute.Text & Attribute.Required;
    video: Attribute.Media & Attribute.Required;
    gender: Attribute.String & Attribute.Required;
  };
}

export interface PromotionsMediaReactionImage extends Schema.Component {
  collectionName: 'components_promotions_media_reaction_images';
  info: {
    displayName: 'MediaReactionImage';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    gender: Attribute.String & Attribute.Required;
  };
}

export interface PromotionsMediaReactionsSection extends Schema.Component {
  collectionName: 'components_promotions_media_reactions_sections';
  info: {
    displayName: 'MediaReactionsSection';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    rated: Attribute.String & Attribute.Required;
    button: Attribute.String & Attribute.Required;
    genderedImages: Attribute.Component<
      'promotions.media-reaction-image',
      true
    >;
    images: Attribute.Component<'common.image', true> & Attribute.Required;
  };
}

export interface PromotionsPersonalProgramSection extends Schema.Component {
  collectionName: 'components_promotions_personal_program_sections';
  info: {
    displayName: 'PersonalProgramSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    includedItems: Attribute.Component<'common.string', true> &
      Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    alt: Attribute.String;
  };
}

export interface PromotionsPitch3FromToSection extends Schema.Component {
  collectionName: 'components_promotions_pitch3_from_to_sections';
  info: {
    displayName: 'Pitch3FromToSection';
    description: '';
  };
  attributes: {
    now: Attribute.String & Attribute.Required;
    yourGoal: Attribute.String & Attribute.Required;
    phrases: Attribute.Component<'quiz.shared-pitch'> & Attribute.Required;
    title: Attribute.Text & Attribute.Required;
    bodyImages: Attribute.Component<'promotions.body-images', true> &
      Attribute.Required;
    bmiString1: Attribute.String & Attribute.Required;
    bmiString2: Attribute.String & Attribute.Required;
    bmiString3: Attribute.String & Attribute.Required;
    bmiString4: Attribute.String & Attribute.Required;
    beforeSubtitle: Attribute.Text & Attribute.Required;
    afterSubtitle: Attribute.String & Attribute.Required;
  };
}

export interface PromotionsPitch3GraphSection extends Schema.Component {
  collectionName: 'components_promotions_pitch3_graph_sections';
  info: {
    displayName: 'Pitch3GraphSection';
  };
  attributes: {
    bodyChange: Attribute.String & Attribute.Required;
    gain: Attribute.String & Attribute.Required;
    lose: Attribute.String & Attribute.Required;
    now: Attribute.String & Attribute.Required;
    and: Attribute.String & Attribute.Required;
    subtitle1: Attribute.String & Attribute.Required;
    subtitle2: Attribute.String & Attribute.Required;
    goal: Attribute.String & Attribute.Required;
    graphDisclaimer: Attribute.String & Attribute.Required;
  };
}

export interface PromotionsPotentialSavingsSection extends Schema.Component {
  collectionName: 'components_promotions_potential_savings_sections';
  info: {
    displayName: 'PotentialSavingsSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    totalValueText: Attribute.String & Attribute.Required;
    monthlyPriceText: Attribute.String & Attribute.Required;
    monthlyPriceValue: Attribute.String & Attribute.Required;
    savings: Attribute.Component<'promotions.saving', true> &
      Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    alt: Attribute.String;
  };
}

export interface PromotionsPriceCard extends Schema.Component {
  collectionName: 'components_promotions_price_cards';
  info: {
    displayName: 'priceCard';
  };
  attributes: {
    flair: Attribute.String;
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    oldPrice: Attribute.Decimal & Attribute.Required;
    newPrice: Attribute.Decimal & Attribute.Required;
    oldPerDayPrice: Attribute.Decimal & Attribute.Required;
    newPerDayPrice: Attribute.Decimal & Attribute.Required;
    perDayText: Attribute.String & Attribute.Required;
    buttonText: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<['primary', 'secondary', 'default']> &
      Attribute.Required &
      Attribute.DefaultTo<'default'>;
  };
}

export interface PromotionsProductComparisonSection extends Schema.Component {
  collectionName: 'components_promotions_product_comparison_sections';
  info: {
    displayName: 'ProductComparisonSection';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface PromotionsPromotionBanner extends Schema.Component {
  collectionName: 'components_promotions_promotion_banners';
  info: {
    displayName: 'PromotionBanner';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    duration: Attribute.Integer & Attribute.Required;
    buttonTitle: Attribute.String & Attribute.Required;
  };
}

export interface PromotionsReview extends Schema.Component {
  collectionName: 'components_promotions_reviews';
  info: {
    displayName: 'review';
    description: '';
  };
  attributes: {
    profileIcon: Attribute.Media & Attribute.Required;
    profileAlt: Attribute.String;
    username: Attribute.String & Attribute.Required;
    review: Attribute.Text & Attribute.Required;
    date: Attribute.String & Attribute.Required;
    platformIcon: Attribute.Media & Attribute.Required;
    platformAlt: Attribute.String;
    gender: Attribute.String & Attribute.Required;
  };
}

export interface PromotionsSaving extends Schema.Component {
  collectionName: 'components_promotions_savings';
  info: {
    displayName: 'saving';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface PromotionsSlidingTestimonial extends Schema.Component {
  collectionName: 'components_promotions_sliding_testimonials';
  info: {
    displayName: 'SlidingTestimonial';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.Text & Attribute.Required;
    rating: Attribute.Decimal & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    profileImage: Attribute.Media & Attribute.Required;
    bodyImage: Attribute.Media & Attribute.Required;
    isFemale: Attribute.Boolean & Attribute.Required;
  };
}

export interface PromotionsSlidingTestimonialsSection extends Schema.Component {
  collectionName: 'components_promotions_sliding_testimonials_sections';
  info: {
    displayName: 'SlidingTestimonialsSection';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    slidingTestimonials: Attribute.Component<
      'promotions.sliding-testimonial',
      true
    > &
      Attribute.Required;
  };
}

export interface PromotionsTestimonialVideoSection extends Schema.Component {
  collectionName: 'components_promotions_testimonial_video_sections';
  info: {
    displayName: 'TestimonialVideoSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    rated: Attribute.String & Attribute.Required;
    videoTitle: Attribute.String & Attribute.Required;
    video: Attribute.Media & Attribute.Required;
    getPlan: Attribute.String & Attribute.Required;
    points: Attribute.Component<'common.string', true> & Attribute.Required;
  };
}

export interface PromotionsTestimonial extends Schema.Component {
  collectionName: 'components_promotions_testimonials';
  info: {
    displayName: 'testimonial';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    duration: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    video: Attribute.Media;
    image: Attribute.Media;
    alt: Attribute.String;
    gender: Attribute.String & Attribute.Required;
  };
}

export interface PromotionsTestimonialsSection extends Schema.Component {
  collectionName: 'components_promotions_testimonials_sections';
  info: {
    displayName: 'TestimonialsSection';
    description: '';
  };
  attributes: {
    testimonials: Attribute.Component<'promotions.testimonial', true> &
      Attribute.Required;
    maleTitle: Attribute.Text;
    title: Attribute.Text & Attribute.Required;
  };
}

export interface PromotionsUserReviewsSection extends Schema.Component {
  collectionName: 'components_promotions_user_reviews_sections';
  info: {
    displayName: 'UserReviewsSection';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    reviews: Attribute.Component<'promotions.review', true> &
      Attribute.Required;
  };
}

export interface PromotionsWhatUsersSaySection extends Schema.Component {
  collectionName: 'components_promotions_what_users_say_sections';
  info: {
    displayName: 'WhatUsersSaySection';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    video: Attribute.Media;
    rated: Attribute.String & Attribute.Required;
    button: Attribute.String & Attribute.Required;
    maleVideo: Attribute.Media & Attribute.Required;
    femaleVideo: Attribute.Media & Attribute.Required;
  };
}

export interface QuizAnswerMulti extends Schema.Component {
  collectionName: 'components_quiz_answer_multis';
  info: {
    displayName: 'AnswerMulti';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    emoji: Attribute.String;
    isAtomic: Attribute.Boolean;
    value: Attribute.String;
    image: Attribute.Media;
    subtext: Attribute.String;
  };
}

export interface QuizAnswer extends Schema.Component {
  collectionName: 'components_quiz_answers';
  info: {
    displayName: 'answer';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
    emoji: Attribute.String;
    image: Attribute.Media;
    subtext: Attribute.String;
    skipNextStep: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface QuizBodyImages extends Schema.Component {
  collectionName: 'components_quiz_body_images';
  info: {
    displayName: 'bodyImages';
    description: '';
  };
  attributes: {
    thin: Attribute.Media & Attribute.Required;
    toned: Attribute.Media & Attribute.Required;
    fat: Attribute.Media & Attribute.Required;
    gender: Attribute.String & Attribute.Required;
  };
}

export interface QuizCommonStep extends Schema.Component {
  collectionName: 'components_quiz_common_steps';
  info: {
    displayName: 'commonStep';
    icon: 'chartCircle';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    property: Attribute.String;
  };
}

export interface QuizEmailCapture extends Schema.Component {
  collectionName: 'components_quiz_email_captures';
  info: {
    displayName: 'emailCapture';
    description: '';
  };
  attributes: {
    ratedTextEnd: Attribute.String & Attribute.Required;
    ratedTextStart: Attribute.String & Attribute.Required;
    rating: Attribute.Decimal & Attribute.Required;
    title: Attribute.Text & Attribute.Required;
    subtitleStart: Attribute.String & Attribute.Required;
    defaultLoss: Attribute.Decimal & Attribute.Required;
    subtitleEnd: Attribute.String & Attribute.Required;
    emailInputPlaceholder: Attribute.String & Attribute.Required;
    emailInputSubmitButtonTitle: Attribute.String & Attribute.Required;
    informationSecure: Attribute.Text & Attribute.Required;
    privacyPolicy: Attribute.Text & Attribute.Required;
    validationEmailAlt: Attribute.String & Attribute.Required;
    validationEmailIncorrect: Attribute.String & Attribute.Required;
    phoneTitle: Attribute.String &
      Attribute.DefaultTo<'Last Step! Sign up for SMS'>;
    phoneImage: Attribute.Media;
    phoneInputPlaceholder: Attribute.String &
      Attribute.DefaultTo<'Phone Number'>;
    phoneInputSubmitButtonTitle: Attribute.String &
      Attribute.DefaultTo<'Continue'>;
    phoneInputSkipButtonTitle: Attribute.String &
      Attribute.DefaultTo<'I prefer not to say'>;
    validationPhoneRequired: Attribute.String &
      Attribute.DefaultTo<'Phone number is required'>;
    validationPhoneIncorrect: Attribute.String &
      Attribute.DefaultTo<'Phone number is invalid'>;
    ratedText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Excellent'>;
    useSmsCapture: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface QuizFooter extends Schema.Component {
  collectionName: 'components_quiz_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    informationSecure: Attribute.String & Attribute.Required;
    asSeenOn: Attribute.String & Attribute.Required;
    selectLanguage: Attribute.String & Attribute.Required;
  };
}

export interface QuizHeaderSlider extends Schema.Component {
  collectionName: 'components_quiz_header_sliders';
  info: {
    displayName: 'HeaderSlider';
    description: '';
  };
  attributes: {
    text1: Attribute.String & Attribute.Required;
    text2: Attribute.String & Attribute.Required;
    text3: Attribute.String & Attribute.Required;
  };
}

export interface QuizHeader extends Schema.Component {
  collectionName: 'components_quiz_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    review: Attribute.String & Attribute.Required;
    slider: Attribute.Component<'quiz.header-slider'>;
  };
}

export interface QuizPromotionBanner extends Schema.Component {
  collectionName: 'components_quiz_promotion_banners';
  info: {
    displayName: 'promotionBanner';
    icon: 'message';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    countdown: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<900>;
  };
}

export interface QuizSharedPitch extends Schema.Component {
  collectionName: 'components_quiz_shared_pitches';
  info: {
    displayName: 'sharedPitch';
  };
  attributes: {
    bodyTypeTitle: Attribute.String & Attribute.Required;
    bodyTypeEctomorph: Attribute.String & Attribute.Required;
    bodyTypeMesomorph: Attribute.String & Attribute.Required;
    bodyTypeEndomorph: Attribute.String & Attribute.Required;
    lifestyleTitle: Attribute.String & Attribute.Required;
    lifestyleActive: Attribute.String & Attribute.Required;
    lifestyleBalanced: Attribute.String & Attribute.Required;
    lifestyleSedentary: Attribute.String & Attribute.Required;
    fitnessLevelTitle: Attribute.String & Attribute.Required;
    fitnessLevelBeginner: Attribute.String & Attribute.Required;
    fitnessLevelIntermediate: Attribute.String & Attribute.Required;
    fitnessLevelAdvanced: Attribute.String & Attribute.Required;
    bodyFatTitle: Attribute.String & Attribute.Required;
    bodyFatLow: Attribute.String & Attribute.Required;
    bodyFatNormal: Attribute.String & Attribute.Required;
    bodyFatHigh: Attribute.String & Attribute.Required;
    bodyFatDangerous: Attribute.String & Attribute.Required;
    muscleDensityTitle: Attribute.String & Attribute.Required;
    muscleDensityLow: Attribute.String & Attribute.Required;
    muscleDensityMedium: Attribute.String & Attribute.Required;
    muscleDensityHigh: Attribute.String & Attribute.Required;
    productExperienceTitle: Attribute.String & Attribute.Required;
    productExperienceBeginner: Attribute.String & Attribute.Required;
    productExperienceIntermediate: Attribute.String & Attribute.Required;
    productExperienceAdvanced: Attribute.String & Attribute.Required;
    hormonalBalanceTitle: Attribute.String & Attribute.Required;
    hormonalBalancePoor: Attribute.String & Attribute.Required;
    hormonalBalanceIntermediate: Attribute.String & Attribute.Required;
    hormonalBalanceGood: Attribute.String & Attribute.Required;
    metabolismTitle: Attribute.String & Attribute.Required;
    metabolismSlow: Attribute.String & Attribute.Required;
    metabolismNormal: Attribute.String & Attribute.Required;
    metabolismFast: Attribute.String & Attribute.Required;
  };
}

export interface QuizShared extends Schema.Component {
  collectionName: 'components_quiz_shareds';
  info: {
    displayName: 'shared';
    icon: 'archive';
    description: '';
  };
  attributes: {
    continueButton: Attribute.String & Attribute.Required;
    warningBox: Attribute.Component<'quiz.warning-box'> & Attribute.Required;
    sharedPitch: Attribute.Component<'quiz.shared-pitch'> & Attribute.Required;
  };
}

export interface QuizSliderInterval extends Schema.Component {
  collectionName: 'components_quiz_slider_intervals';
  info: {
    displayName: 'sliderPoint';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    point: Attribute.Decimal & Attribute.Required;
  };
}

export interface QuizSocialMediaTestimonial extends Schema.Component {
  collectionName: 'components_quiz_social_media_testimonials';
  info: {
    displayName: 'socialMediaTestimonial';
  };
  attributes: {
    avatar: Attribute.Media & Attribute.Required;
    beforeAfter: Attribute.Media & Attribute.Required;
    author: Attribute.Text & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['facebook', 'instagram', 'trustpilot']> &
      Attribute.Required;
  };
}

export interface QuizStepAge extends Schema.Component {
  collectionName: 'components_quiz_step_ages';
  info: {
    displayName: 'stepAge';
    description: '';
  };
  attributes: {
    common: Attribute.Component<'quiz.common-step'> & Attribute.Required;
    placeholder: Attribute.String;
    helper: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
  };
}

export interface QuizStepDate extends Schema.Component {
  collectionName: 'components_quiz_step_dates';
  info: {
    displayName: 'stepDate';
    description: '';
  };
  attributes: {
    common: Attribute.Component<'quiz.common-step'> & Attribute.Required;
    placeholder: Attribute.String & Attribute.Required;
    skipStep: Attribute.String & Attribute.Required;
  };
}

export interface QuizStepGender extends Schema.Component {
  collectionName: 'components_quiz_step_genders';
  info: {
    displayName: 'stepGender';
    description: '';
  };
  attributes: {
    common: Attribute.Component<'quiz.common-step'> & Attribute.Required;
    answers: Attribute.Component<'quiz.answer', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 2;
        },
        number
      >;
    notSay: Attribute.String & Attribute.Required;
  };
}

export interface QuizStepGoalWeight extends Schema.Component {
  collectionName: 'components_quiz_step_goal_weights';
  info: {
    displayName: 'stepGoalWeight';
    icon: 'train';
  };
  attributes: {
    common: Attribute.Component<'quiz.common-step'>;
    placeholder: Attribute.String;
    helper: Attribute.String;
    underweightTitle: Attribute.String;
    underweightDescription: Attribute.Text;
    gainWeightTitle: Attribute.String;
    gainWeightDescription: Attribute.Text;
    elseTitle: Attribute.String;
    elseDescription: Attribute.Text;
  };
}

export interface QuizStepHeight extends Schema.Component {
  collectionName: 'components_quiz_step_heights';
  info: {
    displayName: 'stepHeight';
    description: '';
  };
  attributes: {
    common: Attribute.Component<'quiz.common-step'> & Attribute.Required;
    placeholder: Attribute.String;
    helper: Attribute.String & Attribute.Required;
  };
}

export interface QuizStepImageAnswers extends Schema.Component {
  collectionName: 'components_quiz_step_image_answers';
  info: {
    displayName: 'stepImageAnswers';
    icon: 'grid';
    description: '';
  };
  attributes: {
    common: Attribute.Component<'quiz.common-step'>;
    answers: Attribute.Component<'quiz.answer', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    answersMale: Attribute.Component<'quiz.answer', true>;
  };
}

export interface QuizStepImage extends Schema.Component {
  collectionName: 'components_quiz_step_images';
  info: {
    displayName: 'stepImage';
    description: '';
  };
  attributes: {
    common: Attribute.Component<'quiz.common-step'>;
    image: Attribute.Media & Attribute.Required;
    buttonText: Attribute.String & Attribute.Required;
    containerTitle: Attribute.String;
    containerDescription: Attribute.Text;
    imageMale: Attribute.Media;
    containerTitleMale: Attribute.String;
    containerDescriptionMale: Attribute.Text;
  };
}

export interface QuizStepLoading extends Schema.Component {
  collectionName: 'components_quiz_step_loadings';
  info: {
    displayName: 'stepLoading';
    description: '';
  };
  attributes: {
    common: Attribute.Component<'quiz.common-step'> & Attribute.Required;
    loadingDuration: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<10>;
    calculationsText: Attribute.Component<'common.string', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    testimonials: Attribute.Component<'quiz.social-media-testimonial', true>;
    emailCapture: Attribute.Component<'quiz.email-capture'>;
  };
}

export interface QuizStepMultiChoice extends Schema.Component {
  collectionName: 'components_quiz_step_multi_choices';
  info: {
    displayName: 'stepMultiChoice';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    common: Attribute.Component<'quiz.common-step'> & Attribute.Required;
    answers: Attribute.Component<'quiz.answer-multi', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    answersMale: Attribute.Component<'quiz.answer-multi', true>;
  };
}

export interface QuizStepName extends Schema.Component {
  collectionName: 'components_quiz_step_names';
  info: {
    displayName: 'stepName';
    description: '';
  };
  attributes: {
    common: Attribute.Component<'quiz.common-step'> & Attribute.Required;
    placeholder: Attribute.String;
  };
}

export interface QuizStepPitch1 extends Schema.Component {
  collectionName: 'components_quiz_step_pitch1s';
  info: {
    displayName: 'stepPitch1';
    description: '';
  };
  attributes: {
    common: Attribute.Component<'quiz.common-step'> & Attribute.Required;
    imagesCaption: Attribute.String & Attribute.Required;
    bodyImages: Attribute.Component<'quiz.body-images', true>;
  };
}

export interface QuizStepPitch2 extends Schema.Component {
  collectionName: 'components_quiz_step_pitch2s';
  info: {
    displayName: 'stepPitch2';
    description: '';
  };
  attributes: {
    subtitle1: Attribute.String & Attribute.Required;
    subtitle2: Attribute.String & Attribute.Required;
    women: Attribute.String & Attribute.Required;
    men: Attribute.String & Attribute.Required;
    people: Attribute.String & Attribute.Required;
    welnessHeader: Attribute.String & Attribute.Required;
    bodyMassText: Attribute.String & Attribute.Required;
    underweight: Attribute.String & Attribute.Required;
    normal: Attribute.String & Attribute.Required;
    overweight: Attribute.String & Attribute.Required;
    obese: Attribute.String & Attribute.Required;
    continueTitle: Attribute.String;
    wellnessRating: Attribute.Component<'quiz.wellness-rating'>;
    bodyImages: Attribute.Component<'quiz.body-images', true>;
  };
}

export interface QuizStepPitch3LogicStrings extends Schema.Component {
  collectionName: 'components_quiz_step_pitch3_logic_strings';
  info: {
    displayName: 'stepPitch3LogicStrings';
  };
  attributes: {
    bmiString1: Attribute.Text & Attribute.Required;
    bmiString2: Attribute.Text & Attribute.Required;
    bmiString3: Attribute.Text & Attribute.Required;
    bmiString4: Attribute.Text & Attribute.Required;
    physicalBuildTitle: Attribute.String & Attribute.Required;
    typicalDayTitle: Attribute.String & Attribute.Required;
    walkingStairsTitle: Attribute.String & Attribute.Required;
    expFitnessTitle: Attribute.String & Attribute.Required;
  };
}

export interface QuizStepPitch3 extends Schema.Component {
  collectionName: 'components_quiz_step_pitch3s';
  info: {
    displayName: 'stepPitch3';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle1: Attribute.String & Attribute.Required;
    subtitle2: Attribute.String & Attribute.Required;
    gain: Attribute.String & Attribute.Required;
    lose: Attribute.String & Attribute.Required;
    now: Attribute.String & Attribute.Required;
    yourGoal: Attribute.String & Attribute.Required;
    bodyChange: Attribute.String & Attribute.Required;
    and: Attribute.String & Attribute.Required;
    goal: Attribute.String & Attribute.Required;
    graphDisclaimer: Attribute.String & Attribute.Required;
    bodyChangeDescription: Attribute.Text;
    beforeString: Attribute.String;
    afterString: Attribute.String;
    before: Attribute.Component<'quiz.step-pitch3-logic-strings'>;
    after: Attribute.Component<'quiz.step-pitch3-logic-strings'>;
    bodyImages: Attribute.Component<'quiz.body-images', true>;
  };
}

export interface QuizStepSingleChoice extends Schema.Component {
  collectionName: 'components_quiz_step_single_choices';
  info: {
    displayName: 'stepSingleChoice';
    icon: 'check';
    description: '';
  };
  attributes: {
    common: Attribute.Component<'quiz.common-step'> & Attribute.Required;
    answers: Attribute.Component<'quiz.answer', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    answersMale: Attribute.Component<'quiz.answer', true>;
  };
}

export interface QuizStepSlider extends Schema.Component {
  collectionName: 'components_quiz_step_sliders';
  info: {
    displayName: 'stepSlider';
  };
  attributes: {
    common: Attribute.Component<'quiz.common-step'>;
    intervals: Attribute.Component<'quiz.slider-interval', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface QuizStepWeight extends Schema.Component {
  collectionName: 'components_quiz_step_weights';
  info: {
    displayName: 'stepWeight';
    description: '';
  };
  attributes: {
    common: Attribute.Component<'quiz.common-step'> & Attribute.Required;
    helper: Attribute.String & Attribute.Required;
    placeholder: Attribute.String;
  };
}

export interface QuizWarningBox extends Schema.Component {
  collectionName: 'components_quiz_warning_boxes';
  info: {
    displayName: 'warningBox';
    description: '';
  };
  attributes: {
    underweightTitle: Attribute.String & Attribute.Required;
    underweightDescription: Attribute.Text & Attribute.Required;
    normalTitle: Attribute.String & Attribute.Required;
    normalDescription: Attribute.Text & Attribute.Required;
    overweightTitle: Attribute.String & Attribute.Required;
    overweightDescription: Attribute.Text & Attribute.Required;
    obeseTitle: Attribute.String & Attribute.Required;
    obeseDescription: Attribute.Text & Attribute.Required;
  };
}

export interface QuizWellnessRatingInterval extends Schema.Component {
  collectionName: 'components_quiz_wellness_rating_intervals';
  info: {
    displayName: 'wellnessRatingInterval';
  };
  attributes: {
    from: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 10;
        },
        number
      >;
    to: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 10;
        },
        number
      >;
    color: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface QuizWellnessRating extends Schema.Component {
  collectionName: 'components_quiz_wellness_ratings';
  info: {
    displayName: 'wellnessRating';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    intervals: Attribute.Component<'quiz.wellness-rating-interval', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface SectionsFaq extends Schema.Component {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'faq';
    description: '';
  };
  attributes: {
    questions: Attribute.Component<'common.faq', true>;
    title: Attribute.String;
    getPlan: Attribute.String;
    rated: Attribute.String;
  };
}

export interface SectionsParagraphSection extends Schema.Component {
  collectionName: 'components_sections_paragraph_sections';
  info: {
    displayName: 'ParagraphSection';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    introductions: Attribute.Component<'promotions.introduction', true>;
  };
}

export interface WorkoutsSrc extends Schema.Component {
  collectionName: 'components_workouts_srcs';
  info: {
    displayName: 'video';
    description: '';
  };
  attributes: {
    srcHls: Attribute.String;
    srcMp4: Attribute.String;
    videoSegments: Attribute.Component<'workouts.video-segment', true>;
  };
}

export interface WorkoutsVideoSegment extends Schema.Component {
  collectionName: 'components_workouts_video_segments';
  info: {
    displayName: 'videoSegment';
    icon: 'scissors';
    description: '';
  };
  attributes: {
    segmentLenght: Attribute.Integer;
    segmentTitle: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'achievement.conditions': AchievementConditions;
      'achievement.duration': AchievementDuration;
      'achievement.streak-requirements': AchievementStreakRequirements;
      'blog.blog-content': BlogBlogContent;
      'blog.blog-test': BlogBlogTest;
      'blog.rich-text-md': BlogRichTextMd;
      'class.video-section': ClassVideoSection;
      'common.faq': CommonFaq;
      'common.image': CommonImage;
      'common.key-value-pair': CommonKeyValuePair;
      'common.media': CommonMedia;
      'common.metadata': CommonMetadata;
      'common.string': CommonString;
      'home.benefit': HomeBenefit;
      'home.benefits-section': HomeBenefitsSection;
      'home.bottom-hero-part': HomeBottomHeroPart;
      'home.bottom-hero-section': HomeBottomHeroSection;
      'home.contact-us-section': HomeContactUsSection;
      'home.faq-section': HomeFaqSection;
      'home.faq': HomeFaq;
      'home.hero-section': HomeHeroSection;
      'home.more-benefits-section': HomeMoreBenefitsSection;
      'home.result': HomeResult;
      'home.results-section': HomeResultsSection;
      'home.second-hero-section': HomeSecondHeroSection;
      'home.seen-on-the-news-section': HomeSeenOnTheNewsSection;
      'home.small-benefits': HomeSmallBenefits;
      'home.social-media-testimonial': HomeSocialMediaTestimonial;
      'home.social-media-testimonials-section': HomeSocialMediaTestimonialsSection;
      'home.testimonial-video-section': HomeTestimonialVideoSection;
      'home.testimonials-section': HomeTestimonialsSection;
      'home.testimonials': HomeTestimonials;
      'home.workout-program': HomeWorkoutProgram;
      'home.workout-programs-section': HomeWorkoutProgramsSection;
      'navigation.navigation-item': NavigationNavigationItem;
      'popup.button': PopupButton;
      'popup.close-button': PopupCloseButton;
      'popup.media': PopupMedia;
      'popup.rating': PopupRating;
      'popup.sub-paragraph': PopupSubParagraph;
      'popup.sub-title': PopupSubTitle;
      'popup.title': PopupTitle;
      'pricing-plan-price.features': PricingPlanPriceFeatures;
      'program.diifficulty': ProgramDiifficulty;
      'program.equipment': ProgramEquipment;
      'program.goals': ProgramGoals;
      'program.intensity': ProgramIntensity;
      'program.movement-pattern': ProgramMovementPattern;
      'program.primary-muscle-group': ProgramPrimaryMuscleGroup;
      'program.program-length': ProgramProgramLength;
      'program.program-type': ProgramProgramType;
      'program.risk-area': ProgramRiskArea;
      'program.secondary-muscle-group': ProgramSecondaryMuscleGroup;
      'program.skill-points-per-class': ProgramSkillPointsPerClass;
      'promotions.as-seen-on-section': PromotionsAsSeenOnSection;
      'promotions.benefit': PromotionsBenefit;
      'promotions.benefits-section': PromotionsBenefitsSection;
      'promotions.body-images': PromotionsBodyImages;
      'promotions.discount': PromotionsDiscount;
      'promotions.freebie': PromotionsFreebie;
      'promotions.freebies-section': PromotionsFreebiesSection;
      'promotions.guarantee-section': PromotionsGuaranteeSection;
      'promotions.header': PromotionsHeader;
      'promotions.hero-section': PromotionsHeroSection;
      'promotions.image-carousel-section': PromotionsImageCarouselSection;
      'promotions.in-the-media-section': PromotionsInTheMediaSection;
      'promotions.introduction': PromotionsIntroduction;
      'promotions.media-reaction-image': PromotionsMediaReactionImage;
      'promotions.media-reactions-section': PromotionsMediaReactionsSection;
      'promotions.personal-program-section': PromotionsPersonalProgramSection;
      'promotions.pitch3-from-to-section': PromotionsPitch3FromToSection;
      'promotions.pitch3-graph-section': PromotionsPitch3GraphSection;
      'promotions.potential-savings-section': PromotionsPotentialSavingsSection;
      'promotions.price-card': PromotionsPriceCard;
      'promotions.product-comparison-section': PromotionsProductComparisonSection;
      'promotions.promotion-banner': PromotionsPromotionBanner;
      'promotions.review': PromotionsReview;
      'promotions.saving': PromotionsSaving;
      'promotions.sliding-testimonial': PromotionsSlidingTestimonial;
      'promotions.sliding-testimonials-section': PromotionsSlidingTestimonialsSection;
      'promotions.testimonial-video-section': PromotionsTestimonialVideoSection;
      'promotions.testimonial': PromotionsTestimonial;
      'promotions.testimonials-section': PromotionsTestimonialsSection;
      'promotions.user-reviews-section': PromotionsUserReviewsSection;
      'promotions.what-users-say-section': PromotionsWhatUsersSaySection;
      'quiz.answer-multi': QuizAnswerMulti;
      'quiz.answer': QuizAnswer;
      'quiz.body-images': QuizBodyImages;
      'quiz.common-step': QuizCommonStep;
      'quiz.email-capture': QuizEmailCapture;
      'quiz.footer': QuizFooter;
      'quiz.header-slider': QuizHeaderSlider;
      'quiz.header': QuizHeader;
      'quiz.promotion-banner': QuizPromotionBanner;
      'quiz.shared-pitch': QuizSharedPitch;
      'quiz.shared': QuizShared;
      'quiz.slider-interval': QuizSliderInterval;
      'quiz.social-media-testimonial': QuizSocialMediaTestimonial;
      'quiz.step-age': QuizStepAge;
      'quiz.step-date': QuizStepDate;
      'quiz.step-gender': QuizStepGender;
      'quiz.step-goal-weight': QuizStepGoalWeight;
      'quiz.step-height': QuizStepHeight;
      'quiz.step-image-answers': QuizStepImageAnswers;
      'quiz.step-image': QuizStepImage;
      'quiz.step-loading': QuizStepLoading;
      'quiz.step-multi-choice': QuizStepMultiChoice;
      'quiz.step-name': QuizStepName;
      'quiz.step-pitch1': QuizStepPitch1;
      'quiz.step-pitch2': QuizStepPitch2;
      'quiz.step-pitch3-logic-strings': QuizStepPitch3LogicStrings;
      'quiz.step-pitch3': QuizStepPitch3;
      'quiz.step-single-choice': QuizStepSingleChoice;
      'quiz.step-slider': QuizStepSlider;
      'quiz.step-weight': QuizStepWeight;
      'quiz.warning-box': QuizWarningBox;
      'quiz.wellness-rating-interval': QuizWellnessRatingInterval;
      'quiz.wellness-rating': QuizWellnessRating;
      'sections.faq': SectionsFaq;
      'sections.paragraph-section': SectionsParagraphSection;
      'workouts.src': WorkoutsSrc;
      'workouts.video-segment': WorkoutsVideoSegment;
    }
  }
}
