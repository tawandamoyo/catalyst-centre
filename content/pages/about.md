---
title: About Us
slug: /about-us
sections:
  - title:
      text: About The Catalyst Centre
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Empowering Africa's Youth to Shape a Sustainable Future
    text: >
      The Catalyst Centre is a pioneering youth-led institution dedicated to empowering Africa's next generation of leaders. We focus on tackling the continent's most pressing challenges: climate change, sustainable resource management, and the governance of critical minerals. Recognizing the potential of Africa's youth and the continent's role in the global energy transition, we equip young people with the knowledge, skills, and platforms needed to drive sustainable development and advocate for equitable resource governance.
    actions:
      - label: Explore Our Work
        url: /our-work # Link to the Our Work page
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
        flexDirection: row-reverse # You might want to change this for About Us (e.g., 'col' or 'row')
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
    type: GenericSection
    backgroundImage:
      type: BackgroundImage
      altText: Abstract background representing collaboration and growth
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
      url: /images/abstract-background.svg # Keep or replace placeholder image
  - title:
      text: Meet the Team
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    # Update these file paths when you save the JSON profiles
    people:
      - content/data/nqo.json
      - content/data/ellen.json
      - content/data/majory.json
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedPeopleSection
  - title:
      text: What Sets Us Apart
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Our Unique Approach to Driving Change
    items:
      - title: Focus Intersection
        subtitle: Youth, Climate, Minerals
        text: >-
          We uniquely address the critical intersection of youth leadership, climate action, and the sustainable governance of critical minerals – tackling key challenges for Africa's future.
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
            flexDirection: col # Changed from row for vertical layout per item
        type: FeaturedItem
        # Optional: Add relevant icon image here if desired
      - title: Youth-Driven Empowerment
        subtitle: Leading the Change
        text: >-
          We empower Africa's youth not just as participants, but as key stakeholders and leaders actively shaping the continent's sustainable development agenda from the ground up.
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
            flexDirection: col # Changed from row
        type: FeaturedItem
        # Optional: Add relevant icon image here if desired
      - title: Tech & Innovation Focus
        subtitle: Amplifying Impact
        text: >-
          We leverage technology, data-driven solutions, and innovative platforms to amplify youth voices, enhance transparency, and drive systemic change in climate and resource sectors.
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
            flexDirection: col # Changed from row
        type: FeaturedItem
        # Optional: Add relevant icon image here if desired
    # Removed the 'actions' button from this section
    variant: three-col-grid # Changed from toggle-list
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
seo:
  metaTitle: About Us - The Catalyst Centre
  metaDescription: Learn about The Catalyst Centre's mission to empower Africa's youth for climate action and sustainable resource governance.
  socialImage: /images/catalyst-centre-social-share.jpg # Use site default or specific image
  type: Seo
type: PageLayout
---