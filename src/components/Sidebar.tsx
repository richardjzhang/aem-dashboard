import { ActionButton, Divider, Text, Picker, PickerItem } from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import Home from '@react-spectrum/s2/icons/Home';
import Edit from '@react-spectrum/s2/icons/Edit';
import Cloud from '@react-spectrum/s2/icons/Cloud';
import ChartTrend from '@react-spectrum/s2/icons/ChartTrend';
import Apps from '@react-spectrum/s2/icons/Apps';
import Plugin from '@react-spectrum/s2/icons/Plugin';
import Settings from '@react-spectrum/s2/icons/Settings';
import Key from '@react-spectrum/s2/icons/Key';
import Target from '@react-spectrum/s2/icons/Target';
import Lock from '@react-spectrum/s2/icons/Lock';
import GlobeGrid from '@react-spectrum/s2/icons/GlobeGrid';
import File from '@react-spectrum/s2/icons/File';
import { iconStyle } from '@react-spectrum/s2/style' with { type: 'macro' };

const sidebarStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: 224,
  height: 'full',
  paddingY: 8,
  flexShrink: 0,
  overflow: 'auto',
});

const sectionHeaderStyle = style({
  font: 'body-xs',
  color: 'neutral-subdued',
  paddingX: 16,
  paddingTop: 16,
  paddingBottom: 4,
  fontWeight: 'bold',
});

const iconSize = iconStyle({ size: 'S', color: 'neutral' });

interface SidebarNavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

function SidebarNavItem({ icon, label, isActive }: SidebarNavItemProps) {
  return (
    <ActionButton
      isQuiet
      UNSAFE_style={{
        width: '100%',
        justifyContent: 'flex-start',
        borderRadius: 8,
        ...(isActive ? { backgroundColor: '#e8e8e8' } : {}),
      }}
    >
      {icon}
      <Text>{label}</Text>
    </ActionButton>
  );
}

export default function Sidebar() {
  return (
    <nav className={sidebarStyle} style={{ backgroundColor: '#fff', borderRight: '1px solid #e0e0e0' }}>
      <div className={style({ paddingX: 12, paddingBottom: 8 })}>
        <Picker
          aria-label="Select environment"
          placeholder="Select environment"
          isQuiet
          styles={style({ width: 'full' })}
        >
          <PickerItem id="env1">Production</PickerItem>
          <PickerItem id="env2">Staging</PickerItem>
          <PickerItem id="env3">Development</PickerItem>
        </Picker>
      </div>

      <div className={style({ display: 'flex', flexDirection: 'column', gap: 2, paddingX: 8 })}>
        <SidebarNavItem icon={<Home styles={iconSize} />} label="Home" isActive />
        <SidebarNavItem icon={<Edit styles={iconSize} />} label="Universal Editor" />
        <SidebarNavItem icon={<Cloud styles={iconSize} />} label="Cloud Manager" />
        <SidebarNavItem icon={<ChartTrend styles={iconSize} />} label="Cloud Acceleration Manager" />
        <SidebarNavItem icon={<Apps styles={iconSize} />} label="Software Distribution" />
        <SidebarNavItem icon={<Plugin styles={iconSize} />} label="Extension Manager" />
      </div>

      <div className={style({ paddingX: 12, paddingY: 4 })}>
        <Divider size="S" />
      </div>

      <div className={sectionHeaderStyle}>Security and Compliance</div>

      <div className={style({ display: 'flex', flexDirection: 'column', gap: 2, paddingX: 8 })}>
        <SidebarNavItem icon={<Settings styles={iconSize} />} label="Security Health" />
        <SidebarNavItem icon={<Target styles={iconSize} />} label="Penetration Tests" />
        <SidebarNavItem icon={<Key styles={iconSize} />} label="Customer Managed Keys" />
        <SidebarNavItem icon={<Lock styles={iconSize} />} label="Advanced WAF" />
        <SidebarNavItem icon={<GlobeGrid styles={iconSize} />} label="CDN Traffic" />
        <SidebarNavItem icon={<File styles={iconSize} />} label="Security Documents" />
      </div>
    </nav>
  );
}
