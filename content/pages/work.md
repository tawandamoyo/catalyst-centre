---
title: Our Work
slug: /our-work
sections:
  - title:
      text: Our Programs & Initiatives
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: How We Empower Africa's Youth Leaders
    text: >
      The Catalyst Centre implements targeted programs built on empowerment, innovation, and collaboration. We focus on building capacity, fostering advocacy, strengthening research, and leveraging technology to address climate change and ensure sustainable resource governance, driven by Africa's youth.
    actions:
      - label: Learn About Our Impact
        url: /impact # Link to the Impact page
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
        flexDirection: col # Changed to column
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
    type: GenericSection
    backgroundImage:
      type: BackgroundImage
      altText: Diverse group of young people collaborating
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
      url: /images/our-work-background.jpg # Placeholder image
  # Section detailing program areas - Example using FeaturedItemsSection
  - title:
      text: Key Program Areas
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Focusing on Strategic Objectives
    items:
      - title: Youth Leadership on Climate Action
        text: >-
          Building capacity through climate education, facilitating youth-led advocacy campaigns, and establishing climate innovation hubs for sustainable solutions.
        colors: bg-light-fg-dark # Alternating background
        styles:
          self: { padding: [pt-8, pl-8, pb-8, pr-8], textAlign: left, borderRadius: x-large, flexDirection: col }
        type: FeaturedItem
        # Add image/icon representing leadership/climate action
      - title: Sustainable Governance of Critical Minerals
        text: >-
          Conducting research on impacts, advocating for transparent governance frameworks, and training youth to monitor environmental and social practices.
        colors: bg-neutralAlt-fg-dark # Alternating background
        styles:
          self: { padding: [pt-8, pl-8, pb-8, pr-8], textAlign: left, borderRadius: x-large, flexDirection: col }
        type: FeaturedItem
        # Add image/icon representing minerals/governance
      - title: Youth-Led Advocacy for Climate Justice
        text: >-
          Amplifying youth voices through digital campaigns, providing solidarity support, and building cross-border networks for collective impact.
        colors: bg-light-fg-dark # Alternating background
        styles:
          self: { padding: [pt-8, pl-8, pb-8, pr-8], textAlign: left, borderRadius: x-large, flexDirection: col }
        type: FeaturedItem
        # Add image/icon representing advocacy/justice
      - title: Research & Policy Development
        text: >-
          Leading evidence-based research on climate change, critical minerals, and youth development to inform policy recommendations and advocacy.
        colors: bg-neutralAlt-fg-dark # Alternating background
        styles:
          self: { padding: [pt-8, pl-8, pb-8, pr-8], textAlign: left, borderRadius: x-large, flexDirection: col }
        type: FeaturedItem
        # Add image/icon representing research/policy
      - title: Technology & Innovation for Development
        text: >-
          Harnessing technology through digital literacy programs, tech-enabled platforms for advocacy, and support for youth-led sustainable startups.
        colors: bg-light-fg-dark # Alternating background
        styles:
          self: { padding: [pt-8, pl-8, pb-8, pr-8], textAlign: left, borderRadius: x-large, flexDirection: col }
        type: FeaturedItem
        # Add image/icon representing tech/innovation
      - title: Leadership Development & Skill Transfer
        text: >-
          Organizing masterclasses, mentorship, peer-learning communities, and platforms for sharing strategies, tools, and best practices among young leaders.
        colors: bg-neutralAlt-fg-dark # Alternating background
        styles:
          self: { padding: [pt-8, pl-8, pb-8, pr-8], textAlign: left, borderRadius: x-large, flexDirection: col }
        type: FeaturedItem
        # Add image/icon representing skills/development
    # Adjust variant based on how many items you have and desired layout
    variant: three-col-grid # Example: 3x2 grid
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
  # Optional: Section on Theory of Change
  - type: GenericSection
    title:
      text: Our Theory of Change
      color: text-dark
      type: TitleBlock
    subtitle: How We Drive Transformation
    text: >
      We believe that empowered youth, equipped with the right tools and knowledge, can overcome barriers like limited participation and fragmented movements. By focusing on empowerment, innovation, and collaboration, we aim to cultivate a new generation of leaders driving climate action and sustainable resource governance across Africa.
    # media: You could add an ImageBlock here linking to a diagram of the Theory of Change
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding: [ pt-16, pb-16, pl-16, pr-16 ]
        flexDirection: col
        alignItems: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      text:
         textAlign: center
         maxWidth: large # Constrain text width for readability
seo:
  metaTitle: Our Work - The Catalyst Centre
  metaDescription: Explore the programs and initiatives of The Catalyst Centre focused on youth leadership, climate action, sustainable resources, and technology in Africa.
  socialImage: /images/catalyst-centre-our-work-share.jpg # Use site default or specific image
  type: Seo
type: PageLayout
---