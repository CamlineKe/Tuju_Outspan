export type ServiceSlug =
  | 'government'
  | 'education'
  | 'health'
  | 'documents'
  | 'design-branding'
  | 'computer-it'
  | 'online-career'
  | 'internet';

export interface ServiceItem {
  name: string;
  description: string;
  /** What the client should have ready, shown in the service enquiry modal. */
  details?: string;
  /** Optional full WhatsApp message override; defaults to a standard enquiry template. */
  waMessage?: string;
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
        details: 'Have your national ID and a phone number ready.',
      },
      {
        name: 'KRA PIN Updates',
        description: 'Corrections and updates to your KRA PIN details.',
        details: 'Have your current KRA PIN and the details that need changing.',
      },
      {
        name: 'NIL Returns Filing',
        description: 'Filing of nil tax returns to keep your KRA account compliant.',
        details: 'Have your KRA PIN and ID number ready.',
      },
      {
        name: 'Tax Compliance Certificate (TCC)',
        description: 'Application and follow-up for your tax compliance certificate.',
        details: 'Have your KRA PIN ready; we confirm any extra documents on WhatsApp.',
      },
      {
        name: 'eCitizen Services',
        description: 'Account setup and transactions on the eCitizen platform.',
        details: 'Have your ID and a phone number ready for account setup.',
      },
      {
        name: 'NTSA Driving License Services',
        description: 'Application, renewal, and follow-up for driving licenses.',
        details: 'Have your ID, phone number, and current license details ready.',
      },
      {
        name: 'Smart DL Application',
        description: 'Digital driving license application and collection.',
        details: 'Have your ID and a recent passport photo ready.',
      },
      {
        name: 'TIMS Account Services',
        description: 'TIMS account creation and transactions.',
        details: 'Have your ID and logbook details ready.',
      },
      {
        name: 'Logbook Assistance',
        description: 'Logbook applications, duplicates, and related processes.',
        details: 'Have your logbook (if available) and ID ready.',
      },
      {
        name: 'Vehicle Ownership Transfer',
        description: 'Transfer of vehicle ownership handled end to end.',
        details: 'Have the logbook and the buyer and seller IDs ready.',
      },
      {
        name: 'Passport Applications',
        description: 'Passport booking, application, and tracking.',
        details: 'Have your ID or birth certificate, passport photos, and a phone number ready.',
      },
      {
        name: 'Good Conduct Applications',
        description: 'Certificate of good conduct application and tracking.',
        details: 'Have your ID and a phone number ready.',
      },
      {
        name: 'Birth Certificate Applications',
        description: 'Birth certificate application and follow-up.',
        details: 'Have details for both parents and your ID or birth certificate ready.',
      },
      {
        name: 'Civil Applications',
        description: 'Assistance with other civil registration processes.',
        details: 'Tell us which civil document you need; have your ID ready.',
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
    imagePath: '/images/services/education.webp',
    services: [
      {
        name: 'KUCCPS Applications',
        description: 'Course application and placement for new students.',
        details: 'Have your KCSE index number and phone number ready.',
      },
      {
        name: 'KUCCPS Revision and Course Transfer',
        description: 'Revision of choices and course transfer requests.',
        details: 'Have your KCSE index number and current course details ready.',
      },
      {
        name: 'HELB Applications (First Time)',
        description: 'First-time HELB loan applications handled accurately.',
        details: 'Have your ID, KCSE index number, and admission details ready.',
      },
      {
        name: 'HELB Subsequent Loan Applications',
        description: 'Renewal applications for continuing students.',
        details: 'Have your HELB account details ready.',
      },
      {
        name: 'HELB Appeals and Clearance',
        description: 'Appeals, clearance, and follow-up with HELB.',
        details: 'Have your HELB account details and the issue you need resolved ready.',
      },
      {
        name: 'Results Checking and Verification',
        description: 'Checking and verifying academic results.',
        details: 'Have your index number or registration details ready.',
      },
      {
        name: 'Academic Document Preparation',
        description: 'Preparation and formatting of academic documents.',
        details: 'Have the documents or notes you need prepared ready.',
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
    imagePath: '/images/services/health.webp',
    services: [
      {
        name: 'SHA Registration',
        description: 'Social Health Authority registration for new members.',
        details: 'Have your national ID and phone number ready.',
      },
      {
        name: 'SHA Updates and Changes',
        description: 'Updating personal details and beneficiary changes on SHA.',
        details: 'Have your SHA details and the changes you need made ready.',
      },
      {
        name: 'NSSF Services',
        description: 'NSSF registration and account assistance.',
        details: 'Have your ID and NSSF number (if you have one) ready.',
      },
      {
        name: 'NHIF Support and Applications',
        description: 'NHIF support, applications, and account help.',
        details: 'Have your ID and phone number ready.',
      },
      {
        name: 'Health Application Assistance',
        description: 'Help with health scheme applications and forms.',
        details: 'Tell us which health form or scheme you need help with; have your ID ready.',
      },
      {
        name: 'Account Assistance and Troubleshooting',
        description: 'Resolving account issues with health schemes.',
        details: 'Have the account details and a description of the issue ready.',
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
    imagePath: '/images/services/documents.webp',
    services: [
      {
        name: 'Printing',
        description: 'Black and white, color, and large format printing.',
        details: 'Have your document or file ready to share or bring in.',
      },
      {
        name: 'Photocopying',
        description: 'Fast, clean photocopies at competitive rates.',
        details: 'Bring the original documents or share files with us.',
      },
      {
        name: 'Scanning and Digital Conversion',
        description: 'Turning paper documents into digital files.',
        details: 'Have the documents ready to scan.',
      },
      {
        name: 'Lamination',
        description: 'Protective lamination for documents and cards.',
        details: 'Bring the documents or cards you need laminated.',
      },
      {
        name: 'Typing and Document Formatting',
        description: 'Typing handwritten notes and formatting documents.',
        details: 'Have the handwritten notes or draft ready.',
      },
      {
        name: 'Binding',
        description: 'Spiral, thermal, and perfect binding options.',
        details: 'Bring the pages or printed document you need bound.',
      },
      {
        name: 'Passport Photos',
        description: 'Standard size passport photos, ready instantly.',
        details: 'Walk in or send a clear photo; we confirm the specifications on WhatsApp.',
        waMessage:
          'Hi Tuju Outspan, I\'d like to enquire about passport photos. What are the specifications and cost?',
      },
      {
        name: 'Birth Certificate Applications',
        description: 'Application and follow-up for birth certificates.',
        details: 'Have details for both parents and your ID or birth certificate ready.',
      },
      {
        name: 'Academic Document Preparation',
        description: 'Preparation and formatting of academic documents.',
        details: 'Have the documents or notes you need prepared ready.',
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
    imagePath: '/images/services/design-branding.webp',
    services: [
      {
        name: 'Graphic Design and Logo Creation',
        description: 'Custom logos and graphic design for your brand.',
        details: 'Share your idea or reference images; tell us your brand colors.',
        waMessage:
          'Hi Tuju Outspan, I\'d like to enquire about logo design. Could you share samples, timelines, and a quote?',
      },
      {
        name: 'Posters and Banners',
        description: 'All sizes, print-ready.',
        details: 'Tell us the size and purpose; share any logos or text to include.',
      },
      {
        name: 'Business Cards and Flyers',
        description: 'Design and printing for cards and flyers.',
        details: 'Share your logo, details, and how many you need.',
      },
      {
        name: 'T-Shirt Printing and Custom Apparel',
        description: 'Custom prints for individuals, teams, and events.',
        details: 'Tell us the design, colors, sizes, and quantity.',
        waMessage:
          'Hi Tuju Outspan, I\'d like a quote for custom t-shirt printing. I\'ll share the design, sizes, and quantity.',
      },
      {
        name: 'Branding and Rebranding Packages',
        description: 'Complete branding packages for businesses.',
        details: 'Share your current brand and what you want to change.',
      },
      {
        name: 'Brochure and Menu Design',
        description: 'Print-ready brochures and menus.',
        details: 'Share your content, menu items, or brochure text.',
      },
      {
        name: 'Social Media Graphics',
        description: 'Posts, covers, and ad creatives for social media.',
        details: 'Tell us the platform, purpose, and any images or logos to use.',
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
    imagePath: '/images/services/computer-it.webp',
    services: [
      {
        name: 'Computer Package Classes',
        description: 'Basic to advanced computer training.',
        details: 'Tell us your level and the package you want to learn.',
      },
      {
        name: 'Software Installation',
        description: 'Office, design tools, and more.',
        details: 'Tell us the software you need and the device type.',
      },
      {
        name: 'Windows Installation and Setup',
        description: 'Windows installation, drivers, and setup.',
        details: 'Bring your machine in or tell us the model; have your license key if you have one.',
        waMessage:
          'Hi Tuju Outspan, I\'d like to enquire about Windows installation. What do I need to bring?',
      },
      {
        name: 'Data Backup and Recovery',
        description: 'Protecting and recovering your important data.',
        details: 'Describe what happened and what data you need recovered.',
      },
      {
        name: 'Virus and Malware Removal',
        description: 'Cleaning infected machines.',
        details: 'Bring your machine in; describe the issue you are seeing.',
      },
      {
        name: 'PC Troubleshooting and Repair',
        description: 'Diagnosing and fixing computer issues.',
        details: 'Describe the problem and bring your machine in.',
      },
      {
        name: 'System Optimization',
        description: 'Making your computer faster and more reliable.',
        details: 'Bring your machine in or describe the performance issue.',
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
    imagePath: '/images/services/online-career.webp',
    services: [
      {
        name: 'Email Creation and Setup',
        description: 'Gmail, Outlook, and business email setup.',
        details: 'Tell us the email provider and your preferred name; have your phone number ready.',
      },
      {
        name: 'Online Applications',
        description: 'Job, school, and program applications completed online.',
        details: 'Tell us the application and have your documents ready.',
      },
      {
        name: 'Online Form Filling',
        description: 'Accurate filling of online forms.',
        details: 'Tell us the form and have the required details ready.',
      },
      {
        name: 'CV Writing and Professional Editing',
        description: 'Clean, professional CVs that stand out.',
        details: 'Share your education, experience, and the role you are targeting.',
        waMessage:
          'Hi Tuju Outspan, I\'d like help with my CV. I\'ll share my education and experience details.',
      },
      {
        name: 'Job Application Support',
        description: 'End-to-end help applying for jobs.',
        details: 'Share your CV and the jobs you want to apply for.',
      },
      {
        name: 'Online Research and Data Collection',
        description: 'Research and data gathering for any purpose.',
        details: 'Tell us the topic and the format you need the results in.',
      },
      {
        name: 'Social Media Account Setup',
        description: 'Creating and setting up social media accounts.',
        details: 'Tell us the platform and have your phone number or email ready.',
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
  {
    slug: 'internet',
    name: 'Internet Services & Internet Sales',
    headline: 'Internet Services & Internet Sales',
    subheadline:
      'High-speed internet access, data sales, and reliable Wi-Fi at only KSh 2 per minute.',
    icon: 'Wifi',
    imagePath: '/images/services/internet.webp',
    services: [
      {
        name: 'High-speed Internet Access',
        description: 'Fast, reliable connection for any online task.',
        details: 'This is a walk-in service at the shop; no account needed.',
        waMessage:
          'Hi Tuju Outspan, I\'d like to enquire about high-speed internet access at your shop. How do I get started?',
      },
      {
        name: 'Internet Data Sales',
        description: 'Data bundles for your phone or device, sold at the shop.',
        details: 'Tell us your network and how much data you need.',
        waMessage:
          'Hi Tuju Outspan, I\'d like to enquire about data bundles. What networks and bundles do you currently have?',
      },
      {
        name: 'Reliable Wi-Fi Services',
        description: 'Stable Wi-Fi connection for browsing and work.',
        details: 'This is available at the shop; walk in to connect.',
      },
      {
        name: 'Fast Downloads & Uploads',
        description: 'Quick file transfers, downloads, and uploads.',
        details: 'Bring your device or files; the service runs at the shop.',
      },
      {
        name: 'Online Gaming Access',
        description: 'Smooth connection for online gaming.',
        details: 'Walk into the shop; bring your account login details.',
      },
      {
        name: 'Smooth Video Streaming',
        description: 'Buffer-free streaming for videos and media.',
        details: 'This is available at the shop; bring your account login if needed.',
      },
      {
        name: 'Email Access',
        description: 'Check, send, and manage your email with ease.',
        details: 'Have your email login details ready.',
      },
      {
        name: 'Online Applications',
        description: 'Complete applications and forms with reliable internet.',
        details: 'Tell us the application and have your documents ready.',
      },
      {
        name: 'Internet Browsing for Research, Work & Study',
        description: 'Browsing support for assignments, work, and research.',
        details: 'Tell us your assignment or research topic; bring your files if needed.',
      },
    ],
    processSteps: [
      {
        title: 'Walk In and Start',
        description:
          'Visit our shop around Slaughter, Chuka University premises, and request internet access.',
      },
      {
        title: 'Connect and Use',
        description: 'Browse, stream, game, download, or work at high speed.',
      },
      {
        title: 'Pay Per Minute',
        description: 'Pay only KSh 2 per minute when you finish your session.',
      },
    ],
    faqs: [
      {
        question: 'How much does internet access cost?',
        answer: 'Internet access is only KSh 2 per minute. Pay for the time you use when you finish.',
      },
      {
        question: 'Where is the internet service available?',
        answer:
          'The service is available at our shop around Slaughter, Chuka University premises. It is a walk-in service.',
      },
      {
        question: 'Do I need an account or appointment?',
        answer: 'No. Walk into the shop and start your session right away.',
      },
      {
        question: 'Can I download large files or stream videos?',
        answer:
          'Yes. Fast downloads and uploads, online gaming, and smooth video streaming are all supported.',
      },
      {
        question: 'Do you sell internet data?',
        answer: 'Yes, internet data sales are available. Ask us on WhatsApp for available bundles.',
      },
    ],
    pricingNote:
      'Internet access at only KSh 2 per minute. Available at our shop around Slaughter, Chuka University premises.',
    related: ['online-career', 'education', 'documents'],
  },
];

export function getServiceCategory(slug: ServiceSlug): ServiceCategory | undefined {
  return serviceCategories.find((category) => category.slug === slug);
}
