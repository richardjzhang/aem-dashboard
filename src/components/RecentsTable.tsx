import { Link, Badge } from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from 'react-aria-components';
import { recentItems } from '../data/mock';
import type { RecentItem } from '../data/types';
import './DataTable.css';

const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  width: 'full',
  minWidth: 0,
  alignItems: 'stretch',
});

const headingStyle = style({
  font: 'heading',
  color: 'neutral',
});

function StatusBadge({ status }: { status: RecentItem['status'] }) {
  const variant = status === 'Ready' || status === 'Finished' ? 'positive' : 'neutral';
  return (
    <Badge variant={variant} fillStyle="subtle" size="S">
      {status}
    </Badge>
  );
}

export default function RecentsTable() {
  return (
    <section className={sectionStyle}>
      <h2 className={headingStyle}>Recents</h2>
      <Table aria-label="Recent items" className="aem-data-table">
        <TableHeader>
          <Column isRowHeader id="name">Name</Column>
          <Column id="type">Type</Column>
          <Column id="status">Status</Column>
          <Column id="lastAccessed">Last accessed</Column>
        </TableHeader>
        <TableBody>
          {recentItems.map((item) => (
            <Row key={item.id} id={item.id}>
              <Cell>
                <Link href={item.href} variant="primary">
                  {item.name}
                </Link>
              </Cell>
              <Cell>{item.type}</Cell>
              <Cell>
                <StatusBadge status={item.status} />
              </Cell>
              <Cell>{item.lastAccessed}</Cell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
