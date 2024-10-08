import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function ToolsSection({ children, ...props }: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export const metadata = {
  title: 'Uses',
  description: 'Tools, software, and gadgets I use daily as a software engineer.',
};

export default function Uses() {
  return (
    <SimpleLayout
      title="Tools and software I use daily to build, optimize, and stay productive."
      intro="Here's a list of tools and gadgets I use for developing software, staying productive, and keeping up with the latest technologies. Some of these tools have been real game changers for me."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
            This machine handles everything I throw at it, from large Salesforce deployments to
            complex React apps. The performance is incredible and the fan noise is non-existent.
          </Tool>
          <Tool title="Dell UltraSharp 32” 4K USB-C Hub Monitor">
            A high-resolution monitor that provides plenty of screen real estate for multitasking,
            coding, and reviewing data dashboards.
          </Tool>
          <Tool title="Logitech MX Master 3">
            My go-to mouse for productivity. Its ergonomic design and programmable buttons make it
            perfect for long coding sessions.
          </Tool>
          <Tool title="ErgoDox EZ Keyboard">
            A split mechanical keyboard designed for ergonomics. I love the customization options
            and the way it reduces hand strain over long periods.
          </Tool>
          <Tool title="Herman Miller Embody Chair">
            Sitting for long hours can be taxing, and this chair provides the support I need to
            maintain comfort during work.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            My favorite code editor. With its vast ecosystem of extensions and built-in Git support,
            it’s perfect for both TypeScript and Salesforce development.
          </Tool>
          <Tool title="iTerm2">
            A powerful terminal replacement for macOS. I use it for everything from running scripts
            to working with APIs via the command line.
          </Tool>
          <Tool title="Postman">
            Postman is my go-to tool for testing APIs and integrating external systems, making API
            workflows much more manageable.
          </Tool>
          <Tool title="TablePlus">
            Excellent software for managing and querying databases. It makes working with SQL
            databases much easier and more efficient.
          </Tool>
          <Tool title="GitHub Copilot">
            AI-driven code suggestions that speed up my coding process significantly, especially for
            repetitive tasks and code patterns.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design and Prototyping">
          <Tool title="Figma">
            I use Figma for quick mockups and wireframing. It's a fantastic collaboration tool that
            helps to communicate ideas visually.
          </Tool>
          <Tool title="Mermaid">
            I use Mermaid for creating diagrams and visualizing workflows within documentation. It’s
            great for flowcharts, Gantt charts, and sequence diagrams.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            My digital brain for managing tasks, tracking projects, and storing documentation. I use
            Notion for everything from note-taking to creating personal and professional knowledge
            bases.
          </Tool>
          <Tool title="Reflect">
            A fantastic daily notes system that helps me track ideas, progress, and personal
            reflections. It’s part of my daily routine to clear my mind and track what matters.
          </Tool>
          <Tool title="SavvyCal">
            Scheduling meetings without overloading my calendar is key for maintaining productivity.
            SavvyCal helps me balance work and deep focus time.
          </Tool>
          <Tool title="Focus">
            A simple tool for blocking distracting websites and apps during focused work sessions,
            ensuring that I stay on task.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}
