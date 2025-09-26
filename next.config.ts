
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'study.mnr.world',
        port: '',
        pathname: '/**',
      },
      { protocol: 'https', hostname: 'www.buet.ac.bd' },
      { protocol: 'https', hostname: 'www.ru.ac.bd' },
      { protocol: 'https', hostname: 'cu.ac.bd' },
      { protocol: 'https', hostname: 'juniv.edu' },
      { protocol: 'https', hostname: 'www.bau.edu.bd' },
      { protocol: 'https', hostname: 'www.kuet.ac.bd' },
      { protocol: 'https', hostname: 'www.ruet.ac.bd' },
      { protocol: 'https', hostname: 'www.cuet.ac.bd' },
      { protocol: 'https', hostname: 'www.duet.ac.bd' },
      { protocol: 'https', hostname: 'butex.edu.bd' },
      { protocol: 'https', hostname: 'mist.ac.bd' },
      { protocol: 'https', hostname: 'www.sust.edu' },
      { protocol: 'https', hostname: 'bsmmu.edu.bd' },
      { protocol: 'https', hostname: 'www.iu.ac.bd' },
      { protocol: 'https', hostname: 'ku.ac.bd' },
      { protocol: 'https', hostname: 'jnu.ac.bd' },
      { protocol: 'https', hostname: 'www.cou.ac.bd' },
      { protocol: 'https', hostname: 'jkkniu.edu.bd' },
      { protocol: 'https', hostname: 'bup.edu.bd' },
      { protocol: 'https', hostname: 'www.brur.ac.bd' },
      { protocol: 'https', hostname: 'www.bu.ac.bd' },
      { protocol: 'https', hostname: 'just.edu.bd' },
      { protocol: 'https', hostname: 'mbstu.ac.bd' },
      { protocol: 'https', hostname: 'hstu.ac.bd' },
      { protocol: 'https', hostname: 'nstu.edu.bd' },
      { protocol: 'https', hostname: 'pstu.ac.bd' },
      { protocol: 'https', hostname: 'pust.ac.bd' },
      { protocol: 'https', hostname: 'rmstu.ac.bd' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' }
    ],
  },
};

export default nextConfig;
