export type AssetStatus = 'Approved' | 'Draft' | 'Expired' | 'In Review';

export type AssetRecord = {
  id: string;
  filename: string;
  fileType: 'JPG' | 'PSD' | 'MP4' | 'PDF' | 'PNG' | 'SVG' | 'ZIP';
  dimensions: string;
  fileSize: string;
  status: AssetStatus;
  createdAt: string;
  modifiedAt: string;
  createdBy: string;
  tags: string[];
  versions: Array<{
    label: string;
    date: string;
  }>;
  thumbnail: {
    title: string;
    background: string;
    imageSrc?: string;
  };
};

export const assets: AssetRecord[] = [
  {
    id: 'hero-banner-summer',
    filename: 'hero-banner-summer.jpg',
    fileType: 'JPG',
    dimensions: '1920x1080',
    fileSize: '2.4MB',
    status: 'Approved',
    createdAt: 'Jan 14, 2025',
    modifiedAt: 'Mar 11, 2025',
    createdBy: 'Ava Patel',
    tags: ['summer campaign', 'hero image', 'approved', 'web'],
    versions: [
      { label: 'v1', date: 'Jan 14, 2025' },
      { label: 'v2', date: 'Feb 02, 2025' },
      { label: 'v3', date: 'Mar 11, 2025' },
    ],
    thumbnail: {
      title: 'Summer Hero',
      background: 'linear-gradient(135deg, #fff4d6 0%, #ffe08a 45%, #ff8f3f 100%)',
      imageSrc: '/assets/hero-banner-summer.png',
    },
  },
  {
    id: 'product-shot-v3',
    filename: 'product-shot-v3.psd',
    fileType: 'PSD',
    dimensions: '4000x3000',
    fileSize: '45MB',
    status: 'In Review',
    createdAt: 'Feb 18, 2025',
    modifiedAt: 'Apr 01, 2025',
    createdBy: 'Mina Brooks',
    tags: ['product launch', 'retouching', 'review', 'studio'],
    versions: [
      { label: 'v1', date: 'Feb 18, 2025' },
      { label: 'v2', date: 'Mar 08, 2025' },
      { label: 'v3', date: 'Apr 01, 2025' },
    ],
    thumbnail: {
      title: 'Product Shot',
      background: 'linear-gradient(135deg, #e3f2ff 0%, #8ec5ff 50%, #4b7df0 100%)',
    },
  },
  {
    id: 'social-ad-instagram',
    filename: 'social-ad-instagram.mp4',
    fileType: 'MP4',
    dimensions: '1080x1080',
    fileSize: '12MB',
    status: 'Approved',
    createdAt: 'Jan 22, 2025',
    modifiedAt: 'Mar 20, 2025',
    createdBy: 'Jalen Rivera',
    tags: ['social', 'video', 'approved', 'instagram'],
    versions: [
      { label: 'v1', date: 'Jan 22, 2025' },
      { label: 'v2', date: 'Feb 27, 2025' },
      { label: 'v3', date: 'Mar 20, 2025' },
    ],
    thumbnail: {
      title: 'Instagram Ad',
      background: 'linear-gradient(135deg, #f7ddff 0%, #f2a1ff 48%, #8f5cff 100%)',
      imageSrc: '/assets/social-ad-instagram.png',
    },
  },
  {
    id: 'brand-guidelines-2025',
    filename: 'brand-guidelines-2025.pdf',
    fileType: 'PDF',
    dimensions: '8.5x11',
    fileSize: '3.2MB',
    status: 'Approved',
    createdAt: 'Jan 03, 2025',
    modifiedAt: 'Jan 29, 2025',
    createdBy: 'Lena Carter',
    tags: ['brand', 'guidelines', 'approved', 'pdf'],
    versions: [
      { label: 'v1', date: 'Jan 03, 2025' },
      { label: 'v2', date: 'Jan 18, 2025' },
      { label: 'v3', date: 'Jan 29, 2025' },
    ],
    thumbnail: {
      title: 'Brand Guide',
      background: 'linear-gradient(135deg, #ffe5e8 0%, #ffbfc5 52%, #f45d7e 100%)',
      imageSrc: '/assets/brand-guidelines-2025.png',
    },
  },
  {
    id: 'email-header-promo',
    filename: 'email-header-promo.png',
    fileType: 'PNG',
    dimensions: '600x200',
    fileSize: '540KB',
    status: 'Draft',
    createdAt: 'Mar 06, 2025',
    modifiedAt: 'Mar 30, 2025',
    createdBy: 'Nadia Kim',
    tags: ['email', 'campaign', 'draft', 'web'],
    versions: [
      { label: 'v1', date: 'Mar 06, 2025' },
      { label: 'v2', date: 'Mar 17, 2025' },
      { label: 'v3', date: 'Mar 30, 2025' },
    ],
    thumbnail: {
      title: 'Email Header',
      background: 'linear-gradient(135deg, #fff3de 0%, #ffd59a 48%, #ffab47 100%)',
    },
  },
  {
    id: 'lifestyle-photo-outdoor',
    filename: 'lifestyle-photo-outdoor.jpg',
    fileType: 'JPG',
    dimensions: '3840x2160',
    fileSize: '8.1MB',
    status: 'Approved',
    createdAt: 'Feb 12, 2025',
    modifiedAt: 'Mar 04, 2025',
    createdBy: 'Chris Moreno',
    tags: ['outdoor', 'lifestyle', 'approved', 'photo'],
    versions: [
      { label: 'v1', date: 'Feb 12, 2025' },
      { label: 'v2', date: 'Feb 25, 2025' },
      { label: 'v3', date: 'Mar 04, 2025' },
    ],
    thumbnail: {
      title: 'Outdoor Lifestyle',
      background: 'linear-gradient(135deg, #dff8e9 0%, #93deb2 48%, #2d9d78 100%)',
      imageSrc: '/assets/lifestyle-photo-outdoor.png',
    },
  },
  {
    id: 'product-demo-video',
    filename: 'product-demo-video.mp4',
    fileType: 'MP4',
    dimensions: '1920x1080',
    fileSize: '156MB',
    status: 'In Review',
    createdAt: 'Jan 30, 2025',
    modifiedAt: 'Apr 02, 2025',
    createdBy: 'Harper Singh',
    tags: ['video', 'product demo', 'review', 'launch'],
    versions: [
      { label: 'v1', date: 'Jan 30, 2025' },
      { label: 'v2', date: 'Mar 01, 2025' },
      { label: 'v3', date: 'Apr 02, 2025' },
    ],
    thumbnail: {
      title: 'Demo Video',
      background: 'linear-gradient(135deg, #dee9ff 0%, #9abbff 48%, #5a7fff 100%)',
    },
  },
  {
    id: 'icon-set-v2',
    filename: 'icon-set-v2.svg',
    fileType: 'SVG',
    dimensions: '24x24',
    fileSize: '12KB',
    status: 'Approved',
    createdAt: 'Feb 07, 2025',
    modifiedAt: 'Feb 14, 2025',
    createdBy: 'Priya Allen',
    tags: ['icons', 'svg', 'approved', 'design system'],
    versions: [
      { label: 'v1', date: 'Feb 07, 2025' },
      { label: 'v2', date: 'Feb 10, 2025' },
      { label: 'v3', date: 'Feb 14, 2025' },
    ],
    thumbnail: {
      title: 'Icon Set',
      background: 'linear-gradient(135deg, #ece6ff 0%, #c4b4ff 52%, #8f6cec 100%)',
      imageSrc: '/assets/icon-set-v2.png',
    },
  },
  {
    id: 'annual-report-2025',
    filename: 'annual-report-2025.pdf',
    fileType: 'PDF',
    dimensions: '8.5x11',
    fileSize: '15MB',
    status: 'Expired',
    createdAt: 'Dec 15, 2024',
    modifiedAt: 'Jan 09, 2025',
    createdBy: 'Marcus Lee',
    tags: ['report', 'expired', 'finance', 'pdf'],
    versions: [
      { label: 'v1', date: 'Dec 15, 2024' },
      { label: 'v2', date: 'Jan 04, 2025' },
      { label: 'v3', date: 'Jan 09, 2025' },
    ],
    thumbnail: {
      title: 'Annual Report',
      background: 'linear-gradient(135deg, #ffe1e2 0%, #ffb1b5 50%, #ff6b74 100%)',
    },
  },
  {
    id: 'banner-holiday-sale',
    filename: 'banner-holiday-sale.jpg',
    fileType: 'JPG',
    dimensions: '1200x628',
    fileSize: '1.8MB',
    status: 'Draft',
    createdAt: 'Feb 21, 2025',
    modifiedAt: 'Mar 28, 2025',
    createdBy: 'Julia Scott',
    tags: ['holiday', 'draft', 'banner', 'sale'],
    versions: [
      { label: 'v1', date: 'Feb 21, 2025' },
      { label: 'v2', date: 'Mar 10, 2025' },
      { label: 'v3', date: 'Mar 28, 2025' },
    ],
    thumbnail: {
      title: 'Holiday Banner',
      background: 'linear-gradient(135deg, #fff0e2 0%, #ffd09a 48%, #ff9d57 100%)',
    },
  },
  {
    id: 'team-headshots-collection',
    filename: 'team-headshots-collection.zip',
    fileType: 'ZIP',
    dimensions: 'N/A',
    fileSize: '234MB',
    status: 'Approved',
    createdAt: 'Jan 09, 2025',
    modifiedAt: 'Mar 08, 2025',
    createdBy: 'Darius Young',
    tags: ['headshots', 'zip', 'approved', 'archive'],
    versions: [
      { label: 'v1', date: 'Jan 09, 2025' },
      { label: 'v2', date: 'Feb 15, 2025' },
      { label: 'v3', date: 'Mar 08, 2025' },
    ],
    thumbnail: {
      title: 'Headshots',
      background: 'linear-gradient(135deg, #e3ebff 0%, #b9caff 48%, #7d94ff 100%)',
      imageSrc: '/assets/team-headshots-collection.png',
    },
  },
  {
    id: 'firefly-generated-bg',
    filename: 'firefly-generated-bg.png',
    fileType: 'PNG',
    dimensions: '2048x2048',
    fileSize: '4.5MB',
    status: 'In Review',
    createdAt: 'Mar 12, 2025',
    modifiedAt: 'Apr 03, 2025',
    createdBy: 'Sophia Chen',
    tags: ['firefly', 'background', 'review', 'creative'],
    versions: [
      { label: 'v1', date: 'Mar 12, 2025' },
      { label: 'v2', date: 'Mar 24, 2025' },
      { label: 'v3', date: 'Apr 03, 2025' },
    ],
    thumbnail: {
      title: 'Generated BG',
      background: 'linear-gradient(135deg, #f0e3ff 0%, #cfadff 48%, #9d7bff 100%)',
    },
  },
];

export const assetFileTypes = ['All', 'JPG', 'PSD', 'MP4', 'PDF', 'PNG', 'SVG', 'ZIP'] as const;
export const assetStatuses = ['All', 'Approved', 'Draft', 'Expired', 'In Review'] as const;
