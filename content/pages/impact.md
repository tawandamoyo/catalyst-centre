---
title: Our Impact
slug: /impact
sections:
  - title:
      text: Measuring Our Success
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Driving Sustainable Change Through Empowered Youth
    text: >
      The Catalyst Centre is committed to creating tangible, positive change across Africa. We measure our success by the empowerment of youth leaders and the progress made towards climate action and equitable resource governance. Our goal is to foster stronger, unified youth movements advocating for sustainable development.
    actions:
      - label: Support Our Mission
        url: /support-us # Link to the Support Us page
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-40
          - pl-4
          - pb-40
          - pr-4
        alignItems: center
        flexDirection: col # Changed to column for intro text focus
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
    type: GenericSection
    backgroundImage:
      type: BackgroundImage
      altText: Visual representation of positive impact and growth
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
      url: /images/impact-background.jpg # Placeholder image
  - title:
      text: Expected Outcomes
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: The Change We Aim to Create
    items:
      - title: Empowered Youth Leaders
        subtitle: Skilled & Networked
        text: >-
          Equipping a new generation with the knowledge, skills, and networks essential to effectively lead on climate action and sustainable resource governance initiatives across Africa.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
        # Optional: Add relevant icon image here
      - title: Increased Collaboration
        subtitle: Unified Action
        text: >-
          Fostering greater collaboration among youth from diverse backgrounds and regions to collectively address complex climate and resource challenges through shared strategies.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
        # Optional: Add relevant icon image here
      - title: Stronger Advocacy
        subtitle: Amplified Voices
        text: >-
          Building a unified, powerful youth movement capable of effectively advocating for equitable, just, and sustainable development policies and practices across the continent.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
        # Optional: Add relevant icon image here
      - title: Greater Youth Representation
        subtitle: Influencing Decisions
        text: >-
          Increasing meaningful youth participation and influence within critical decision-making processes related to climate policy and resource governance at all levels.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
        # Optional: Add relevant icon image here
    variant: two-col-grid # Example: Use 2x2 grid for outcomes
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pb-40
          - pt-16
          - pl-3
          - pr-3
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedItemsSection
  # Optional: Add a CarouselSection for Success Stories/Testimonials focused on impact
  - type: CarouselSection
    title:
      text: Success Stories
      color: text-dark
      styles:
        self:
         textAlign: center
      type: TitleBlock
    subtitle: Real Results from Our Work
    # Add items similar to the homepage/about page testimonial carousel, but focus on impact narratives
    items: [] # Populate with actual impact stories later
    elementId: impact-stories
    variant: next-prev-nav
    colors: bg-neutralAlt-fg-dark # Different background for variety
    styles:
      self:
        padding:
          - pt-16
          - pb-16
          - pl-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
seo:
  metaTitle: Our Impact - The Catalyst Centre
  metaDescription: Discover the impact The Catalyst Centre is making in empowering youth leaders for climate action and sustainable resource governance in Africa.
  socialImage: /images/catalyst-centre-impact-share.jpg # Use site default or specific image
  type: Seo
type: PageLayout
---