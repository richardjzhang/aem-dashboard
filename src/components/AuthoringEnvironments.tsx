import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from 'react-aria-components';
import { authoringEnvironments } from '../data/mock';
import './AuthoringEnvironments.css';

const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

const headingStyle = style({
  font: 'heading',
  color: 'neutral',
});

export default function AuthoringEnvironments() {
  return (
    <section className={sectionStyle}>
      <h2 className={headingStyle}>My Authoring Environments</h2>
      <Table aria-label="Authoring environments" className="aem-env-table">
        <TableHeader>
          <Column isRowHeader id="type">Type</Column>
          <Column id="program">Program / Environment</Column>
        </TableHeader>
        <TableBody>
          {authoringEnvironments.map((env) => (
            <Row key={env.id} id={env.id}>
              <Cell>{env.type}</Cell>
              <Cell>{env.program} / {env.environment}</Cell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
