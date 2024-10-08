import { type Metadata } from 'next';
import Image from 'next/image';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import logoInfosys from '/public/infosys-logo.png';
import logoGoldenTech from '/public/golden-logo.jpeg';
import logoCincom from '/public/cincom-logo.png';
import logoFidelity from '/public/fidelity-logo.png';
import logoFifthThird from '/public/fifth-third-logo.png';

const projects = [
  {
    name: 'Infosys Apex Optimization',
    description:
      'Engineered and optimized Apex classes, triggers, and batch processes for high-volume data operations, improving data processing speed by 30%.',
    link: { href: 'https://www.infosys.com/', label: 'infosys.com' },
    logo: logoInfosys, // Add your Infosys logo path here
  },
  {
    name: 'Golden Technology LWC Development',
    description:
      'Developed custom Salesforce solutions, including dynamic Lightning Web Components, improving user satisfaction and reducing development time by 15%.',
    link: { href: 'https://goldenitinc.com/', label: 'goldentechnology.com' },
    logo: logoGoldenTech, // Add your Golden Technology logo path here
  },
  {
    name: 'Cincom Salesforce Integration',
    description:
      'Integrated Salesforce with third-party systems for seamless data exchange, improving data accuracy by 20%.',
    link: { href: 'https://www.cincom.com/us/', label: 'cincom.com' },
    logo: logoCincom, // Add your Cincom logo path here
  },
  {
    name: 'Fidelity Investments Custom Workflows',
    description:
      'Developed custom workflows and processes using Apex, Visualforce, and Lightning components, increasing operational efficiency by 25%.',
    link: { href: 'https://www.fidelity.com/', label: 'fidelity.com' },
    logo: logoFidelity, // Add your Fidelity Investments logo path here
  },
  {
    name: 'Fifth Third Securities Compliance System',
    description:
      'Created a comprehensive compliance program, reducing the risk of non-compliance by 25%.',
    link: { href: 'https://www.53.com/content/fifth-third/en.html', label: '53.com' },
    logo: logoFifthThird, // Add your Fifth Third logo path here
  },
];

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Some of the projects I've worked on to help organizations improve their operations and customer data management.",
};

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects I've contributed to that have driven business transformation."
      intro="These projects represent my work across industries, focusing on Salesforce optimization, data integration, and system efficiency improvements."
    >
      <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={project.logo} alt={project.name} className="size-8" unoptimized />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-violet-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
}
