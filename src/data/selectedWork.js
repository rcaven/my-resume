// Selected Work case studies.
//
// Accuracy notes for future edits:
// - Linked pages are live public properties that keep evolving. They are
//   labelled as representative, never as "my work" or as a preserved snapshot.

export const selectedWorkIntro =
  'A selection of web-platform and digital-experience work spanning healthcare, cloud technology, and direct-to-consumer commerce. My contributions have included hands-on engineering, reusable platform development, team leadership, technical strategy, analytics, performance, privacy, and cross-functional delivery.';

export const selectedWorkDisclaimer =
  'Linked sites are live public properties that have continued to evolve since my involvement. They are included as representative context, not as snapshots of my work.';

export const selectedWork = [
  {
    id: 'onemedical',
    color: 'purple',
    company: 'One Medical',
    title: 'Scaling Office Launches Through Reusable Web Experiences',
    role: 'Web Development Manager',
    overview:
      'Managed the web-development function supporting One Medical’s consumer-facing digital experience, including the systems and workflows used to introduce and maintain office-location pages across the stages of an office launch.',
    contributions: [
      'Managed web-development planning and execution while partnering with marketing, design, operations, clinical stakeholders, and other business teams.',
      'Created and operationalized a phased model for office-location pages, replacing a single page that went live only once an office opened.',
      'Established reusable page patterns and content structures so office information could evolve without a new implementation for every location.',
      'Balanced reusable platform standards against the individual needs and timelines of each market and office.',
    ],
    phasesIntro:
      'Previously a single location page went live on opening day, so an office had no web presence while it was being announced and built. I introduced three stages, each with a distinct job.',
    phases: [
      {
        label: 'Pre-launch',
        description:
          'Introduce the upcoming office, communicate anticipated availability, support local awareness, and provide an appropriate next action before the office opens.',
      },
      {
        label: 'Launch',
        description:
          'Publish complete operational and conversion information when the office begins serving patients.',
      },
      {
        label: 'Post-launch',
        description:
          'Maintain the page as an evergreen patient resource with current hours, services, providers, directions, transportation, parking, and booking pathways.',
      },
    ],
    impact:
      'Replaced a fragmented office-launch process with a phased, URL-first approach. Previously, paid media campaigns relied on temporary duplicate service pages, while the permanent office page did not launch until opening day. By publishing the actual office URL months in advance and evolving its content through pre-launch, launch, and post-launch stages, the new model allowed the page to begin building organic visibility earlier, gave paid media a single destination throughout the campaign, and eliminated the need to create and later retire duplicate launch pages. This created a more consistent patient journey, reduced redundant web work, preserved traffic and campaign continuity on one canonical URL, and made office launches more scalable across markets.',
    tags: [
      'Web Development Management',
      'Reusable Templates',
      'Content Modeling',
      'Cross-Functional Delivery',
      'Location SEO',
      'Responsive Web Development',
      'Accessibility',
      'Operational Workflows',
    ],
    link: {
      href: 'https://www.onemedical.com/locations/sf/unionstreet/',
      label: 'View representative public site',
    },
  },
  {
    id: 'aws',
    color: 'blue',
    company: 'Amazon Web Services',
    title: 'Reusable Front-End Components for AWS.com',
    role: 'Front-End Engineer, Individual Contributor',
    overview:
      'Worked as an individual contributor on AWS.com, contributing production front-end code and reusable components to a large, global marketing and product-information ecosystem.',
    contributions: [
      'Built and maintained reusable React components used to create consistent web experiences across AWS.com.',
      'Translated design and business requirements into production-ready front-end implementations.',
      'Worked within established design-system, accessibility, internationalization, security, testing, and code-review standards.',
      'Diagnosed front-end issues and improved implementation quality across browsers, devices, and responsive layouts.',
    ],
    impact:
      'Helped teams publish consistent, scalable digital experiences by contributing reusable front-end building blocks within one of the world’s largest technology marketing websites.',
    scopeNote:
      'An individual-contributor role within a large engineering organization. I contributed components and fixes to a shared platform; I did not lead AWS.com, own the site, or direct its overall architecture.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'JavaScript',
      'HTML',
      'CSS',
      'AEM',
      'Component Architecture',
      'Accessibility',
      'Responsive Design',
      'Design Systems',
    ],
    link: {
      href: 'https://aws.amazon.com/',
      label: 'View representative public site',
    },
  },
  {
    id: 'blueland',
    color: 'green',
    company: 'Blueland',
    title: 'Technical Leadership for a Headless Commerce Platform',
    role: 'Technical Lead, Web',
    overview:
      'Served as Technical Lead for Web on Blueland’s business-critical direct-to-consumer commerce platform, working across engineering, marketing, analytics, operations, legal, and external technology partners.',
    contributions: [
      'Provided hands-on technical leadership for a headless Shopify stack built with React, TypeScript, Hydrogen, and a headless CMS.',
      'Led analytics and tag-management implementation across GA4, Google Tag Manager, Elevar, and reporting workflows.',
      'Established real-user monitoring and web-performance measurement practices using Core Web Vitals, GA4, and Looker Studio.',
      'Supported privacy and consent-management initiatives coordinated across technical, legal, analytics, and marketing stakeholders.',
    ],
    impact:
      'Strengthened the observability, performance discipline, privacy implementation, and operational reliability of a high-traffic commerce platform while continuing to support customer and business initiatives.',
    tags: [
      'React',
      'TypeScript',
      'Shopify Hydrogen',
      'Headless Commerce',
      'Pack CMS',
      'Recharge',
      'GA4',
      'Google Tag Manager',
      'Elevar',
      'Sentry',
      'Core Web Vitals',
      'Looker Studio',
      'Consent Management',
    ],
    link: {
      href: 'https://www.blueland.com/',
      label: 'View representative public site',
    },
  },
];
