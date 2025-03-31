---
title: Support Us
slug: /support-us
sections:
  # --- 1. Introduction ---
  - type: GenericSection
    title:
      text: Support the Catalyst Centre
      color: text-dark # Or text-secondary
      type: TitleBlock
    subtitle: Empower Africa's Next Generation of Leaders
    text: >
      Your support is crucial in empowering young Africans to lead on climate action and sustainable resource governance[cite: 5]. By contributing to the Catalyst Centre, you invest in a future for Africa that is equitable, environmentally sustainable, and economically just[cite: 5]. Help us provide the knowledge, skills, and platforms needed for transformative change.
    actions:
      - label: Donate Now
        altText: Donate to The Catalyst Centre
        url: '#donate' # Internal link to donation section below
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary # Prominent CTA
        type: Button
    colors: bg-neutral-fg-dark
    styles:
      self: { padding: [pt-24, pb-16, pl-4, pr-4], alignItems: center }
      title: { textAlign: center }
      subtitle: { textAlign: center }
      text: { textAlign: center, maxWidth: large }

  # --- 2. Donation Section ---
  - type: GenericSection
    elementId: donate # ID for the internal link #donate
    title:
      text: Make a Donation
      color: text-light # Text color on dark background
      type: TitleBlock
    subtitle: Your Contribution Fuels Change
    text: |-
      Every donation, large or small, directly supports our programs – from youth leadership training and advocacy campaigns to vital research and tech innovation. Help us build capacity and amplify youth voices across Africa.
    actions:
      - label: Donate Securely Online
        altText: Donate to The Catalyst Centre via our secure platform
        url: /link-to-your-donation-platform # IMPORTANT: Replace with your actual donation link
        showIcon: false
        style: light # Button style for dark background (Needs definition in CSS or adjust style name)
        # OR use primary style if it contrasts well:
        # style: primary
        type: Button
    # Use a contrasting background for emphasis
    colors: bg-dark-fg-light # Dark blue background, light text
    styles:
      self: { padding: [pt-16, pb-16, pl-4, pr-4], alignItems: center }
      title: { textAlign: center }
      subtitle: { textAlign: center }
      text: { textAlign: center, maxWidth: medium, color: 'text-light/90' } # Slightly muted text

  # --- 3. Partnership Section ---
  - type: GenericSection
    title:
      text: Partner With Us
      color: text-secondary # Use secondary color for heading
      type: TitleBlock
    subtitle: Collaborate for Greater Impact
    text: >
      We actively seek partnerships with organizations, institutions, and businesses aligned with our mission[cite: 52]. Collaboration is key to scaling our impact, diversifying support[cite: 53], and achieving systemic change. Let's work together to empower Africa's youth and build a sustainable future. Contact us at partnerships@catalystcentre.org (or use the main contact form) to discuss opportunities.
    # Optional: Add partner logos here again or examples of partnership types
    colors: bg-light-fg-dark
    styles:
      self: { padding: [pt-16, pb-16, pl-4, pr-4], alignItems: center }
      title: { textAlign: center }
      subtitle: { textAlign: center }
      text: { textAlign: center, maxWidth: large }

  # --- 4. Other Ways to Support ---
  - type: FeaturedItemsSection
    title:
      text: More Ways to Get Involved
      color: text-dark
      type: TitleBlock
    subtitle: Your time and voice matter too
    items:
      - type: FeaturedItem
        title: Spread the Word
        text: "Follow us on social media and share our mission, stories, and podcast with your network."
        # Add social link actions if desired
        colors: bg-neutralAlt-fg-dark
        styles: { self: { padding: [pt-8, pb-8, pl-8, pr-8], borderRadius: x-large, textAlign: center } }
      - type: FeaturedItem
        title: Volunteer (Future)
        text: "We anticipate future opportunities for volunteers. Express your interest via our contact form." # Adjust if volunteering is currently active
        colors: bg-neutralAlt-fg-dark
        styles: { self: { padding: [pt-8, pb-8, pl-8, pr-8], borderRadius: x-large, textAlign: center } }
      - type: FeaturedItem
        title: Stay Informed
        text: "Subscribe to our newsletter (if available) to receive updates on our work and impact."
        # Add newsletter signup link/form if applicable
        colors: bg-neutralAlt-fg-dark
        styles: { self: { padding: [pt-8, pb-8, pl-8, pr-8], borderRadius: x-large, textAlign: center } }
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self: { padding: [pt-16, pb-24, pl-8, pr-8], justifyContent: center }
      title: { textAlign: center }
      subtitle: { textAlign: center }

seo:
  metaTitle: Support Us - The Catalyst Centre
  metaDescription: Support the Catalyst Centre's mission to empower Africa's youth leaders. Donate, partner, or find other ways to get involved.
  socialImage: /images/catalyst-centre-social-share.jpg # Replace or use site default
  type: Seo
type: PageLayout
---