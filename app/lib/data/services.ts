export type ServiceSlug =
  | 'government'
  | 'education'
  | 'health'
  | 'documents'
  | 'design-branding'
  | 'computer-it'
  | 'online-career';

export interface ServiceItem {
  name: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceCategory {
  slug: ServiceSlug;
  name: string;
  headline: string;
  subheadline: string;
  icon: string; // Lucide icon name
  imagePath?: string; // optional photo for the Service Breakdown visual column
  services: ServiceItem[];
  processSteps: ProcessStep[];
  faqs: FAQ[];
  pricingNote: string;
  related: ServiceSlug[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'government',
    name: 'Government Services',
    headline: 'Government Services',
    subheadline: 'KRA, NTSA, eCitizen, passports, and more, handled fast and accurately.',
    icon: 'Landmark',
    imagePath: '/images/services/government.webp',
    services: [
      {
        name: 'KRA PIN Registration',
        description: 'New KRA PIN registration for individuals and businesses.',
      },
      { name: 'KRA PIN Updates', description: 'Corrections and updates to your KRA PIN details.' },
      {
        name: 'NIL Returns Filing',
        description: 'Filing of nil tax returns to keep your KRA account compliant.',
      },
      {
        name: 'Tax Compliance Certificate (TCC)',
        description: 'Application and follow-up for your tax compliance certificate.',
      },
      {
        name: 'eCitizen Services',
        description: 'Account setup and transactions on the eCitizen platform.',
      },
      {
        name: 'NTSA Driving License Services',
        description: 'Application, renewal, and follow-up for driving licenses.',
      },
      {
        name: 'Smart DL Application',
        description: 'Digital driving license application and collection.',
      },
      { name: 'TIMS Account Services', description: 'TIMS account creation and transactions.' },
      {
        name: 'Logbook Assistance',
        description: 'Logbook applications, duplicates, and related processes.',
      },
      {
        name: 'Vehicle Ownership Transfer',
        description: 'Transfer of vehicle ownership handled end to end.',
      },
      {
        name: 'Passport Applications',
        description: 'Passport booking, application, and tracking.',
      },
      {
        name: 'Good Conduct Applications',
        description: 'Certificate of good conduct application and tracking.',
      },
      {
        name: 'Birth Certificate Applications',
        description: 'Birth certificate application and follow-up.',
      },
      {
        name: 'Civil Applications',
        description: 'Assistance with other civil registration processes.',
      },
    ],
    processSteps: [
      {
        title: 'Send Your Details',
        description: 'Message us on WhatsApp with the service you need.',
      },
      {
        title: 'We Process and Submit',
        description: 'Our team handles the application on your behalf.',
      },
      {
        title: 'Receive Confirmation',
        description: 'Get your confirmation and documents once processed.',
      },
    ],
    faqs: [
      {
        question: 'How long does KRA PIN registration take?',
        answer:
          'Usually within a day once your ID details are confirmed. We update you on WhatsApp.',
      },
      {
        question: 'What documents do I need for a passport application?',
        answer:
          'A copy of your ID or birth certificate plus passport photos. We confirm the full list when you message us.',
      },
      {
        question: 'Is my information secure?',
        answer:
          'Yes. Your details are used only for the service you request and are handled with care.',
      },
      {
        question: 'Do you handle NTSA driving license services?',
        answer: 'Yes, including Smart DL applications, renewals, and follow-ups.',
      },
      {
        question: 'Can you help with logbook and vehicle transfer?',
        answer:
          'Yes, including TIMS account services, logbook assistance, and ownership transfers.',
      },
    ],
    pricingNote:
      'Rates vary by service complexity. No hidden fees. Get an exact quote on WhatsApp.',
    related: ['documents', 'education'],
  },
  {
    slug: 'education',
    name: 'Education Services',
    headline: 'Education Services',
    subheadline: 'KUCCPS, HELB, and academic support made simple.',
    icon: 'GraduationCap',
    services: [
      {
        name: 'KUCCPS Applications',
        description: 'Course application and placement for new students.',
      },
      {
        name: 'KUCCPS Revision and Course Transfer',
        description: 'Revision of choices and course transfer requests.',
      },
      {
        name: 'HELB Applications (First Time)',
        description: 'First-time HELB loan applications handled accurately.',
      },
      {
        name: 'HELB Subsequent Loan Applications',
        description: 'Renewal applications for continuing students.',
      },
      {
        name: 'HELB Appeals and Clearance',
        description: 'Appeals, clearance, and follow-up with HELB.',
      },
      {
        name: 'Results Checking and Verification',
        description: 'Checking and verifying academic results.',
      },
      {
        name: 'Academic Document Preparation',
        description: 'Preparation and formatting of academic documents.',
      },
    ],
    processSteps: [
      {
        title: 'Share Your Details',
        description: 'Send your admission or student information on WhatsApp.',
      },
      {
        title: 'We Complete the Application',
        description: 'Your application is filled in accurately and submitted.',
      },
      {
        title: 'Track and Confirm',
        description: 'We track the status and confirm once it is done.',
      },
    ],
    faqs: [
      {
        question: 'When is the KUCCPS deadline?',
        answer:
          'Deadlines change each intake. Message us and we confirm the current deadline for your case.',
      },
      {
        question: 'What do I need for my first HELB application?',
        answer: 'Your ID, KCSE index number, and admission details. We guide you through the rest.',
      },
      {
        question: 'Can you help with HELB appeals?',
        answer: 'Yes, including appeals, clearance, and follow-up.',
      },
      {
        question: 'Can you check my results for me?',
        answer: 'Yes, results checking and verification are part of the education services.',
      },
    ],
    pricingNote: 'Student-friendly rates. Ask for a quote on WhatsApp.',
    related: ['online-career', 'documents'],
  },
  {
    slug: 'health',
    name: 'Health and Social Services',
    headline: 'Health and Social Services',
    subheadline: 'SHA, NSSF, NHIF, and health account support.',
    icon: 'HeartPulse',
    services: [
      {
        name: 'SHA Registration',
        description: 'Social Health Authority registration for new members.',
      },
      {
        name: 'SHA Updates and Changes',
        description: 'Updating personal details and beneficiary changes on SHA.',
      },
      { name: 'NSSF Services', description: 'NSSF registration and account assistance.' },
      {
        name: 'NHIF Support and Applications',
        description: 'NHIF support, applications, and account help.',
      },
      {
        name: 'Health Application Assistance',
        description: 'Help with health scheme applications and forms.',
      },
      {
        name: 'Account Assistance and Troubleshooting',
        description: 'Resolving account issues with health schemes.',
      },
    ],
    processSteps: [
      { title: 'Share Your ID and Details', description: 'Send your details on WhatsApp.' },
      {
        title: 'We Register or Update',
        description: 'Your account is registered or updated correctly.',
      },
      { title: 'Receive Confirmation', description: 'Get your confirmation and next steps.' },
    ],
    faqs: [
      {
        question: 'What is the difference between SHA and NHIF?',
        answer:
          'SHA is the newer social health scheme that replaced NHIF. We explain which applies to you and help you register or update.',
      },
      {
        question: 'How do I update my SHA details?',
        answer:
          'Send us your ID and the changes needed. We handle the update and confirm once done.',
      },
      {
        question: 'How long does registration take?',
        answer: 'Usually within a day once your details are confirmed.',
      },
    ],
    pricingNote: 'Affordable rates for all health services. Quote on WhatsApp.',
    related: ['documents'],
  },
  {
    slug: 'documents',
    name: 'Document Services',
    headline: 'Document Services',
    subheadline:
      'Printing, scanning, typing, binding, and more, with professional quality and fast turnaround.',
    icon: 'FileText',
    services: [
      { name: 'Printing', description: 'Black and white, color, and large format printing.' },
      { name: 'Photocopying', description: 'Fast, clean photocopies at competitive rates.' },
      {
        name: 'Scanning and Digital Conversion',
        description: 'Turning paper documents into digital files.',
      },
      { name: 'Lamination', description: 'Protective lamination for documents and cards.' },
      {
        name: 'Typing and Document Formatting',
        description: 'Typing handwritten notes and formatting documents.',
      },
      { name: 'Binding', description: 'Spiral, thermal, and perfect binding options.' },
      { name: 'Passport Photos', description: 'Standard size passport photos, ready instantly.' },
      {
        name: 'Birth Certificate Applications',
        description: 'Application and follow-up for birth certificates.',
      },
      {
        name: 'Academic Document Preparation',
        description: 'Preparation and formatting of academic documents.',
      },
    ],
    processSteps: [
      {
        title: 'Bring or Send Your Document',
        description: 'Share it via WhatsApp or email, or walk in.',
      },
      {
        title: 'We Process It',
        description: 'Your document is handled with professional quality.',
      },
      {
        title: 'Pick Up or Receive Digitally',
        description: 'Collect at Ikonge-Ekerenyo or receive the digital file.',
      },
    ],
    faqs: [
      {
        question: 'Do you print posters and banners?',
        answer: 'Yes, including large format printing.',
      },
      {
        question: 'Can you type my handwritten notes?',
        answer: 'Yes, typing and document formatting are part of the service.',
      },
      {
        question: 'What binding options do you offer?',
        answer: 'Spiral, thermal, and perfect binding.',
      },
      {
        question: 'Can you take passport photos?',
        answer: 'Yes, standard size and ready instantly.',
      },
    ],
    pricingNote: 'Competitive per-page and per-item rates. Ask for a quote.',
    related: ['design-branding', 'government'],
  },
  {
    slug: 'design-branding',
    name: 'Design and Branding',
    headline: 'Design and Branding',
    subheadline: 'Professional graphics, branding, and print-ready designs.',
    icon: 'Palette',
    services: [
      {
        name: 'Graphic Design and Logo Creation',
        description: 'Custom logos and graphic design for your brand.',
      },
      { name: 'Posters and Banners', description: 'All sizes, print-ready.' },
      {
        name: 'Business Cards and Flyers',
        description: 'Design and printing for cards and flyers.',
      },
      {
        name: 'T-Shirt Printing and Custom Apparel',
        description: 'Custom prints for individuals, teams, and events.',
      },
      {
        name: 'Branding and Rebranding Packages',
        description: 'Complete branding packages for businesses.',
      },
      { name: 'Brochure and Menu Design', description: 'Print-ready brochures and menus.' },
      {
        name: 'Social Media Graphics',
        description: 'Posts, covers, and ad creatives for social media.',
      },
    ],
    processSteps: [
      {
        title: 'Describe Your Vision',
        description: 'Share your idea or reference images on WhatsApp.',
      },
      { title: 'We Design and Share Drafts', description: 'Drafts are shared for your approval.' },
      {
        title: 'Receive Your Files or Prints',
        description: 'Get print-ready files or physical prints.',
      },
    ],
    faqs: [
      {
        question: 'How many revisions are included?',
        answer: 'We agree on the revision count when we quote the project.',
      },
      {
        question: 'Do you provide the source files?',
        answer: 'Yes, depending on the package you choose.',
      },
      {
        question: 'Can you handle bulk orders for events?',
        answer: 'Yes, we handle bulk printing and custom apparel for events.',
      },
    ],
    pricingNote: 'Custom quotes based on project scope. Let us discuss on WhatsApp.',
    related: ['documents', 'online-career'],
  },
  {
    slug: 'computer-it',
    name: 'Computer and IT Services',
    headline: 'Computer and IT Services',
    subheadline: 'From software installation to troubleshooting, we have your tech covered.',
    icon: 'Laptop',
    services: [
      { name: 'Computer Package Classes', description: 'Basic to advanced computer training.' },
      { name: 'Software Installation', description: 'Office, design tools, and more.' },
      {
        name: 'Windows Installation and Setup',
        description: 'Windows installation, drivers, and setup.',
      },
      {
        name: 'Data Backup and Recovery',
        description: 'Protecting and recovering your important data.',
      },
      { name: 'Virus and Malware Removal', description: 'Cleaning infected machines.' },
      {
        name: 'PC Troubleshooting and Repair',
        description: 'Diagnosing and fixing computer issues.',
      },
      {
        name: 'System Optimization',
        description: 'Making your computer faster and more reliable.',
      },
    ],
    processSteps: [
      {
        title: 'Describe Your Issue',
        description: 'Tell us the problem or learning goal on WhatsApp.',
      },
      {
        title: 'We Diagnose and Propose',
        description: 'We assess the issue and propose a solution.',
      },
      {
        title: 'Fix or Schedule Classes',
        description: 'The fix is completed or classes are scheduled.',
      },
    ],
    faqs: [
      {
        question: 'How long does a Windows installation take?',
        answer: 'Most installations are done within a few hours depending on the machine.',
      },
      {
        question: 'Do you offer home visits?',
        answer:
          'We mainly serve walk-ins at the cyber center. Ask us on WhatsApp for special arrangements.',
      },
      {
        question: 'What computer packages do you teach?',
        answer: 'Basic to advanced packages. Tell us your level and goal.',
      },
    ],
    pricingNote: 'Service-based pricing. Get a quote on WhatsApp.',
    related: ['online-career', 'documents'],
  },
  {
    slug: 'online-career',
    name: 'Online and Career Services',
    headline: 'Online and Career Services',
    subheadline: 'Email setup, CV writing, job applications, and online research, done right.',
    icon: 'Briefcase',
    services: [
      {
        name: 'Email Creation and Setup',
        description: 'Gmail, Outlook, and business email setup.',
      },
      {
        name: 'Online Applications',
        description: 'Job, school, and program applications completed online.',
      },
      { name: 'Online Form Filling', description: 'Accurate filling of online forms.' },
      {
        name: 'CV Writing and Professional Editing',
        description: 'Clean, professional CVs that stand out.',
      },
      { name: 'Job Application Support', description: 'End-to-end help applying for jobs.' },
      {
        name: 'Online Research and Data Collection',
        description: 'Research and data gathering for any purpose.',
      },
      {
        name: 'Social Media Account Setup',
        description: 'Creating and setting up social media accounts.',
      },
    ],
    processSteps: [
      { title: 'Share Your Goal', description: 'Send your goal or document on WhatsApp.' },
      {
        title: 'We Complete the Task',
        description: 'The online task is done or your CV is crafted.',
      },
      { title: 'Review and Submit', description: 'You review, approve, and we submit.' },
    ],
    faqs: [
      {
        question: 'How long does CV writing take?',
        answer: 'Usually within a day once we receive your details.',
      },
      {
        question: 'Can you apply for jobs on my behalf?',
        answer: 'Yes, we complete and submit applications with your approval.',
      },
      {
        question: 'Do you help with scholarship applications?',
        answer: 'Yes, including online applications and form filling.',
      },
    ],
    pricingNote: 'Affordable per-service rates. Quote on WhatsApp.',
    related: ['education', 'documents'],
  },
];

export function getServiceCategory(slug: ServiceSlug): ServiceCategory | undefined {
  return serviceCategories.find((category) => category.slug === slug);
}
