---
title: Contact Us
slug: /contact
sections:
  - title:
      text: Get In Touch
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: We'd Love to Hear From You
    text: >
      Whether you have questions about our programs, want to explore partnership opportunities, or wish to support our mission, please reach out. Connect with The Catalyst Centre team using the details below or the contact form.
    colors: bg-light-fg-dark # Simple background for intro
    styles:
      self:
        padding:
          - pt-32 # Adjust padding as needed
          - pl-4
          - pb-16
          - pr-4
        alignItems: center
        flexDirection: col
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
    type: GenericSection
  # Section containing the contact form
  - type: GenericSection # This defines the section type
    # No title needed here if the form is the main focus below the intro
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
        - name: subject # Added subject field
          label: Subject
          hideLabel: true
          placeholder: Subject
          isRequired: false
          width: full
          type: TextFormControl
        - name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          isRequired: true # Make message required
          width: full
          type: TextareaFormControl
      elementId: contact-page-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          # Example style: Add border or different background
          borderColor: border-neutral
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: FormBlock # This defines the media type as FormBlock
      submitButton:
        type: SubmitButtonFormControl
        label: Send Message
        showIcon: false # Icon optional
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: contact-page-submit
    # No badge needed for the form itself here
    colors: bg-light-fg-dark # Match intro or use different bg
    styles:
       self:
         padding: # Adjust padding around form
           - pt-0
           - pb-16
           - pl-16
           - pr-16
         # Center the form block if needed
         alignItems: center
         flexDirection: col
  - title:
      text: Other Ways to Connect
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    items:
      - title: Email Us
        subtitle: info@catalystcentre.org 
        actions:
          - type: Link
            label: info@catalystcentre.org
            url: mailto:info@catalystcentre.org 
        colors: bg-neutralAlt-fg-dark
        styles: { self: { padding: [pt-6, pb-6, pl-6, pr-6], textAlign: center, borderRadius: large, flexDirection: col } }
        type: FeaturedItem
      - title: Location
        subtitle: 67 North Street, Kempton Park, Johannesburg, South Africa
        colors: bg-neutralAlt-fg-dark
        styles: { self: { padding: [pt-6, pb-6, pl-6, pr-6], textAlign: center, borderRadius: large, flexDirection: col } }
        type: FeaturedItem
      - title: Follow Us
        subtitle: Connect on Social Media
        actions: 
           - type: Link
             label: LinkedIn
             url: https://www.linkedin.com/company/the-catalyst-centre/
             style: link 
           - type: Link
             label: Twitter
             url: https://x.com/catalyst_centre
             style: link
        colors: bg-neutralAlt-fg-dark
        styles: { self: { padding: [pt-6, pb-6, pl-6, pr-6], textAlign: center, borderRadius: large, flexDirection: col } }
        type: FeaturedItem
    variant: three-col-grid # Arrange details in grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pb-32 # Add padding at bottom
          - pt-16
          - pl-3
          - pr-3
        justifyContent: center
      subtitle: # This subtitle applies to the main section title, not items
        textAlign: center
    type: FeaturedItemsSection
seo:
  metaTitle: Contact Us - The Catalyst Centre
  metaDescription: Get in touch with The Catalyst Centre to learn more about our work, partnerships, or how to support our mission in Africa.
  socialImage: /images/catalyst-centre-contact-share.jpg # Use site default or specific image
  type: Seo
type: PageLayout
---