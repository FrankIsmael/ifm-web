import { ImageResponse } from 'next/server';
import { cvData } from '@/lib/cv-data';

export const runtime = 'edge';
export const alt = `${cvData.displayName} | ${cvData.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '62px 76px',
        width: '100%',
        height: '100%',
        background: '#010101',
        color: '#f2f2f2',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #121212',
          paddingBottom: 24,
        }}
      >
        <div style={{ display: 'flex', fontSize: 40, fontWeight: 700 }}>
          if<span style={{ color: '#00c681' }}>.</span>
        </div>
        <div style={{ display: 'flex', fontSize: 22 }}>
          {cvData.displayName}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 76, letterSpacing: '-4px' }}>
          {cvData.headline}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: '#9e9e9e',
          fontSize: 19,
        }}
      >
        <span>Web products · Cloud · AI agents</span>
        <span>{cvData.location}</span>
      </div>
    </div>,
    { ...size },
  );
}
