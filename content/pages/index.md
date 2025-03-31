---
title: Home
slug: /
sections:
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
        url: /about-us # Assumed URL, adjust as needed
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Link # Changed to Link for Learn More
      - label: Partner With Us
        altText: Partner with The Catalyst Centre
        url: /support-us # Assumed URL, adjust as needed
        showIcon: false
        icon: arrowRight # Icon kept for consistency, can be removed
        iconPosition: right
        style: secondary # Changed style for emphasis
        elementId: ''
        type: Button # Changed to Button for Partner With Us
    media:
      url: /images/main-hero.svg # Keeping placeholder image
      altText: Empowering Africa's Youth for a Sustainable Future preview
      elementId: ''
      type: ImageBlock
    badge:
      label: Youth-Led Initiative # More relevant badge
      color: text-primary
      type: Badge
    elementId: ''
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
        elementId: null
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
          elementId: ''
          url: /images/icon1.svg # Keeping placeholder image
          styles:
            self:
              borderRadius: x-large
      - title: Innovation
        subtitle: Tech & Data Driven
        text: >-
          Leveraging technology and data-driven solutions to amplify youth voices, influence policy, and promote sustainable practices.
        image:
          url: /images/icon2.svg # Keeping placeholder image
          altText: Innovation icon
          elementId: ''
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
        type: FeaturedItem
      - title: Collaboration
        subtitle: Networks & Action
        text: >-
          Building robust cross-border networks to foster collective action, knowledge-sharing, and solidarity among Africa's youth movements.
        image:
          url: /images/icon3.svg # Keeping placeholder image
          altText: Collaboration icon
          elementId: ''
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
        type: FeaturedItem
    actions:
      - label: Explore Our Programs
        altText: Explore The Catalyst Centre's Programs
        url: /our-work # Assumed URL, adjust as needed
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Button
    badge:
      label: How We Create Impact
      color: text-primary
      styles:
        self:
          textAlign: center
      type: Badge
    elementId: ''
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
  - subtitle: Our Partners & Supporters # Changed subtitle
    images: # Keeping placeholder images, replace with actual partner logos
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
      subtitle:
        textAlign: center
    type: ImageGallerySection
  - posts: # Assuming these link to blog posts or news items relevant to the Centre
      - content/pages/blog/case-study-1.md
      - content/pages/blog/case-study-2.md
      - content/pages/blog/case-study-3.md
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
    type: FeaturedPostsSection
    hoverEffect: move-up
    # Optional: Add Title/Subtitle for this section e.g., "Latest News & Insights"
    title:
      text: Latest News & Insights
      color: text-dark
      styles:
       self:
         textAlign: center
      type: TitleBlock
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - title:
      text: Fostering Youth-Led Climate Innovation
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Supporting young entrepreneurs developing sustainable solutions.
    text: |-
      Our climate innovation hubs provide resources and mentorship to empower young African entrepreneurs tackling environmental challenges through groundbreaking projects and startups. See how technology drives our mission.
    media: # Keeping video placeholder, replace with relevant media
      title: Youth Innovation in Action
      url: /images/placeholder-video.mp4
      controls: false
      aspectRatio: '16:9'
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: VideoBlock
      autoplay: true
      loop: true
      muted: true
    badge:
      label: Innovation Hubs
      color: text-primary
      styles:
        self:
          textAlign: center
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: col
        justifyContent: center
      subtitle:
        textAlign: center
    type: GenericSection
  # Removing generic sections or repurposing them if needed.
  # The original code had multiple generic sections, videos, social media, consulting sections.
  # These are removed or adapted above. Add back based on specific content needs.
  # Keep the Testimonial section but adapt the context.
  - type: CarouselSection
    title:
      text: Voices of Change
      color: text-dark
      styles:
        self:
         textAlign: center
      type: TitleBlock # Added title block
    subtitle: Perspectives from youth leaders and partners. # Changed subtitle
    items: # Keeping placeholder testimonials, replace with real ones
      - title: >-
          “The Catalyst Centre provided the tools and network I needed to advocate effectively for climate justice in my community.”
        tagline: Youth Leader Perspective # Adjusted tagline
        subtitle: 'Youth Participant, Country X' # Example
        text: >-
          Placeholder text describing the impact or experience. Update with genuine testimonials focusing on empowerment, skills gained, or project success.
        image:
          url: /images/person-placeholder-light.png
          altText: Youth Participant Photo
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
        type: FeaturedItem
      - title: >-
          "Partnering with The Catalyst Centre amplifies our shared goal of fostering sustainable development led by Africa's youth."
        tagline: Partner Perspective # Adjusted tagline
        subtitle: 'Partner Organization Name' # Example
        text: >-
          Placeholder text describing the value of the partnership. Update with genuine testimonials focusing on collaboration and shared impact.
        image:
          url: /images/person-placeholder-light.png # Placeholder
          altText: Partner Representative Photo
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
        type: FeaturedItem
      # Add more relevant testimonials as needed, removing generic ones.
    elementId: null
    variant: next-prev-nav
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
  # Repurposing the "Featured Items" section for key program areas or impact stats
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
      - title: Leadership Development
        tagline: Empowering Leaders
        subtitle: Training & Mentorship
        text: |
          Organizing dynamic leadership training, masterclasses, and mentorship programs tailored for African youth in climate action and resource governance.
        image:
          url: /images/abstract-feature1.svg # Placeholder
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
        type: FeaturedItem
      - title: Advocacy & Networks
        tagline: Amplifying Voices
        subtitle: Campaigns & Collaboration
        text: |
          Developing evidence-based advocacy campaigns and building cross-border networks to influence policy and enable collective action.
        image:
          url: /images/abstract-feature2.svg # Placeholder
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
        type: FeaturedItem
      - title: Research & Knowledge
        tagline: Informing Action
        subtitle: Data & Insights
        text: |
          Conducting cutting-edge research and creating accessible knowledge repositories to guide youth action, advocacy, and strategy.
        image:
          url: /images/abstract-feature1.svg # Placeholder, using again
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
        type: FeaturedItem
    variant: three-col-grid
    colors: bg-neutral-fg-dark
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
  # Optional: Contact Form Section (Keeping structure, adjusting text)
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
        elementId: null
    badge:
      label: Contact Us
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
seo: # Updated SEO information
  metaTitle: The Catalyst Centre - Empowering Africa's Youth Leaders
  metaDescription: The Catalyst Centre is a youth-led non-profit empowering Africa's next generation to lead on climate action and sustainable resource governance.
  socialImage: /images/main-hero.jpg # Keep or replace placeholder
  type: Seo
type: PageLayout
---
