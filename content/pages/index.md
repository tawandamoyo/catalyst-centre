---
title: Home
slug: /
sections:
  # --- 1. Hero Section ---
  - type: GenericSection
    title:
      text: Empowering Africa's Youth for a Sustainable Future
      color: text-dark
      type: TitleBlock
    subtitle: Leading climate action and sustainable resource governance.
    text: >
      The Catalyst Centre equips Africa's next generation of leaders to tackle climate change and manage critical minerals sustainably. We empower young people with the knowledge, skills, and platforms to drive development and advocate for equitable resource governance.
    actions:
      - label: Learn More
        altText: Learn more about The Catalyst Centre
        url: /about-us
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Link
      - label: Partner With Us
        altText: Partner with The Catalyst Centre
        url: /support-us
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: secondary
        type: Button
    media:
      url: /images/homepage.png
      altText: Empowering Africa's Youth for a Sustainable Future preview
      type: ImageBlock
    badge:
      label: Youth-Led Initiative
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16

  # --- 2. YouTube Video Section ---
  - type: GenericSection
    title:
      text: See The Catalyst Centre in Action
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Empowering Youth, Driving Change
    text: |-
      Watch our latest video to learn more about our impact, programs, and the incredible youth leaders shaping Africa's sustainable future.
    media:
      type: VideoBlock
      # Use the privacy-enhanced URL if possible: https://www.youtube-nocookie.com/embed/YOUR_ID
      url: "https://www.youtube.com/watch?v=cFLE8Hh0uNI" # User-provided URL
      title: "The Catalyst Centre Overview"
      autoplay: false
      loop: false
      muted: false
      controls: true
      aspectRatio: '16:9'
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
          borderStyle: solid
          borderWidth: 1
          borderColor: border-neutralAlt
          borderRadius: large
    colors: bg-neutralAlt-fg-dark # Background contrasts slightly
    styles:
      self:
        padding:
          - pt-16
          - pb-16
          - pl-4
          - pr-4
        flexDirection: col
        alignItems: center
        justifyContent: center
      subtitle:
        textAlign: center
      text:
        textAlign: center
        maxWidth: large

  # --- 3. Our Approach Section ---
  - type: FeaturedItemsSection
    title:
      text: Our Approach
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Driving transformative change through empowered youth.
    items:
      - type: FeaturedItem
        title: Empowerment
        subtitle: Knowledge & Skills
        text: >-
          We equip youth with the necessary knowledge and skills to effectively engage with complex climate and resource governance issues.
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
            textAlign: left
        image:
          type: ImageBlock
          altText: Empowerment icon
          url: /images/icon1.svg
          styles:
            self:
              borderRadius: x-large
      - type: FeaturedItem
        title: Innovation
        subtitle: Tech & Data Driven
        text: >-
          Leveraging technology and data-driven solutions to amplify youth voices, influence policy, and promote sustainable practices.
        image:
          url: /images/icon2.svg
          altText: Innovation icon
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            textAlign: left
            justifyContent: center
      - type: FeaturedItem
        title: Collaboration
        subtitle: Networks & Action
        text: >-
          Building robust cross-border networks to foster collective action, knowledge-sharing, and solidarity among Africa's youth movements.
        image:
          url: /images/icon3.svg
          altText: Collaboration icon
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
    actions:
      - label: Explore Our Programs
        altText: Explore The Catalyst Centre's Programs
        url: /our-work
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
    badge:
      label: How We Create Impact
      color: text-primary
      styles:
        self:
          textAlign: center
      type: Badge
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pb-16
          - pt-16
          - pl-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center

  # --- 4. Key Program Areas (Moved Up) ---
  - type: FeaturedItemsSection
    title:
      text: Our Key Program Areas
      color: text-primary
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Building capacity, advocating for change, and fostering innovation.
    items:
      - type: FeaturedItem
        title: Leadership Development
        tagline: Empowering Leaders
        subtitle: Training & Mentorship
        text: |
          Organizing dynamic leadership training, masterclasses, and mentorship programs tailored for African youth in climate action and resource governance.
        image:
          url: /images/lead.jpg
          altText: Leadership Development Icon
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
      - type: FeaturedItem
        title: Advocacy & Networks
        tagline: Amplifying Voices
        subtitle: Campaigns & Collaboration
        text: |
          Developing evidence-based advocacy campaigns and building cross-border networks to influence policy and enable collective action.
        image:
          url: /images/advo.jpg
          altText: Advocacy Icon
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
      - type: FeaturedItem
        title: Research & Knowledge
        tagline: Informing Action
        subtitle: Data & Insights
        text: |
          Conducting cutting-edge research and creating accessible knowledge repositories to guide youth action, advocacy, and strategy.
        image:
          url: /images/research.jpg
          altText: Research Icon
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
    variant: three-col-grid
    colors: bg-neutral-fg-dark # Consider alternating background e.g., bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          - pb-16
          - pr-8
        justifyContent: center
      subtitle:
        textAlign: center

  # --- 5. Latest News Section ---
  - type: FeaturedPostsSection
    posts:
      - content/pages/blog/zimbabwe-debt.md
      - content/pages/blog/our-mountains-heritage.md
      - content/pages/blog/fourth-industrial-revolution.md
    showThumbnail: true
    showDate: true
    showAuthor: true
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
    hoverEffect: move-up
    title:
      text: Latest News & Insights
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock

  # --- 6. Divider ---
  - type: DividerSection
    title: Divider # Title seems optional here, maybe remove?
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7

  # --- 7. Voices of Change / Testimonials ---
  - type: CarouselSection
    title:
      text: Sustaining Africa's Future
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Perspectives from youth leaders and partners.
    items: # Populate with actual testimonials
      - type: FeaturedItem
        title: '"Partnering with The Catalyst Centre amplifies our shared goal of fostering sustainable development led by Africa''s youth."'
        tagline: Partner Perspective
        subtitle: 'Briggs Bomba, Zimbabwe | Trust Africa'
        text: "We believe in the power of youth-led initiatives to drive sustainable development. Partnering with The Catalyst Centre amplifies our shared goal of fostering sustainable development led by Africa's youth."
        image:
          url: /images/briggs.jpeg
          altText: Briggs Bomba photo
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
      - type: FeaturedItem
        title: '“The Catalyst Centre provided provided education for understanding carbon credits.”'
        tagline: Youth Leader Perspective
        subtitle: 'Ali Abdo, Egypt | Board Member'
        text: "The demand for carbon credits is skyrocketing, opening up a huge chance for small-scale clean energy and other carbon reduction projects in Africa. But, it’s not all sunshine and rainbows. The complexities of carbon markets (high costs, long processes, limited access to finance) can be tough to navigate."
        image:
          url: /images/abdo.jpeg
          altText: Ali Abdo photo
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
      - type: FeaturedItem
        title: '“We need to think of a sustainable Africa”'
        tagline: Youth Leader Perspective
        subtitle: 'Bogolo Kenewendo, Botswana | Minister of Minerals and Energy'
        text: "There is need to think of a sustainable Africa. We need to think of how we can use our resources sustainably and how we can ensure that the next generation has access to these resources."
        image:
          url: /images/bogolo.png
          altText: Bogolo Kenewendo photo
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
    variant: next-prev-nav
    colors: bg-light-fg-dark # Consider alternating background e.g., bg-neutral-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center

  # --- 8. Partner Logos ---
  - type: ImageGallerySection
    subtitle: Our Partners & Supporters
    images:
      - url: /images/walpe.jpeg
        altText: WALPE logo
        type: ImageBlock
      - url: /images/lti.png
        altText: LTI logo
        type: ImageBlock
      - url: /images/trustafrica.jpeg
        altText: Trust Africa logo
        type: ImageBlock
      - url: /images/ecosocc.jpeg
        altText: Ecosocc logo
        type: ImageBlock
      - url: /images/yiser.jpg
        altText: YISER logo
        type: ImageBlock
    motion: move-to-left
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
        padding:
          - pt-12
          - pb-12
      subtitle:
        textAlign: center

  # --- 9. Get In Touch ---
  - type: GenericSection
    title:
      text: Get In Touch
      color: text-dark
      type: TitleBlock
    subtitle: Connect with The Catalyst Centre
    text: |-
      Have questions or want to explore partnership opportunities? Reach out to us using the form below or through our contact details. We look forward to hearing from you.
    media:
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
          type: TextareaFormControl
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: FormBlock
      submitButton:
        type: SubmitButtonFormControl
        label: Send Message
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
    badge:
      label: Contact Us
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark

seo:
  metaTitle: The Catalyst Centre - Empowering Africa's Youth Leaders
  metaDescription: The Catalyst Centre is a youth-led non-profit empowering Africa's next generation to lead on climate action and sustainable resource governance.
  socialImage: /images/main-hero.jpg # Replace with actual social image path
  type: Seo
type: PageLayout
---
