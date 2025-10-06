import FlowingMenu from '@/components/FlowingMenu';

const demoItems = [
  { link: '#', text: 'FrostFoe', image: 'https://raw.githubusercontent.com/FrostFoe/recyclebin/refs/heads/main/images/logo.png' },
  { link: '#', text: 'Naimur', image: 'https://raw.githubusercontent.com/MNRfrom2020/logo-and-icon-cdn/refs/heads/main/Logo/Naimur/Naimur%20BGB.png' },
  { link: '#', text: 'Sadman', image: 'https://raw.githubusercontent.com/MNRfrom2020/logo-and-icon-cdn/refs/heads/main/Logo/Sadman/Sadman.jpg' },
  { link: '#', text: 'Alif', image: 'https://raw.githubusercontent.com/MNRfrom2020/logo-and-icon-cdn/refs/heads/main/Logo/Alif/Alif.jpg' }
];

export default function ContributorPage() {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <FlowingMenu items={demoItems} />
    </div>
  );
}
