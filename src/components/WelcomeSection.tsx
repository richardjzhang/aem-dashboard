import { ActionButton, SearchField, Button, Text } from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import Edit from '@react-spectrum/s2/icons/Edit';
import Revert from '@react-spectrum/s2/icons/Revert';
import { iconStyle } from '@react-spectrum/s2/style' with { type: 'macro' };
import { userName } from '../data/mock';

const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  paddingBottom: 24,
});

const headerRowStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const headingStyle = style({
  font: 'heading-xl',
  color: 'neutral',
});

const actionsStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const searchRowStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  maxWidth: 640,
});

export default function WelcomeSection() {
  return (
    <section className={sectionStyle}>
      <div className={headerRowStyle}>
        <h1 className={headingStyle}>Welcome, {userName}!</h1>
        <div className={actionsStyle}>
          <ActionButton isQuiet>
            <Edit styles={iconStyle({ size: 'S' })} />
            <Text>Customize</Text>
          </ActionButton>
          <ActionButton isQuiet>
            <Revert styles={iconStyle({ size: 'S' })} />
            <Text>Reset user template</Text>
          </ActionButton>
        </div>
      </div>

      <div className={searchRowStyle}>
        <SearchField
          aria-label="Ask me anything"
          placeholder="Ask me anything..."
          styles={style({ flexGrow: 1 })}
        />
        <Button variant="accent">Submit</Button>
      </div>
    </section>
  );
}
