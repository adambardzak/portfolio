import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    // Default content for the main OG image
    const title = "Webové aplikace a weby na míru";
    const description = "Vývoj moderních webových aplikací a webů s důrazem na výkon, design a uživatelskou přívětivost.";
    
    // Load Space Grotesk font
    const spaceGroteskFont = await fetch(
      new URL('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap', import.meta.url)
    ).then(res => res.text());
    
    // Extract font URLs from the CSS
    const fontRegularUrl = spaceGroteskFont.match(/src: url\(([^)]+)\)/)?.[1];
    const fontBoldUrl = spaceGroteskFont.match(/src: url\(([^)]+)\)/g)?.[1]?.match(/src: url\(([^)]+)\)/)?.[1];
    
    // Fetch the actual font files
    const fontRegular = fontRegularUrl ? await fetch(new URL(fontRegularUrl, import.meta.url)).then(res => res.arrayBuffer()) : null;
    const fontBold = fontBoldUrl ? await fetch(new URL(fontBoldUrl, import.meta.url)).then(res => res.arrayBuffer()) : null;
    
    // Generate the image
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#0f172a',
            backgroundImage: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15), transparent 70%)',
            padding: '80px',
            position: 'relative',
            fontFamily: '"Space Grotesk", sans-serif',
          }}
        >
          {/* Logo */}
          <div style={{ position: 'absolute', top: 40, left: 40, display: 'flex', alignItems: 'center' }}>
            <div style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>
              {'{ab}'}
            </div>
          </div>
          
          {/* Title */}
          <div style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 24,
            maxWidth: '70%',
            lineHeight: 1.1,
          }}>
            {title}
          </div>
          
          {/* Description */}
          <div style={{
            fontSize: 32,
            color: '#94a3b8',
            maxWidth: '60%',
            lineHeight: 1.3,
          }}>
            {description}
          </div>
          
          {/* Footer */}
          <div style={{
            position: 'absolute',
            bottom: 40,
            left: 40,
            right: 40,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
          }}>
            <div>bardzak.online</div>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['Next.js', 'React', 'TypeScript'].map((tech) => (
                <div key={tech} style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: 16,
                }}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Space Grotesk',
            data: fontRegular,
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Space Grotesk',
            data: fontBold,
            weight: 700,
            style: 'normal',
          },
        ],
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
} 