import { Thing, WithContext } from "schema-dts";

interface SchemaRendererProps {
  schema: WithContext<Thing>;
}


export default function SchemaRenderer({ schema }: SchemaRendererProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
